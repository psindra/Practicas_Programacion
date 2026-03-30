import { updateUI } from "../index.js";
import { DOMModalFormNvoMov, parseDivPaneNvoMov, submitFormNvoMov } from "./formNvoMov.js";
import mensajeModal from "./modalAlert.js";

export function editFormString(movimientoString) {
    editForm(JSON.parse(movimientoString));
}

export function editForm(movimiento) {
    const divPaneNvoMovParsed = parseDivPaneNvoMov(movimiento.tipo);
    DOMModalFormNvoMov.querySelector(".card-header > h5#cardTitle").textContent = `Editar ${movimiento.tipo}`;
    DOMModalFormNvoMov.querySelector("#navNvoMovTipo").style.display = "none";
    const form = divPaneNvoMovParsed.querySelector("form");
    movimiento["añoMov"] = movimiento["mes"].slice(0, 4);
    movimiento["mesMov"] = movimiento["mes"].slice(4, 6);
    form["_id"].parentElement.hidden = form["_id"].hidden = form["_id"].disabled = false;
    const flattenObj = flattenObject(movimiento);
    for (const key in flattenObj) {
        const element= form.querySelector(`[name="${key}"]:not([type="hidden"])`);
        if(element){
            element[ element.type === "checkbox" ? "checked" : "value" ] = flattenObj[key];
            element?.dispatchEvent(new Event("change")); // Para mostrar/ocultar campos condicionales
        }
    }

    /* en este caso como se ejecuta cada vez que se parsea un EditForm
        tuve que utilizar "onclick" en vez de "addEventListener" */
    divPaneNvoMovParsed.querySelector("#btnEliminarMov").onclick = function() {
        eliminarMovimiento(this);
    }
    
    form.closest("dialog").showModal();
}

/* function flattenObject(object) {
    let flatObject = {};
    Object.entries(object).forEach(([key, value]) => {
        const subflatObject = recursiveFlattenObject({ [key]: value });
        flatObject = { ...flatObject, ...subflatObject };
    });
    return flatObject;
}

function recursiveFlattenObject(object) {
    return Object.entries(object).map(([key, value]) => {
        if (typeof value === "object" && !Array.isArray(value)) {
            const flatSubObject = recursiveFlattenObject(value);
            const [subKey, subValue] = Object.entries(flatSubObject)[0];
            return { [key + "." + subKey]: subValue };
        } else {
            return { [key]: value };
        }
    })[0];
} */


function flattenObject(objeto, prefijo="", resultado={}){
    for (const [key, value] of Object.entries(objeto)) {
        if (typeof value === "object" && !Array.isArray(value)) {
            flattenObject(value, prefijo + key + ".", resultado);
        } else {
            resultado[prefijo + key] = value;
        }
    }
    return resultado;
}



export function eliminarMovimiento(button) {
    const id = button.closest("form")["_id"].value;
    fetch("/api/movimiento/",
        {
            method: "DELETE",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({ _id: id })
        })  
        .then(async response => {
            if (!response.ok) throw new Error(JSON.stringify(await response.json()));
            return response.json();
        })
        .then(result => {
            mensajeModal("Movimiento eliminado exitosamente:", result);
            button.closest("form").reset();
            button.closest("dialog").close();
            updateUI();
        })
        .catch(error => {
            console.error("Error al eliminar movimiento:\n", error)
            mensajeModal("Error al eliminar movimiento:\n", error.message || error);
        })
}
