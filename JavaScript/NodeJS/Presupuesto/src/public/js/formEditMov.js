import { DOMModalFormNvoMov, parseDivPaneNvoMov, submitFormNvoMov } from "./formNvoMov.js";

export function editFormString(movimientoString) {
    editForm(JSON.parse(movimientoString));
}

export function editForm(movimiento) {
    const divPaneNvoMovParsed = parseDivPaneNvoMov(movimiento.tipo);
    DOMModalFormNvoMov.querySelector(".card-header > h5#cardTitle").textContent = "Editar Movimiento";
    DOMModalFormNvoMov.querySelector("#navNvoMovTipo").style.display = "none";
    const form = divPaneNvoMovParsed.querySelector("form");
    movimiento["añoMov"] = movimiento["mes"].slice(0, 4);
    movimiento["mesMov"] = movimiento["mes"].slice(4, 6);
    form["_id"].disabled = false;
    const flattenObj = flattenObject(movimiento);
    for (const key in flattenObj) {
        if (key in form) form[key].value = flattenObj[key];
    }
    form.closest("dialog").showModal();
}

function flattenObject(object) {
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
}