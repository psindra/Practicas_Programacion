 try {
     if (recording === true) {
         recording = false;
     } else {
         throw "Iniciar grabación";
     }
 } catch (e) {
     stream = document.getElementsByTagName('video')[0].captureStream();
     mimeType = 'video/webm';
     recordedChunks = [];
     stopped = false;
     recording = true;
     mediaRecorder = new MediaRecorder(stream, {
         mimeType: mimeType
     });
     mediaRecorder.ondataavailable = function(e) {
         if (e.data.size > 0) {
             recordedChunks.push(e.data);
             console.info(e.data);
         }
         if (recording === false) {
             console.info("Send mediaRecorder.stop()");
             mediaRecorder.stop();
             recording = false;
             console.info("Sended mediaRecorder.stop()");
         }
     };
     mediaRecorder.onstop = function() {
         const recordedBlob = new Blob(recordedChunks, {
             type: mimeType
         });
         recordedChunks = [];
         downloadLink = document.createElement('a');
         downloadLink.href = URL.createObjectURL(recordedBlob);
         downloadLink.target = '_blank';
         downloadLink.click();
     };
     mediaRecorder.start(5000);
     console.info("Recording..");
 }
