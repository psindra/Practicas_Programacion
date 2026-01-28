// reAUTH();
const operarComprarPath = "api/v2/operar/Comprar";

const formularioNuevaOrden = document.getElementById("formularioNuevaOrden");
formularioNuevaOrden.addEventListener("submit", async (ev) => {
    ev.preventDefault();
    const formDataFormularioNuevaOrden = new FormData(formularioNuevaOrden);
    const urlParams = new URLSearchParams(formDataFormularioNuevaOrden);

    cookieStore.get("auth-token").then(async cookie => {
        if(!cookie){
             await reAUTH();
             return cookieStore.get("auth-token");
        }
        return cookie;        
    })
    .then(async cookie => {
        const token = cookie.value;
        return fetch(apiHost + operarComprarPath, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: urlParams,
            mode: "cors",
            redirect: "follow",
        });
    })
    .then(response => {
        if(response.status === 401) throw new Error(`Token expirado o error de autenticación.\n ${await (response.text())}`);
        if(!response.ok) throw new Error(`Error con la petición REST:<br> ${response.status}<br> ${response.statusText}`);
        return response.json();
    })
    .then(json => {
        if(!json.numeroOperacion || json.ok === false){
            throw new Error(JSON.stringify(json.messages, null, 3));
        }
        return json;
    })
    .then(data => {
        // formularioNuevaOrden.reset();
        mensajeModal("Operación Exitosa", `La orden de compra se ha realizado con éxito. Detalles:<br>${JSON.stringify(data, null, 3)}`);
    })
    .catch(async err => {
        mensajeModal("Error con la operación de Compra", `${err.message}`);
    });
})