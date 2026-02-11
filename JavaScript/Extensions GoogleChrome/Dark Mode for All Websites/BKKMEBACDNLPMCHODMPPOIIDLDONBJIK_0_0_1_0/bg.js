function darkMode() {
    if (getComputedStyle(document.body).backgroundColor == 'rgba(0, 0, 0, 0)')
        document.body.style.backgroundColor = '#fff';
    const s = document.createElement("style");
    s.id = "fake-dark-theme";
    s.innerText = "html {filter: invert(90%) hue-rotate(180deg)} " +
                  "img, video, iframe, [style*=background-image] " +
                  "{filter: invert(111%) hue-rotate(180deg)}";
    document.head.appendChild(s);
};

const icons = {
    light: {
        "128": "icons/light-128.png"
    },
    dark: {
        "128": "icons/dark-128.png"
    },
};

chrome.runtime.onMessage.addListener((dark, sender) =>
    chrome.action.setIcon({tabId: sender.tab.id, path: dark ? icons.dark : icons.light}));

chrome.action.onClicked.addListener(tab => {
    if (!tab.url.startsWith('chrome://'))
        chrome.scripting.executeScript({target: {tabId: tab.id}, function: toggle});
});

const toggle = async () => {
    const style = document.getElementById("fake-dark-theme");
    if (style)
        style.remove();
    else
        darkMode();
    await chrome.runtime.sendMessage(!style);
    await chrome.storage.local.set({[document.location.host]: !style});
};

