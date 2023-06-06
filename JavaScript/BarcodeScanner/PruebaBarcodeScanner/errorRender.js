const preConsole = document.querySelector("pre#preConsole");
const renderError = (err)=>{
    const pElement = document.createElement("p")
    pElement.classList.add("pError");
    if (err instanceof ErrorEvent){
        pElement.textContent = `${err.type}: ${err.message}\n`;
        // log.textContent = `${log.textContent}${err.type}: ${err.message}\n`;
    } else if(err instanceof Error) {
        pElement.textContent = `${err}: ${err.stack}\n`;
        // log.textContent = `${log.textContent}${err}: ${err.stack}\n`;
    } else {
        pElement.textContent = `${err}\n`;
        // log.textContent = `${log.textContent}${err}\n`;
    }
    preConsole.appendChild(pElement);
    console.error(err);
    alert(
        JSON.stringify(err) != '{}' ? JSON.stringify(err) : err.toString()
    );
}
window.addEventListener("error", (event) => {
    renderError(event);
});

var oldconsole_log = console.log;
console.log = (...params)=>{
    let textoConsola = ""
    params.forEach(param=>{
        if (typeof param == "object" && JSON.stringify(param) != '{}'){
            textoConsola += JSON.stringify(param);
            // textoConsola += JSON.stringify(param) != '{}' ? JSON.stringify(param) : param
            textoConsola += "\n";
        }else{
            textoConsola += param;
            textoConsola += JSON.stringify(param);
            textoConsola += "\n";
        }
    });
    const pElement = document.createElement("p")
    pElement.innerText = textoConsola;
    preConsole.appendChild(pElement);
    oldconsole_log(textoConsola);
}

var oldconsole_error = console.error;
console.error = (...params)=>{
    let textoConsola = ""
    params.forEach(param=>{
        if (typeof param == "object" && JSON.stringify(param) != '{}'){
            textoConsola += JSON.stringify(param);
            // textoConsola += JSON.stringify(param) != '{}' ? JSON.stringify(param) : param
            textoConsola += "\n";
        }else{
            textoConsola += param;
            textoConsola += "\n";
        }
    });
    const pElement = document.createElement("p")
    pElement.classList.add("pError");
    pElement.innerText = textoConsola;
    preConsole.appendChild(pElement);
    oldconsole_error(textoConsola);
}


const cleanConsole = document.querySelector("button#cleanConsole")
cleanConsole.addEventListener("click",(ev)=>{
    preConsole.replaceChildren();
})