const fetchedPlan = fetchPlan();

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



// await cookieStore.set({
//     name: "login-info",
//     value: JSON.stringify({email:"paolo", dni:34840859}),
//     expires: Date.now() + 30 *24 *60 *60 *1000
// });
cookieStore.set({
    name: "login-info",
    value: JSON.stringify({email:"paolo", dni:34840859, spreadsheetID: "1i4Xh0gTDPSVMStlE2BS5q_WfaR-xvo1sp51jg46Px9g"}),
    expires: Date.now() + 30 *24 *60 *60 *1000
});


// JSON.parse((await cookieStore.get("login-info")).value)


const diaPlan = (new URLSearchParams(window.location.search).get("dia") ?? 1);

document.addEventListener("DOMContentLoaded", async ()=>{
    console.debug("inicio DOMContentLoaded");


    const storageEjercicios = JSON.parse(localStorage.getItem("storagePlan"));
    if (storageEjercicios) {
        renderData(storageEjercicios);
    }


        
    const ejercicios = await fetchedPlan;
    console.debug("luego del await fetchedPlan");
    renderData(ejercicios);

    document.querySelectorAll("#navbarNav > .navbar-nav > li.nav-item > a.nav-link").forEach(anchorLink => {
    
    })

    document.querySelector("dialog#explicacionDialog .card-header > a").addEventListener("click", (ev)=>{
        ev.target.closest('dialog').querySelector('img#imgEjercicio').src ="";
        ev.target.closest('dialog').querySelector('h4#Título').textContent ="";
        ev.target.closest('dialog').close();
    })
// }) fin import json

})

function renderData(ejercicios) {
    renderNavBarNav(ejercicios);
    renderTablaArray(ejercicios[diaPlan - 1]);
}

function renderTablaJson(ejerciciosDelDia) {    /* Obsoleto ahora */
    const tablaPlan = document.querySelector("table#tablaPlan");
    tablaPlan.tBodies[0].replaceChildren();
    
    const captionTablaPlan = document.querySelector("table#tablaPlan > caption");
    captionTablaPlan.textContent = "Plan Día " + diaPlan;
    
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

function renderTablaArray(ejerciciosDelDia) {
    const tablaPlan = document.querySelector("table#tablaPlan");
    tablaPlan.tBodies[0].replaceChildren();
    
    const captionTablaPlan = document.querySelector("table#tablaPlan > caption");
    captionTablaPlan.textContent = "Plan Día " + diaPlan;
    
    for (const ejercicio of ejerciciosDelDia) {
        const _Row = document.createElement("tr");

        const ejercicioCell = document.createElement("td");
        ejercicioCell.textContent = ejercicio[0];
        _Row.append(ejercicioCell);
        ejercicioCell.addEventListener("click", (ev) => {
            document.querySelector('dialog#explicacionDialog').showModal();
            document.querySelector('dialog#explicacionDialog img#imgEjercicio').src = ejercicio[4];
            document.querySelector('dialog#explicacionDialog>.card>.card-header>h4').textContent = ejercicio[0];

        });


        const seriesCell = document.createElement("td");
        seriesCell.textContent = ejercicio[1];
        if (ejercicio[3]) {
            seriesCell.rowSpan = 2;
        }
        if (ejercicio[1] != "⬆" && ejercicio[1] != "") {
            _Row.append(seriesCell);

        }

        const repeticionesCell = document.createElement("td");
        repeticionesCell.textContent = ejercicio[2];
        _Row.append(repeticionesCell);

        tablaPlan.tBodies[0].append(_Row);
    }
}


/* TODO */async function autenticar({email, dni}) {
    return fetch("https://script.google.com/macros/s/AKfycbwTMAhlEANcNSMQF5ouXldIfYHBIgNpXsKS98Aw5F6bGgXw9ceZ0Ziffmh-wcNbKprP/exec?paolo=1",{
        method: "POST",
        body: JSON.stringify({email, dni}),
        redirect: "follow",
        ContentType: "application/json",
        // mode: "no-cors"
    })
}

async function fetchPlan(){
    console.log("inicio fetchPlan");/*  */


    // const scriptUrl = "https://script.google.com/macros/s/AKfycbwTMAhlEANcNSMQF5ouXldIfYHBIgNpXsKS98Aw5F6bGgXw9ceZ0Ziffmh-wcNbKprP/exec?paolo=1";
    const scriptUrl = "https://script.google.com/macros/s/AKfycbz7BH7cqzUPJwhEExCUCjvYC8ymEf7nzUp54NVK90kpi_QJdWDoAI0bpHkz0X6iNAYB/exec";
    console.time("loginInfo");
    const loginInfo = (await cookieStore.get("login-info")).value;
    console.timeEnd("loginInfo");
    console.time("fetchPlan");
    return fetch(scriptUrl,{
        method: "POST",
        body: loginInfo,
        ContentType: "application/json",
        redirect: "follow",
        // mode: "no-cors"
    })
    .then(response=> response.json())
    .then(response=> {
        console.timeEnd("fetchPlan");
        
        localStorage.setItem("storagePlan", JSON.stringify(response));
        
        const spinnerDiv = document.querySelector("#spinnerDiv");
        spinnerDiv.remove();

        return response;
    })/*  */
    .catch(async err=>{
        console.log(err);
        return fetch(scriptUrl,{
            method: "POST",
            body: loginInfo,
            ContentType: "application/json",
            redirect: "follow",
            mode: "no-cors"
        })
        .then(response=> response.text())
        .then(response=> {console.timeEnd("fetchPlan"); return response;})/*  */
        .then(fetchPlan())
        .catch(err=>{
            console.log(err);
            const alertComponent = document.querySelector("#alertComponent.alert");
            alertComponent.classList.remove("vissually-hidden");
        })
    })
}

function renderNavBarNav(ejercicios){
    const navbarNavUl = document.querySelector("#navbarNav > .navbar-nav");
    navbarNavUl.replaceChildren();
    for (let i = 0; i < ejercicios.length; i++) {
        navbarNavUl.innerHTML += `
        <li class="nav-item mx-md-2 m-2">
            <a class="nav-link" href="?dia=${i+1}">Día ${i+1}</a>
        </li>
        `
    }
    navbarNavUl.querySelectorAll("li.nav-item > a.nav-link")[diaPlan - 1].classList.add("active", "disabled");
    navbarNavUl.querySelectorAll("li.nav-item > a.nav-link")[diaPlan - 1].tabIndex = -1;
    navbarNavUl.querySelectorAll("li.nav-item > a.nav-link")[diaPlan - 1].ariaCurrent = "page";
}