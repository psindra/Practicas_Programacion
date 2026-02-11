var active = false;
const cssCode =
                ":root { filter: invert(1) hue-rotate(180deg);} "
                //  + "img, video, button {filter: invert(1) hue-rotate(180deg);}"
                
// "img, video, iframe, [style*=background-image] {filter: invert(1) hue-rotate(180deg)}" +

chrome.action.onClicked.addListener((tab) => {
    const host = new URL(tab.url).host;
    chrome.storage.local.get(host, (data) => {
        if (!data[host]) {
            data[host] = { active: false };
        }
        data[host].active = !data[host].active;
        chrome.storage.local.set({ [host]: data[host] }, () => {
            updateColorSchemeCSS(tab.id, data[host].active);
        });
    });
});

chrome.tabs.onActivated.addListener((activeInfo) => {
    chrome.tabs.get(activeInfo.tabId, (tab) => {
        if (tab) {
            renderColorSchemeCSS(tab.id);
        }
    });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === "complete") {
        renderColorSchemeCSS(tabId);
    }
});

function renderColorSchemeCSS(tabId) {
    chrome.tabs.get(tabId, (tab) => {
        if (tab && tab.active) {
            const host = new URL(tab.url).host;
            chrome.storage.local.get(host, (data) => {
                const isActive = data[host]?.active || false;
                updateColorSchemeCSS(tabId, isActive);
            });
        }
    });
}

function updateColorSchemeCSS(tabId, active) {
    if (active) {
        chrome.scripting.insertCSS({
            target: { tabId: tabId },
            css: cssCode
        });
    } else {
        chrome.scripting.removeCSS({
            target: { tabId: tabId },
            css: cssCode
        });
    }
    chrome.action.setBadgeText({ text: active ? "Act" : "Dis" });
    chrome.action.setBadgeBackgroundColor({ color: active ? "blue" : "red" });
}