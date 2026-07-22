
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
        "Ortodoncia",
        "Extracciones Ef",
        "Mecánico Auto",
        "Club Parque VS",
        "Gs Varios Salidas",
]

const categoriasGastos = {};
categoriasGastos["Alquiler"] = categoriasGastos["Expensas"] = "Vivienda";
categoriasGastos["Cochera"] = categoriasGastos["Mecánico Auto"] = "Auto";
categoriasGastos["Visa BH"] = categoriasGastos["PowerCard"] = "Tarjetas";
categoriasGastos["Comidita Mami"] = categoriasGastos["🛒Makro"] = "Alimentación";
categoriasGastos["OS Mami"] = "Otros";
categoriasGastos["Limp Gracielita"] = "Limpieza";
categoriasGastos["Ortodoncia"] = "Salud";
categoriasGastos["Extracciones Ef"] = categoriasGastos["Club Parque VS"] = "Otros";
categoriasGastos["Gs Varios Salidas"] = "Ocio"

const habitualGastos = {}
habitualGastos["Alquiler"] = habitualGastos["Expensas"]
 = habitualGastos["Cochera"] = habitualGastos["Visa BH"]
  = habitualGastos["PowerCard"] = habitualGastos["Comidita Mami"]
   = habitualGastos["OS Mami"] = habitualGastos["Limp Gracielita"] = true;


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

    console.log(event.target);
    
    console.log({formData});
    console.log([...formData]);
    console.log([...formData.entries()]);

    fetch("/api/movimiento/lote", {
        method: "POST",
        body: formData
    })
        .then(async response => {
            const result = await response.json();
            console.log(result);
        })
        .catch(error => {
            console.error("Error submitting the form:", error);
        });
}