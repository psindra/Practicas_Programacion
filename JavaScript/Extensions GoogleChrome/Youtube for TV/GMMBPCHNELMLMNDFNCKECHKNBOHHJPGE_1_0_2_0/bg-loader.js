try {
    importScripts('conf.js');
    importScripts('background.js');

} catch (e) {

    if (typeof(e) == "object") {
        console.log(e);
    }
}

