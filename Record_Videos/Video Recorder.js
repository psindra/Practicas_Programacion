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
             document.querySelector("#logo-icon > svg > g > g:nth-child(1) > polygon").setAttribute('fill', '#000000')
             setTimeout(() => {
                 document.querySelector("#logo-icon > svg > g > g:nth-child(1) > polygon").setAttribute('fill', '#FFFFFF')
             }, 1000)

         }
         if (recording === false) {
             console.info("Send mediaRecorder.stop()");
             mediaRecorder.stop();
             recording = false;
         }
     };
     mediaRecorder.onstop = function() {
         console.info("Sended mediaRecorder.stop()");
         const recordedBlob = new Blob(recordedChunks, {
             type: mimeType
         });
         recordedChunks = [];
         document.querySelector("#logo-icon > svg > g > g:nth-child(1) > path").setAttribute('fill', '#FF0000')
         downloadLink = document.createElement('a');
         downloadLink.href = URL.createObjectURL(recordedBlob);
         downloadLink.target = '_blank';
         downloadLink.click();
     };
     mediaRecorder.start(5000);
     console.info("Recording..");
     document.querySelector("#logo-icon > svg > g > g:nth-child(1) > path").setAttribute('fill', '#00FF00')
 }
