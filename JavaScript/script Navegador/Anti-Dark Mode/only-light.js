javascript:
(function () {
    var css = ':root { color-scheme: only light;}';
    let head = document.getElementsByTagName('head')[0];
    let style = document.createElement('style');
    if (!window.lightOnlyCounter) {
        window.lightOnlyCounter = 1;
    } else {
        window.lightOnlyCounter++;
        if (window.lightOnlyCounter % 2 == 0) {
            var css = ':root { color-scheme: initial;}';
        }
    }
    style.type = 'text/css';
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
    head.appendChild(style);
}());




{
    // var head = document.getElementsByTagName('head')[0];    // var para que se puede sobreescribit en cada ejecución
    javascript:
    var head = document.querySelector("head");
    var css = ':root { color-scheme: only light;}';
    if(typeof style === 'undefined'){
        var style = document.createElement('style');
        style.type = 'text/css';
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
    }
    
    if (!window.lightOnlyCounter){
        window.lightOnlyCounter = true;
        head.appendChild(style);
    } else {
        window.lightOnlyCounter = false;
        head.removeChild(style);
    }

    // document.querySelectorAll("iframe")

    // function iframes(_iframes){
    //     if (document.querySelector)
    // }

    
    // if (!window.lightOnlyCounter) {
    //     window.lightOnlyCounter = 1;
    // } else {
    //     window.lightOnlyCounter++;
    //     if (window.lightOnlyCounter % 2 == 0) {
    //         var css = ':root { color-scheme: initial;}';
    //     }
    // }
    // style.type = 'text/css';
    // if (style.styleSheet) {
    //     style.styleSheet.cssText = css;
    // } else {
    //     style.appendChild(document.createTextNode(css));
    // }
    // head.appendChild(style);
}