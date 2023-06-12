document.querySelector("button#activarQuagga").addEventListener("click", (ev)=> {
    console.log("ee");
    if (!(navigator.mediaDevices && typeof navigator.mediaDevices.getUserMedia === 'function')) {
        // safely access `navigator.mediaDevices.getUserMedia`
        alert("NO compatible con MediaDevices");
    }
    if(!document.querySelector("#barcode-scanner")){
        console.log("No existe el DIV '#barcode-scanner'");
    }

    Quagga
})

window.addEventListener("load",(ev)=>  {
    if (!(navigator.mediaDevices && typeof navigator.mediaDevices.getUserMedia === 'function')) {
    // safely access `navigator.mediaDevices.getUserMedia`
    alert("NO compatible con MediaDevices")
    }
})