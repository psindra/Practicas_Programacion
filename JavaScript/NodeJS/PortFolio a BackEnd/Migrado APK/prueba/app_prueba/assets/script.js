if(!front){
	const { front } = require("androidjs");
}

// front.send("log", "script.js Iniciado");

front.on("hello from back", function(msg){
	console.log(msg);
	$('#msg').html(msg);
});

front.on("log", function(msg){
	$('#log>pre').text($('#log>pre').text() + '\n' + JSON.stringify(msg, null, 4));
})

front.on("error", function(msg){
	$('#log>pre').text($('#log>pre').text() + '\n' + JSON.stringify(msg, null, 4));
})


var cont = 0;
let cc = setInterval(()=>{
	// $('#contador').html((cont++).toString());
	document.querySelector("#contador").textContent = cont++;
}, 1000);
console.log(cc);



// alert("alerta");

// app.notification.init("Update", "1.2.5 is available");
app.notification.initBig("Update", ["there are lot's of changes", "in this version", "would you like to install"]);
app.notification.show();
