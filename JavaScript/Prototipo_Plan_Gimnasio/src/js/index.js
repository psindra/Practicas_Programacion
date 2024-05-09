
// const ejercicios = [
//         /* Día 1 */[
//         {ejercicio:"Estiro PSOAS en Estocada", series: 5, repeticiones: '10"', img: "./img/ejercicio (1).gif"},
//         {ejercicio:"Estiro RAC en estocada", series: 5, repeticiones: '10"', img: "./img/ejercicio (2).gif"},
//         {ejercicio:"Puentes Dorsales", series: 8, repeticiones: '20"', img: "./img/ejercicio (3).gif"},
//         {ejercicio:"Puentes Frontales", series: 5, repeticiones: '10"', img: "./img/ejercicio (4).gif"},
//         {ejercicio:"Peuntes Frontales p s Ball", series: 8, repeticiones: '10"', img: "./img/ejercicio (5).gif"},
//         {ejercicio:"Bird Dog", series: 3, repeticiones: '10', img: "./img/ejercicio (7).gif"},
//         {ejercicio:"Glúteos en Cuadrupedia", series: 4, repeticiones: '12', img: "./img/ejercicio (8).gif"},
//         {ejercicio:"Prensa 1 pie", series: 4, repeticiones: '10', img: "./img/ejercicio (9).gif"},
//         {ejercicio:"Remo bajo toma supina", series: "⬆",repeticiones:  '12', img: "./img/ejercicio (10).gif"},
//         {ejercicio:"Remo bajo 1 Brazo", series: 4, repeticiones: '10', img: "./img/ejercicio (11).gif"},
//         {ejercicio:"Rot Ext H Isométrico", series: "⬆", repeticiones: '3x10"', img: "./img/ejercicio (12).gif"},
//         {ejercicio:"Curl Martillo", series: "-", repeticiones: '15-12-10-8-8', img: "./img/ejercicio (12).gif"},
//     ],
//     /* Día 2 */[],
//     /* Día 3 */[],
// ]


document.addEventListener("DOMContentLoaded", ()=>{
    import("./plan.json", { assert: { type: "json" } }).then((plan)=>{
        const ejercicios = plan.default;
    
    const diaPlan = (new URLSearchParams(window.location.search).get("dia") ?? 1);

    document.querySelectorAll("#navbarNav > .navbar-nav > li.nav-item > a.nav-link")[diaPlan].classList.add("active", "disabled");
    renderTabla(ejercicios[diaPlan - 1]);

    const captionTablaPlan = document.querySelector("table#tablaPlan > caption");
    captionTablaPlan.textContent = "Plan Día " + diaPlan;

    document.querySelectorAll("#navbarNav > .navbar-nav > li.nav-item > a.nav-link").forEach(anchorLink => {
    
    })

    document.querySelector("dialog#explicacionDialog .card-header > a").addEventListener("click", (ev)=>{
        ev.target.closest('dialog').querySelector('img#imgEjercicio').src ="";
        ev.target.closest('dialog').querySelector('h4#Título').textContent ="";
        ev.target.closest('dialog').close();
    })
})


})

function renderTabla(ejerciciosDelDia) {
    const tablaPlan = document.querySelector("table#tablaPlan");
    tablaPlan.tBodies[0].replaceChildren();
    for (const ejercicio of ejerciciosDelDia) {
        const _Row = document.createElement("tr");

        const ejercicioCell = document.createElement("td");
        ejercicioCell.textContent = ejercicio.ejercicio;
        _Row.append(ejercicioCell);
        ejercicioCell.addEventListener("click", (ev) => {
            document.querySelector('dialog#explicacionDialog').showModal();
            document.querySelector('dialog#explicacionDialog img#imgEjercicio').src = ejercicio.img;
            document.querySelector('dialog#explicacionDialog>.card>.card-header>h4').textContent = ejercicio.ejercicio;

        });


        const seriesCell = document.createElement("td");
        seriesCell.textContent = ejercicio.series;
        if (ejercicio.superserie) {
            seriesCell.rowSpan = 2;
        }
        if (ejercicio.series != "⬆" && ejercicio.series != "") {
            _Row.append(seriesCell);

        }

        const repeticionesCell = document.createElement("td");
        repeticionesCell.textContent = ejercicio.repeticiones;
        _Row.append(repeticionesCell);

        tablaPlan.tBodies[0].append(_Row);
    }
}
