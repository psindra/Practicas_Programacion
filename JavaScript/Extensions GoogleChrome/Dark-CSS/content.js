var cssCode = ":root { filter: invert(1) hue-rotate(180deg); }"
            + "img, video { filter: invert(1) hue-rotate(180deg); }";
var styleElement = document.createElement("style");
styleElement.innerHTML = cssCode;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log(request);
    if (request.message === "toggleDarkCSS") {
        if(request["Dark-CSS"] == "active") {
            localStorage.setItem("Dark-CSS", "active");
        } else {
            localStorage.setItem("Dark-CSS", "inactive");
        }
    }
    updateDarkCSS();
    sendResponse({ message: "Dark-CSS updated" });
    // return true;
});


function updateDarkCSS() {
    if (localStorage.getItem("Dark-CSS") === "active") {
        document.head.appendChild(styleElement);

    } else {
        if (document.head.contains(styleElement)) {
            document.head.removeChild(styleElement);
        }

    }
}

// function applyDarkMode() {
//     document.head.appendChild(styleElement);
//     document.querySelectorAll("button").forEach((btn) => {
//         if 



updateDarkCSS();

chrome.runtime.sendMessage({greeting: "hello from content.js"}, console.log);
console.log("Dark-CSS: " + localStorage.getItem("Dark-CSS"));