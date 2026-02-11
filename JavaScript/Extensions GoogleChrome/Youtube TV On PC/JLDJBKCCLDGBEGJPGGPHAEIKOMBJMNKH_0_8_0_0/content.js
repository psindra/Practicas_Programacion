injectScript('injected-script.js');

function injectScript (src) {
    let script = document.createElement('script');
    script.src = chrome.runtime.getURL(src);    
    script.onload = () => script.remove();
    (document.head || document.documentElement).append(script);
}