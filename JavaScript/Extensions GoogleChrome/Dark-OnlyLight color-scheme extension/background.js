var active = false;
chrome.browserAction.onClicked.addListener((tab)=>{
    const host = new URL(tab.url).host;
    chrome.storage.local.get(host, (data)=>{
        console.log("GET: data: ", data[host]);
        if(!data[host]){
            var data = {[host]: {active: false}}
        }
        data[host].active = !data[host].active;
        updateColorSchemeCSS(data[host].active);
        // chrome.storage.local.set({[host]: {active: data[host].active}}); // se abrevia con la de abajo 👇🏻
        chrome.storage.local.set({[host]: data[host]});
    })
});

chrome.tabs.onActiveChanged.addListener(renderColorSchemeCSS);
chrome.tabs.onUpdated.addListener(renderColorSchemeCSS);
chrome.windows.onFocusChanged.addListener(windowId =>{
    // console.log(windowId);
    if (windowId !== -1) {
	chrome.tabs.getSelected(windowId, function (tab) {    
    // debugger;
	        renderColorSchemeCSS(tab.id);
	    });
}
});


function renderColorSchemeCSS(tabId){
    // debugger;
    chrome.tabs.get(tabId, (tab)=>{
        const host = new URL(tab.url).host;
        console.log("renderColorSchemeCSS - Tab: ", tab);
        console.log("renderColorSchemeCSS - Tab Host: ", host)
        if(!tab.active) { return console.log("Tab NOT active");}
        chrome.storage.local.get(host, (data)=>{
            if(!data[host]){
                var data = {[host]: {active: false}}
            }
            updateColorSchemeCSS(data[host].active);
        });
    })
}

function updateColorSchemeCSS(active) {
    if (active) {
        chrome.tabs.removeCSS(null, { code: ":root { color-scheme: only light};", allFrames: true }),
        chrome.tabs.insertCSS(null, { code: ":root { color-scheme: only light};", allFrames: true });
    } else {
        (chrome.tabs.removeCSS(null, { code: ":root { color-scheme: only light};", allFrames: true }),
        chrome.tabs.removeCSS(null, { code: ":root { color-scheme: only light};", allFrames: true }),
        chrome.tabs.removeCSS(null, { code: ":root { color-scheme: only light};", allFrames: true }));
    }
    chrome.browserAction.setBadgeText({text:active?"Act":"Dis"});
    chrome.browserAction.setBadgeBackgroundColor({color:active?"blue":"red"});
}

