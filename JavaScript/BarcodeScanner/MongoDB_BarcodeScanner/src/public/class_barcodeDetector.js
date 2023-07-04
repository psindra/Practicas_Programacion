class BarcodeReader {
    constructor(){
    }
    DETECTOR_TIMEOUT = 40;
    #selectedCameraId = null;
    async init({useLastCamera, useBackCamera}){
        await this.#testBarcodeAPI();
        await this.#testCameraPermissions();
        return await this.#enumerateUserMediaDevices(useLastCamera, useBackCamera);
    }

    async #testBarcodeAPI(){
        if ('BarcodeDetector' in window) {
            let formats = await window.BarcodeDetector.getSupportedFormats();
            console.log({formats});
            if (formats.length) {
                globalThis.globalBarcodeDetector = new window.BarcodeDetector();
            }
        } else {
            // console.error("❌ Barcode Chrome API not");
            // alert("❌ Barcode Chrome API not");
            renderError(new Error("❌ Barcode Chrome API not"));
        }
    }

    async #testCameraPermissions(){
        return (navigator.mediaDevices.getUserMedia({video:true})
        .then(stream=>{stream.getTracks().forEach(track => track.stop())}));
    }

    async #enumerateUserMediaDevices(useLastCamera, useBackCamera){
        return navigator.mediaDevices.enumerateDevices()
        .then(devices=>{
            const cameraDevices = devices.filter((device, index)=>{
                if((useBackCamera || (useLastCamera && useLastCamera=="back")) && device.label.toLowerCase().includes("back")){
                    this.#selectedCameraId = device;
                }
                return device.kind == "videoinput";
                if(device.kind == "videoinput"){
                    return true;
                } else {
                    return false;
                }
            });
            if (!cameraDevices.length){
                const err = new Error("⛔ No cameras Detected")
                renderError(err)
            }
            /* if(useLastCamera && (useLastCamera=="last" || useLastCamera==true || useLastCamera==1) ){
                    this.#selectedCameraId = cameraDevices.slice(-1)[0];
            } */

            return cameraDevices;
    })
    }

    async userStopDetection(){};
    #decodeBarcode;
    #stopDetecting;

    async detectBarcode({videoDOM, cameraId, detectorTimeout}) {
        if(!videoDOM){
            videoDOM = document.createElement("video");
        }

        // console.log({ "selectedCameraId": this.#selectedCameraId })
        const constraints = {
            // video: {deviceId: cameraId ?? this.#selectedCameraId.deviceId , groupId: this.#selectedCameraId.groupId},
            video: {deviceId: this.#selectedCameraId.deviceId},
            audio: false
        }

        let cameraStream;
        navigator.mediaDevices.getUserMedia(constraints).then(async stream=>{
            videoDOM.srcObject = stream;
            cameraStream = stream;


            this.#stopDetecting = async ()=>{
                try{
                    if (cameraStream) {
                        cameraStream.getTracks().forEach(track => {
                          track.stop();
                          videoDOM.srcObject.removeTrack(track);
                          videoDOM.srcObject = null;
                        });
                      }
                } catch (e){
                    // alert(e.message);
                    renderError(e);
                }
            }
        }).catch(err=>{
            renderError(err);
        })
        
        
        
        
        let lastBarcodeDetected = {};
        return new Promise((resolve, reject) => {
            this.#decodeBarcode = async ()=>{
                try {
                    if(cameraStream.active){
                        // let DECODER_TIMEOUT_EXTRA = 0;
                        globalThis.globalBarcodeDetector.detect(videoDOM).then(detectedBarcode=>{
                            if (detectedBarcode.length) {
                                if (detectedBarcode[0].rawValue == lastBarcodeDetected?.rawValue){
                                    this.#stopDetecting();
                                    console.log("✅");
                                    return resolve(detectedBarcode[0].rawValue);
                                }
                            }
                            lastBarcodeDetected = detectedBarcode[0];
                            setTimeout(this.#decodeBarcode, detectorTimeout ?? this.DETECTOR_TIMEOUT);
                        })
                        .catch(renderError);
                    }
                } catch (err) {
                    // alert("barcodeError", err.message);
                    console.log("error dentro del catch de #decodeBarcode");
                    renderError(err)
                }
            }
            
            this.userStopDetection = async ()=>{
                await this.#stopDetecting();
                console.log("user stopped");
                reject("user stopped !");
            }
            document.querySelector("video#scanVideo").addEventListener("playing", function startDecoding() {
                console.log("🟢");
                // console.log(videoDOM.removeEventListener("loadeddata", startDecoding));
                this.#decodeBarcode();
                // new BarcodeDetector().detect(document.querySelector("video#camera")).then(console.log).catch(renderError);
            }.bind(this), {once:true});
        })
        
    }
}
