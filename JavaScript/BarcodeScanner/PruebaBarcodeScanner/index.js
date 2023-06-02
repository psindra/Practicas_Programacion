let cameraStream;
let globalBarcodeDetector;
const DECODER_TIMEOUT = 40;

window.addEventListener("load", async ()=>{
    await testBarcodeAPI();
    await testCameraPermissions();
    await populateUserMediaDevices();
})

async function testBarcodeAPI(){
    if ('BarcodeDetector' in window) {
        let formats = await window.BarcodeDetector.getSupportedFormats();
        console.log({formats});
        // alert(JSON.stringify(formats));
        if (formats.length) {
            //   barcodeDetectorUsable = true;
            globalBarcodeDetector = new window.BarcodeDetector();
            alert("Native Barcode API supported ✅️");
        }
    } else {
        const err = new Error("❌ Barcode Chrome API not")
        renderError(err);
        // throw new Error("❌ Barcode Chrome API not");
    }
}

async function testCameraPermissions(){
    return (navigator.mediaDevices.getUserMedia({video:true})
    .then(stream=>{stream.getTracks().forEach(track => track.stop())}))
    .catch(renderError);
}

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
    stopCamera();
    const inputDeviceSelect = document.querySelector("select#inputDeviceSelect");
    const constraints = {
        video: {deviceId: inputDeviceSelect.value},
        audio: false
    }
    navigator.mediaDevices.getUserMedia(constraints).then( stream=>{
        document.querySelector("video#camera").srcObject = stream;
        cameraStream = stream;

    }).catch(err=>{
        // console.error('getUserMediaError', err, err.stack);
        // alert('.getUserMediaError/n\n' + JSON.stringify(err));
        // // throw new Error("getUserMediaError", err)
        renderError(err);

    })
}

function stopCamera(){
    try{
        if (cameraStream){
            cameraStream.getTracks().forEach(track => track.stop());
        }
    } catch (e){
        // alert(e.message);
        renderError(e);
    }
}



const playButton = document.querySelector("button#playButton");
playButton.addEventListener("click", (ev)=>{
    playCamera();
    ev.target.disabled = true;
    stopButton.disabled = false;
})
const stopButton = document.querySelector("button#stopButton");
stopButton.addEventListener("click", (ev)=>{
    stopCamera()
    ev.target.disabled = true;
    playButton.disabled = false;
})


const videoCamera = document.querySelector("video#camera");
// let videoInterval;
videoCamera.addEventListener("loadeddata", function startDecoding() {
    // clearInterval(videoInterval);
    // videoInterval = setInterval(decodeBarcode, 40);
    setTimeout(decodeBarcode, DECODER_TIMEOUT);
})

function decodeBarcode(){
    try {
        if(cameraStream.active){
            globalBarcodeDetector.detect(videoCamera).then(detectedBarcode=>{
                if (detectedBarcode.length) {
                    // alert(JSON.stringify(detectedBarcode));
                    console.log(detectedBarcode);
                    var DECODER_TIMEOUT = 1500;
                }
                setTimeout(decodeBarcode, DECODER_TIMEOUT);
            })
        }
    } catch (err) {
        // alert("barcodeError", err.message);
        renderError(err)
    }
}
