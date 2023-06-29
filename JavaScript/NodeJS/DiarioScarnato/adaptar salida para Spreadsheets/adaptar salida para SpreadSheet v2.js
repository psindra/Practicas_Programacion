// var arrayDoc = import("../diarioScarnato.notadiarios 14-06-2023.json")
var arrayDoc = require("../diarioScarnato.notadiarios 14-06-2023.json")

arrayDoc.map(elem=> {
    elem.date = new Date( new Date(elem.date).getTime() + 3*1000*60*60);
    return elem;
})

var listaFechas = []
const currentDate = new Date("2022-6-01");
while (currentDate < new Date("2023-6-31")) {
  listaFechas.push(new Date(currentDate));
  currentDate.setDate(currentDate.getDate() + 1);
}


var tabla = (listaFechas.map(fecha=>{
    let dato = {};
    dato.date = new Date(fecha);
    let doc = arrayDoc.find(doc=> doc.date.getTime() == fecha.getTime())
    if(doc){
        dato = {...doc, ...dato}
    }
    dato.fechaString = dato.date.toLocaleDateString();
    return dato;
}))

tabla.forEach(elem=>{
    elem.LOR = "";
    switch(elem.sensibilidadL){
        case "true": elem.LOR ="L";
        break;
            case "true+": elem.LOR = "L^+";
        break;
            default: elem.LOR = "";
    }
    if (elem.sensibilidadO) elem.LOR +="O";
    if (elem.sensibilidadR) elem.LOR +="R";

    elem.dolor = ""
    switch(elem.intensidadDolor){
        case "-": elem.dolor=" "; break;
        case "Leve-": elem.dolor="L^-"; break;
        case "Leve": elem.dolor="L"; break;
        case "Leve+": elem.dolor="L^+"; break;
        case "Medio": elem.dolor="M"; break;
        case "Severo": elem.dolor="S"; break;
        case "Severo+": elem.dolor="S+"; break;
        default: elem.dolor = "";
    }
    elem.mareos = elem.mareos ? "Si" : "";

    elem.afectó = "";
    switch(elem.afecto){
        case "true": elem.afectó="Si"; break;
        case "+-": elem.afectó="±"; break;
        case "false": elem.afectó=""; break;
        default: elem.afectó="";
    }
    elem.medicamento= "";
    switch (elem.medicina) {
        case "Diclo100mg": elem.medicamento = "1"; break;
        case "Diclo50mg+Relax": elem.medicamento = "2"; break;
        case "Diclo50mg": elem.medicamento = "3"; break;
        case "Diclo50mg*2": elem.medicamento = "4"; break;
        case "Otro": elem.medicamento = "5"; break;
        default:elem.medicamento = ""; break;
    }
})



console.log(tabla);