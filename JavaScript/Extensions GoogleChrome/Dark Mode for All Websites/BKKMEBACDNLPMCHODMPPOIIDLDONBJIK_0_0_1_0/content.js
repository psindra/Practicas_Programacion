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

chrome.storage.local.get([document.location.host]).then(result => {
    if (result[document.location.host]) {
        darkMode();
        chrome.runtime.sendMessage(true);
    }
});

