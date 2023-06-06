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
            // alert(JSON.stringify(formats));
            if (formats.length) {
                //   barcodeDetectorUsable = true;
                globalThis.globalBarcodeDetector = new window.BarcodeDetector();
                // alert("Native Barcode API supported ✅️");
            }
        } else {
            console.error("❌ Barcode Chrome API not");
            alert("❌ Barcode Chrome API not");
            // throw new Error("❌ Barcode Chrome API not");
        }
    }

    async #testCameraPermissions(){
        return (navigator.mediaDevices.getUserMedia({video:true})
        .then(stream=>{stream.getTracks().forEach(track => track.stop())}));
    }

    async #enumerateUserMediaDevices(useLastCamera){
        return navigator.mediaDevices.enumerateDevices()
        .then(devices=>{
            // const inputDeviceSelect = document.querySelector("select#inputDeviceSelect");
            // inputDeviceSelect.replaceChildren();
            const cameraDevices = devices.filter((device, index)=>{
                if(device.kind == "videoinput"){
                    // inputDeviceSelect.append(
                    //     new Option(
                    //         device.label ?? `Camara #${index}`,
                    //         device.deviceId,
                    //         device.label.toLocaleLowerCase().includes("back"),
                    //         device.label.toLocaleLowerCase().includes("back")
                    //     )
                    // );
                    return true;
                } else {
                    return false;
                }
            });
            if (!cameraDevices.length){
                const err = new Error("⛔ No cameras Detected")
                // console.error(err)
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
        navigator.mediaDevices.getUserMedia(constraints).then( stream=>{
            videoDOM.srcObject = stream;
            cameraStream = stream;

            this.#stopDetecting = async ()=>{
                try{
                    if (cameraStream){
                        cameraStream.getTracks().forEach(track => track.stop());
                        // videoDOM.removeEventListener("loadeddata");
                    }
                } catch (e){
                    // alert(e.message);
                    renderError(e);
                }
            }
        }).catch(err=>{
            // console.error('getUserMediaError', err, err.stack);
            // alert('.getUserMediaError/n\n' + JSON.stringify(err));
            // // throw new Error("getUserMediaError", err)
            renderError(err);
        })

        
        
        
        return new Promise((resolve, reject) => {
            this.#decodeBarcode = async ()=>{
                try {
                    if(cameraStream.active){
                        // let DECODER_TIMEOUT_EXTRA = 0;
                        console.log("detecting... 📸");
                        console.log(globalThis.globalBarcodeDetector);
                        globalThis.globalBarcodeDetector.detect(videoDOM).then(detectedBarcode=>{
                            if (detectedBarcode.length) {
                                console.log(detectedBarcode);
                                this.#stopDetecting();
                                resolve(detectedBarcode);
                            }
                            console.log(setTimeout.apply(this, this.#decodeBarcode, detectorTimeout ?? this.DETECTOR_TIMEOUT));
                        })
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

            videoDOM.addEventListener("loadeddata", function startDecoding() {
                console.log("loadeddata");
                // console.log(videoDOM.removeEventListener("loadeddata", startDecoding));
                this.#decodeBarcode.apply(this);
            }.bind(this), {once:true})
        })

    }
}