import { updateUI } from "../index.js";
import mensajeModal from "./modalAlert.js";

const DOMModalFormNvoMov = await fetch("./templates/template_dialogNvoMov.html")
    .then(response => response.text())
    .then(text => {
        const doc = new DOMParser().parseFromString(text, "text/html");
        return doc.body.children[0];
    })
    .catch(error => {
        console.error("Error fetching or parsing the template:", error);
        return null;
    });

const DOMdivPaneNvoMov = await fetch("./templates/template_formNvoMov.html")
    .then(response => response.text())
    .then(text => {
        const doc = new DOMParser().parseFromString(text, "text/html");
        return doc.body.children[0];
    })
    .catch(error => {
        console.error("Error fetching or parsing the template:", error);
        return null;
    });


function submitFormNvoMov(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const data = formData.entries().reduce((_data, [key, value]) => {
        if (value === "") { return _data; }
        
        /* Algoritmo para pasar bar.foo.too a bar: {foo: too} */
        return key.split(".").reduce((nestedObj, keySubPart, index, array) => {
            if (index === array.length - 1) {
                nestedObj[keySubPart] = value;
                return _data;
            }
            nestedObj[keySubPart] = nestedObj[keySubPart] || {};
            return nestedObj[keySubPart];
        }, _data);
        /*  */

    }, {});

    data["mes"] = data["añoMov"] + data["mesMov"];

    if (data["tipo"] === "inversion") data["nombre"] = data["instrumento"];
    if (data["_id"]) data["id"] = data["_id"];

    console.log("Datos del nuevo movimiento:", data);
    // Aquí puedes agregar la lógica para enviar los datos al servidor o procesarlos según tus necesidades

    fetch("/api/movimiento", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
        .then(async response => {
            if (!response.ok) throw new Error(JSON.stringify(await response.json()));
            return response.json();
        })
        .then(result => {
            console.log("Movimiento creado exitosamente:", result);
            event.target.reset();
            event.target.closest("dialog").close();
            updateUI();
        })
        .catch(error => {
            console.error("Error al crear movimiento:\n", error)
            mensajeModal("Error al crear movimiento:\n", error.message || error);
        })
}

function parseDivPaneNvoMov(tipo = "ingreso") {

    DOMModalFormNvoMov.querySelector("#navNvoMovTipo").style.display = "";
    const pillsNvoMovContent = DOMModalFormNvoMov.querySelector("#pillsNvoMovContent");
    pillsNvoMovContent.children[0]?.classList.remove("active", "show");
    pillsNvoMovContent.children[0]?.remove();

    const divPaneNvoMovParsed = DOMdivPaneNvoMov.cloneNode(true);
    

    // Filtrado por TC o Contado
    divPaneNvoMovParsed.querySelector("form select#formaPagoNvoMov").addEventListener("change", function () {
        divPaneNvoMovParsed.querySelector("form div:has(>input#nroCuotasNvoMov)").style.display = (this.value === "Contado") ? "none" : "";
        divPaneNvoMovParsed.querySelector("form input#nroCuotasNvoMov").disabled = (this.value === "Contado");

        divPaneNvoMovParsed.querySelector("form div:has(>select#añoResumenMov), form div:has(>select#añoResumenMov)").style.display = (this.value === "Contado") ? "none" : "";
        divPaneNvoMovParsed.querySelector("form select#añoResumenMov").disabled = (this.value === "Contado");
    })
    divPaneNvoMovParsed.querySelector("form select#formaPagoNvoMov").dispatchEvent(new Event("change"));

    divPaneNvoMovParsed.querySelectorAll("[data-tipo]").forEach(element => {
        if (!element.getAttribute("data-tipo").includes(tipo)) {
            element.remove();
        }
    });
    divPaneNvoMovParsed.querySelector("form")["tipo"].value = tipo;



    divPaneNvoMovParsed.querySelector("#formularioNvoMov").addEventListener("submit", submitFormNvoMov);
    pillsNvoMovContent.appendChild(divPaneNvoMovParsed);

    return divPaneNvoMovParsed;
}

function parseModalFormNvoMov() {
    document.body.appendChild(DOMModalFormNvoMov);
    // document.querySelectorAll("dialog")[0].showModal();
    const divPaneNvoMovParsed = parseDivPaneNvoMov();

    const btnNvoMov = document.querySelector("#btnNvoMov");
    btnNvoMov.addEventListener("click", () => {
    DOMModalFormNvoMov.querySelector(".card-header > h5#cardTitle").textContent = "Agregar Movimiento";
        parseDivPaneNvoMov();
        DOMModalFormNvoMov.showModal();
    });

    const btn_pillNvoMovIngreso = DOMModalFormNvoMov.querySelector("#pillNvoMovIngreso");
    btn_pillNvoMovIngreso.addEventListener("click", () => {
        parseDivPaneNvoMov("ingreso");
    });
    const btn_pillNvoMovGasto = DOMModalFormNvoMov.querySelector("#pillNvoMovGasto");
    btn_pillNvoMovGasto.addEventListener("click", () => {
        parseDivPaneNvoMov("gasto");
    });
    const btn_pillNvoMovInversion = DOMModalFormNvoMov.querySelector("#pillNvoMovInversion");
    btn_pillNvoMovInversion.addEventListener("click", () => {
        parseDivPaneNvoMov("inversion");
    });
}


export { DOMModalFormNvoMov, DOMdivPaneNvoMov, parseModalFormNvoMov, parseDivPaneNvoMov, submitFormNvoMov };

console.log({ DOMModalFormNvoMov });
console.log({ DOMdivPaneNvoMov });
