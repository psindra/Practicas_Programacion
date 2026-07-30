import { updateUI } from "../index.js";
import { mensajeModal } from "./modalAlert.js";

const nombresGastos = [
     "Alquiler",
        "Expensas",
        "Cochera",
        "Visa BH",
        "PowerCard",
        "Comidita Mami",
        "OS Mami",
        "Limp Gracielita",
        "🛒Makro",
        "Ropa",
        "Ortodoncia",
        "Extracciones Ef",
        "Mecánico Auto",
        "Franquicia Auto",
        "Club Parque VS",
        "Gs Varios Salidas",
]

const categoriasGastos = {};
categoriasGastos["Alquiler"] = categoriasGastos["Expensas"] = "Vivienda";
categoriasGastos["Cochera"] = categoriasGastos["Mecánico Auto"] = categoriasGastos["Franquicia Auto"] = "Auto";
categoriasGastos["Visa BH"] = categoriasGastos["PowerCard"] = "Tarjetas";
categoriasGastos["Comidita Mami"] = categoriasGastos["🛒Makro"] = "Alimentación";
categoriasGastos["OS Mami"] = "Otros";
categoriasGastos["Ropa"] = "Vestimenta";
categoriasGastos["Limp Gracielita"] = "Limpieza";
categoriasGastos["Ortodoncia"] = "Salud";
categoriasGastos["Extracciones Ef"] = categoriasGastos["Club Parque VS"] = "Otros";
categoriasGastos["Gs Varios Salidas"] = "Ocio"

const habitualGastos = {}
habitualGastos["Alquiler"] = habitualGastos["Expensas"]
 = habitualGastos["Cochera"] = habitualGastos["Visa BH"]
  = habitualGastos["PowerCard"] = habitualGastos["Comidita Mami"]
   = habitualGastos["OS Mami"] = habitualGastos["Limp Gracielita"]
   = habitualGastos["🛒Makro"]= habitualGastos["Extracciones Ef"] = true;


const DOMModalFormNvoMovLote = await fetch("./templates/template_formNvoMovLote.html")
    .then(response => response.text())
    .then(text => {
        const doc = new DOMParser().parseFromString(text, "text/html");
        return doc.body.children[0];
    })
    .catch(error => {
        console.error("Error fetching or parsing the template:", error);
        return null;
    });


export function parseModalFormNvoMovLote() {
    DOMModalFormNvoMovLote.querySelector("#nombreGastoList").innerHTML
     = nombresGastos.map(nombre => `<option value="${nombre}">${nombre}</option>`).join("\n");
    document.body.appendChild(DOMModalFormNvoMovLote);
    const form = DOMModalFormNvoMovLote.querySelector("form");
    form.addEventListener("submit", submitFormNvoMovLote);
}

function submitFormNvoMovLote(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const movimientos = [];

    formData.getAll("nombreGasto[]").forEach((nombre, index) => {
        movimientos.push({
            mes: formData.get("añoMov") + formData.get("mesMov"),
            nombre: nombre,
            tipo: "gasto",
            formaPago: "Contado",
            monto:{total: parseFloat(formData.getAll("montoGasto[]")[index])},
            categoria: categoriasGastos[nombre] || "Otros",
            habitual: habitualGastos[nombre] || false,
        });
    });

    formData.getAll("nombreCredito[]").forEach((nombre, index) => {
        movimientos.push({
            mes: formData.get("añoMov") + formData.get("mesMov"),
            nombre: nombre,
            tipo: "credito",
            formaPago: "Contado",
            monto:{
                total: parseFloat(formData.getAll("montoCredito[]")[index]),
                nroCuotas: parseInt(formData.getAll("nroCuotasCredito[]")[index])
            },
            formaDebito: formData.getAll("formaDebitoCredito[]")[index] || "Otros",
        });
    });

    if (!movimientos.length) {
        mensajeModal("Error", "No se han ingresado movimientos para procesar.");
        return;
    }

    movimientos.reduce((promesaAnterior, movimiento) => {
        return promesaAnterior.then(() => {
            return fetch("/api/movimiento/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(movimiento)
            })
            .then(async response => {
                if (!response.ok) throw new Error(JSON.stringify(await response.json()));
                return response.json();
            })
            .then(result => {
            return mensajeModal(`Movimiento ${(movimiento["_id"])? "modificado" : "creado"} exitosamente:`, result);
            })
            .catch(error => {
                console.error(`Error al ${(movimiento["_id"])? "modificar" : "crear"} movimiento:\n`, error)
                return mensajeModal(`Error al ${(movimiento["_id"])? "modificar" : "crear"} movimiento:\n`, error.message || error);
            });
        });
    }, Promise.resolve())
    .then(() => {
        mensajeModal("Éxito", "Todos los movimientos han sido procesados exitosamente.");
        event.target.reset();
        event.target.querySelectorAll("fieldset > :has(input)").forEach(div => div.remove());
        bootstrap.Modal.getInstance(event.target.closest(".modal")).hide();
        updateUI();
    })
    .catch(error => {
        console.error("Error movimientos por lotes:", error);
        mensajeModal("Error movimientos por lotes:\n", error.message || error);
    });
}

