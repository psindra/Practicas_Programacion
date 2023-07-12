import renderError from "./errorRender.js"
import BarcodeReader from "./class_barcodeDetector.js"

let cameraStream;
let globalBarcodeDetector;
const DECODER_TIMEOUT = 40;
const detector = new BarcodeReader();


window.addEventListener("load", async ()=>{
    await detector.init({useLastCamera:"back"})
    // await populateUserMediaDevices();
})

async function populateUserMediaDevices(){
    navigator.mediaDevices.enumerateDevices()
    .then(devices=>{
        const inputDeviceSelect = document.querySelector("select#inputDeviceSelect");
        inputDeviceSelect.replaceChildren();
        const cameraDevices = devices.filter((device, index)=>{
            if(device.kind == "videoinput"){
                inputDeviceSelect.append(
                    new Option(
                        device.label ?? `Camara #${index}`,
                        device.deviceId,
                        device.label.toLocaleLowerCase().includes("back"),
                        device.label.toLocaleLowerCase().includes("back")
                    )
                );
                return true;
            } else {
                return false;
            }
        });
        if (!cameraDevices.length){
            const err = new Error("⛔ No cameras Detected")
            console.error(err)
            // alert("⛔ No cameras Detected")
            renderError(err)
            // throw new Error("⛔ No cameras Detected")
        }
    })
}

function playCamera(){
    // stopCamera();
    // const inputDeviceSelect = document.querySelector("select#inputDeviceSelect");
    // detector.detectBarcode({videoDOM: document.querySelector("video#camera")}).then(console.log);
    detector.detectBarcode({videoDOM: document.querySelector("video#scanVideo")}).then(barcode=>{
        console.log(barcode);
        // stopButton.dispatchEvent(new Event("click"));
        stopCamera()
        document.getElementById("barcodeProducto").value = barcode;
      console.log(document.getElementById("barcodeProducto").value);
        scanDialog.close();
    });
    // detector.detectBarcode({cameraId:inputDeviceSelect.value, videoDIV: document.querySelector("video#camera")})
}

function stopCamera(){
    detector.userStopDetection();
}

