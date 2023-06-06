class BarcodeReader {
    constructor(){
    }
    DETECTOR_TIMEOUT = 40;
    #selectedCameraId = null;
    async init({useLastCamera}){
        await this.#testBarcodeAPI();
        await this.#testCameraPermissions();
        return await this.#enumerateUserMediaDevices(useLastCamera);
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

    async #enumerateUserMediaDevices(useLastCamera){
        return navigator.mediaDevices.enumerateDevices()
        .then(devices=>{
            console.log(devices);
            const cameraDevices = devices.filter((device, index)=>{
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
            if(useLastCamera && (useLastCamera=="last" || useLastCamera==true || useLastCamera==1) ){
                this.#selectedCameraId = cameraDevices.slice(-1)[0];
            }

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

        const constraints = {
            video: {deviceId: cameraId ?? this.#selectedCameraId.deviceId},
            // video: {deviceId: this.#selectedCameraId.deviceId},
            audio: false
        }

        let cameraStream;
        navigator.mediaDevices.getUserMedia(constraints).then(async stream=>{
            videoDOM.srcObject = stream;
            cameraStream = stream;


            this.#stopDetecting = async ()=>{
                try{
                    if (cameraStream){
                        cameraStream.getTracks().forEach(track => track.stop());
                    }
                } catch (e){
                    // alert(e.message);
                    renderError(e);
                }
            }
        }).catch(err=>{
            renderError(err);
        })
        
        
        
        
        return new Promise((resolve, reject) => {
            this.#decodeBarcode = async ()=>{
                try {
                    if(cameraStream.active){
                        // let DECODER_TIMEOUT_EXTRA = 0;
                        globalThis.globalBarcodeDetector.detect(videoDOM)
                        .then(detectedBarcode=>{
                            if (detectedBarcode.length) {
                                this.#stopDetecting();
                                resolve(detectedBarcode[0].rawValue);
                            }
                            setTimeout(this.#decodeBarcode, detectorTimeout ?? this.DETECTOR_TIMEOUT);
                        })
                        .catch(renderError);
                    }
                } catch (err) {
                    // alert("barcodeError", err.message);
                    renderError(err)
                }
            }
            
            this.userStopDetection = async ()=>{
                await this.#stopDetecting();
                console.log("user stopped");
                reject("user stopped !");
            }
            document.querySelector("video#camera").addEventListener("playing", function startDecoding() {
                console.log("playing");
                // console.log(videoDOM.removeEventListener("loadeddata", startDecoding));
                this.#decodeBarcode();
                // new BarcodeDetector().detect(document.querySelector("video#camera")).then(console.log).catch(renderError);
            }.bind(this), {once:true});
        })
        
    }
}
