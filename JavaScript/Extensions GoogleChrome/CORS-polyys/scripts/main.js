chrome.webRequest.onHeadersReceived.addListener((details) => {
    //console.log("onHeadersReceived 1: ", details);
    details.responseHeaders.find((header) => {
        if (header.name.toLowerCase() == 'access-control-allow-origin') { header.value = '*'; return true; }
    }) ? null : details.responseHeaders.push({ "name": "Access-Control-Allow-Origin", "value": details.initiator });

    details.responseHeaders.push({ "name": "Access-Control-Allow-Credentials", "value": "true" });
    details.responseHeaders.push({ "name": "Access-Control-Allow-Methods", "value": "DELETE, OPTIONS, PROPFIND, PROPPATCH, COPY, MKCOL, MOVE, LOCK" });
    //details.responseHeaders.push({"name": "Access-Control-Allow-Headers", "value": "*"});
    //console.log("onHeadersReceived 2: ", details.responseHeaders);
    return { "responseHeaders": details.responseHeaders };
},
 { urls: ['https://webbrowsertools.com/*', 'https://example.com/*', 'https://*/'] },
 ["blocking", "responseHeaders", "extraHeaders"]);


// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // 
var active = false;

chrome.browserAction.onClicked.addListener((tab) => {
    active = !active;
    let titleString = active ? "activado" : "desactivado";

    chrome.browserAction.setTitle({
        // title: titleString
        title: active ? "activado" : "desactivado"
    });

    chrome.browserAction.setBadgeText({
        text: active ? "Act" : "Des"
    });

    chrome.browserAction.setBadgeBackgroundColor({
        color: active ? "#5084ee":"#e91e63"
    });
})