if(!front){
	const { front } = require("androidjs");
}
setInterval(()=>{
	front.send("hello from front", "hello from front");
}, 3000);


document.querySelector("button#test").onclick = ()=>{
	front.send("test","test");
}

// front.send("log", "script.js Iniciado");

front.on("log", function(msg){
	document.querySelector('pre#log').textContent = (document.querySelector('pre#log').textContent + '\n' + JSON.stringify(msg, null, 4));
})