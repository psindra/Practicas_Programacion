const ejercicios = [
    /* Día 1 */[
        {ejercicio:"Estiro PSOAS en Estocada", series: 5, repeticiones: '10"', img: "./img/ejercicio (1).gif"},
        {ejercicio:"Estiro RAC en estocada", series: 5, repeticiones: '10"', img: "./img/ejercicio (2).gif"},
        {ejercicio:"Puentes Dorsales", series: 8, repeticiones: '20"', img: "./img/ejercicio (3).gif"},
        {ejercicio:"Puentes Frontales", series: 5, repeticiones: '10"', img: "./img/ejercicio (4).gif"},
        {ejercicio:"Peuntes Frontales p s Ball", series: 8, repeticiones: '10"', img: "./img/ejercicio (5).gif"},
        {ejercicio:"Bird Dog", series: 3, repeticiones: '10', img: "./img/ejercicio (7).gif"},
        {ejercicio:"Glúteos en Cuadrupedia", series: 4, repeticiones: '12', img: "./img/ejercicio (8).gif"},
        {ejercicio:"Prensa 1 pie", series: 4, repeticiones: '10', img: "./img/ejercicio (9).gif"},
        {ejercicio:"Remo bajo toma supina", series: "⬆",repeticiones:  '12', img: "./img/ejercicio (10).gif"},
        {ejercicio:"Remo bajo 1 Brazo", series: 4, repeticiones: '10', img: "./img/ejercicio (11).gif"},
        {ejercicio:"Rot Ext H Isométrico", series: "⬆", repeticiones: '3x10"', img: "./img/ejercicio (12).gif"},
        {ejercicio:"Curl Martillo", series: "-", repeticiones: '15-12-10-8-8', img: "./img/ejercicio (12).gif"},
    ],
    /* Día 2 */[],
    /* Día 3 */[],
]


document.addEventListener("DOMContentLoaded", ()=>{
    const tablaPlan = document.querySelector("table#tablaPlan");
    for (const ejercicio of ejercicios[0]) {
        const _Row = document.createElement("tr")

        const ejercicioCell = document.createElement("td");
        ejercicioCell.textContent = ejercicio.ejercicio;
        _Row.append(ejercicioCell)
        ejercicioCell.addEventListener("click",()=>{
            document.querySelector('dialog#explicacionDialog').showModal();
            document.querySelector('dialog#explicacionDialog img#imgEjercicio').src = ejercicio.img;
            document.querySelector('dialog#explicacionDialog>.card>.card-header>h4').textContent = ejercicio.ejercicio;
            
        })

        
        const seriesCell = document.createElement("td");
        seriesCell.textContent = ejercicio.series;
        _Row.append(seriesCell)
        
        const repeticionesCell = document.createElement("td");
        repeticionesCell.textContent = ejercicio.repeticiones;
        _Row.append(repeticionesCell)

        // for (const detalleEjercicio of ejercicio) {
        //     const ejercicioCell = document.createElement("td");
        //     ejercicioCell.textContent = detalleEjercicio;
        //     _Row.append(ejercicioCell)
        // }
        
        tablaPlan.tBodies[0].append(_Row);
    }
})