DOMModalFormNvoMovLote.querySelectorAll("fieldset").forEach(function (fieldset) {
    fieldset.addEventListener("paste", function (event) {
        const table = parseClipboardData(event.clipboardData);

        console.table(table);
        console.log(table);

        table.forEach((row, index) => {
            this.innerHTML += `<div class="row g-2 p-2">
            <div class="col">
                <input type="number" name="monto${fieldset.dataset.nombreInput}[]" class="form-control text-end" placeholder="Monto ${fieldset.dataset.nombreInput}" value="${row[0].replaceAll(" ", "")}" required>
            </div>
            <div class="col">
                <input type="text" class="form-control text-start" name="nombre${fieldset.dataset.nombreInput}[]" placeholder="Nombre del ${fieldset.dataset.nombreInput}"
                  list="nombre${fieldset.dataset.nombreInput}List" value="${row[1]}" required>
            </div>
            ${(fieldset.dataset.nombreInput === "Credito") ? 
                `<div class="col-1 p-0">
                    <input type="text" name="nroCuotas${fieldset.dataset.nombreInput}[]" class="form-control"
                             placeholder="Nro Cuotas ${fieldset.dataset.nombreInput}"
                             inputmode="numeric" pattern="[0-9]*"
                             maxlength="2" minlength="1"
                             value="${row[2] ?? '0'}" required>
                </div>
                <div class="col-3">
                    <select name="formaDebito${fieldset.dataset.nombreInput}[]" class="form-select" required>
                        <option value="" ${(!row[3]) ? "selected" : ""}>--</option>
                        <option value="TC Visa BH" ${(row[3] === "TC Visa BH") ? "selected" : ""}>TC Visa BH</option>
                        <option value="TC Powercard" ${(row[3] === "TC Powercard") ? "selected" : ""}>TC Powercard</option>
                        <option value="Otros" ${(row[3] === "Otros") ? "selected" : ""}>Otros</option>
                    </select>
                </div>` : ``}
            <div class="col-1 align-self-center">
                <button type="button" class="btn btn-close" onclick='this.closest(".row").remove()'></button>
            </div>
        </div>`;
        });
        this.querySelectorAll("input[type='text']").forEach(input => {
            input.addEventListener("input", function () {
                if (nombresGastos.includes(this.value)) {
                    this.classList.add("is-valid");
                } else {
                    this.classList.remove("is-valid");
                }
            });
            input.dispatchEvent(new Event("input"));
        });
    });


    /* // ev.preventDefault();
    console.log(event);
    console.warn("ev.clipboardData.types");
    console.log(event.clipboardData.types);
    console.warn("ev.clipboardData.files");
    console.log(event.clipboardData.files);
    console.warn("ev.clipboardData.items");
    console.log(event.clipboardData.items);
    
    for (const item of event.clipboardData.items) {
        console.warn("item");
        console.log(item);
        console.log(event.clipboardData.getData(item.type));
        if (item.kind === "file") {
            const archivo = item.getAsFile();
            console.log("Archivo pegado:", archivo);
        }
    }

    const archivo = event.clipboardData.files[0];
    console.log(archivo);

    // Verifica que exista un archivo y que sea una imagen
    if (archivo && archivo.type.startsWith('image/')) {
        const urlImagen = URL.createObjectURL(archivo);

        const nuevaImagen = document.createElement('img');
        nuevaImagen.src = urlImagen;

        document.body.appendChild(nuevaImagen);
    } */
});

function parseClipboardData(clipboardData) {
    const text = clipboardData.getData('text/plain');
    const table = text.split(/\r\n|\r|\n/).map(row => row.split('\t'));
    return table;
}
