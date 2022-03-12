// chrome.webRequest.onHeadersReceived.addListener((details) => {
//     //console.log("onHeadersReceived 1: ", details);
//     details.responseHeaders.find((header) => {
//         if (header.name.toLowerCase() == 'access-control-allow-origin') { header.value = '*'; return true; }
//     }) ? null : details.responseHeaders.push({ "name": "Access-Control-Allow-Origin", "value": details.initiator });

//     details.responseHeaders.push({ "name": "Access-Control-Allow-Credentials", "value": "true" });
//     details.responseHeaders.push({ "name": "Access-Control-Allow-Methods", "value": "DELETE, OPTIONS, PROPFIND, PROPPATCH, COPY, MKCOL, MOVE, LOCK" });
//     //details.responseHeaders.push({"name": "Access-Control-Allow-Headers", "value": "*"});
//     //console.log("onHeadersReceived 2: ", details.responseHeaders);
//     return { "responseHeaders": details.responseHeaders };
// },
//  { urls: ['https://webbrowsertools.com/*', 'https://example.com/*', 'https://*/'] },
//  ["blocking", "responseHeaders", "extraHeaders"]);

// función que se queda escuchando todos los paquetes, y modifica/agrega los header correspondientes para inhibir CORS
const listenerFn = (details) => {
    details.responseHeaders.find((header) => {
        if (header.name.toLowerCase() == 'access-control-allow-origin') { header.value = '*'; return true; }
    }) ? null : details.responseHeaders.push({ name: "Access-Control-Allow-Origin", "value": details.initiator });

    details.responseHeaders.push({ "name": "Access-Control-Allow-Credentials", "value": "true" });
    details.responseHeaders.push({ "name": "Access-Control-Allow-Methods", "value": "DELETE, OPTIONS, PROPFIND, PROPPATCH, COPY, MKCOL, MOVE, LOCK" });
    //details.responseHeaders.push({"name": "Access-Control-Allow-Headers", "value": "*"});
    return { "responseHeaders": details.responseHeaders };
};


// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // 
var active = false;

chrome.browserAction.onClicked.addListener((tab) => {
    // al hacer click en el ícono de la Extensión
    if(active = !active){
        // si se activa, se agrega el listener a la escucha de encabezados
        chrome.webRequest.onHeadersReceived.addListener( listenerFn,
            { urls: ['https://webbrowsertools.com/*', 'https://example.com/*', 'https://*/', '<all_urls>'] },
            ["blocking", "responseHeaders", "extraHeaders"]);
    } else {
        // si se desactiva, elimina el Listener que se agregó antes
        chrome.webRequest.onHeadersReceived.removeListener(listenerFn);
    }

    // leyenda al poner el mouse encima
    chrome.browserAction.setTitle({
        title: active ? "activado" : "desactivado"
    });

    // cartel tipo subindice que aparece junto al ícono
    chrome.browserAction.setBadgeText({
        text: active ? "Act" : "Des"
    });

    // color del ícono
    chrome.browserAction.setBadgeBackgroundColor({
        color: active ? "#5084ee":"#e91e63"
    });
})