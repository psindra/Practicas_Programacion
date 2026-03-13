import "./js/custom_consoleLog.js";
import mensajeModal from "./js/modalAlert.js";
import "./js/formNvoMov.js";
import { parseModalFormNvoMov } from "./js/formNvoMov.js";
import { editForm, eliminarMovimiento } from "./js/formEditMov.js";


async function refreshPresupuestos() {
    return fetch("/api/presupuesto")
        .then(response => response.json())
        .catch(error => {
            console.error("Error al obtener el presupuesto:", error)
            mensajeModal("Error al obtener el presupuesto:", error)

        });
}

async function refreshEstadisticas() {
    return fetch("/api/presupuesto/estadisticas")
        .then(response => response.json())
        .catch(error => {
            mensajeModal("Error al obtener estadisticas del presupuesto:", error)

        });
}

async function parsePresupuestos(presupuestosData) {
    const estadisticas = await refreshEstadisticas();
    const presupuesto = {};
    const ordenGastos = {
        "Alquiler": 1,
        "Expensas": 2,
        "Cochera": 3,
        "Visa BH": 4,
        "PowerCard": 5,
        "Power Card": 5,
        "Comidita Mami": 6,
        "OS Mami": 7,
        "Limp Gracielita": 90,
        "🛒Makro": 91,
        "Extracciones Ef": 92,
        "Club Parque VS": 93,
        "Gs Varios Salidas": 94,
    }
    presupuestosData.forEach(movimiento => {
        presupuesto[(movimiento.mes).substring(0, 4)] ??= {};
        presupuesto[(movimiento.mes).substring(0, 4)][movimiento.mes] ??= { ingreso: [], gasto: [], inversion: [] };
        if (!movimiento.tipo) {
            console.log("Movimiento sin tipo:\n", movimiento);
        }

        presupuesto[(movimiento.mes).substring(0, 4)][movimiento.mes][movimiento.tipo].push(movimiento);
        presupuesto[(movimiento.mes).substring(0, 4)][movimiento.mes]["estadistica"] = estadisticas.find(est => est.mes === movimiento.mes);

    });

    Object.values(presupuesto).forEach(movimientoMeses => {
        Object.values(movimientoMeses).forEach(movimientoMes => {
            movimientoMes.gasto.sort((a, b) => {
                return (ordenGastos[a.nombre] ?? 50) - (ordenGastos[b.nombre] ?? 50);
            });
        });
    });
    return presupuesto;
}

function renderNav(presupuesto) {
    const years = new Set(Object.keys(presupuesto));

    /* creación del HTML del nav de Años */
    const navYears = document.getElementById("navYears");
    navYears.innerHTML = ""; // Limpiar contenido previo
    const _ul = document.createElement("ul");
    _ul.classList.add("nav", "nav-justify", "nav-fill", "gap-5");
    _ul.setAttribute("role", "tabpanel")
    years.forEach(year => {
        const _li = document.createElement("li");
        _li.classList.add("nav-item");
        const _button = document.createElement("button");
        _button.classList.add("btn", "btn-outline-secondary", "px-1", "py-2", "w-100");
        _button.setAttribute("data-bs-toggle", "pill");
        _button.setAttribute("type", "button");
        _button.setAttribute("role", "tab");
        _button.textContent = year;
        _li.appendChild(_button);
        _ul.appendChild(_li);

        _button.addEventListener("click", () => {
            renderYear(presupuesto, year)
                .catch(error => {
                    console.error("Error al refrescar el año seleccionado: ", error)
                    mensajeModal("Error al refrescar el año seleccionado: ", error)
                });
        });
    });
    _ul?.firstChild?.firstChild?.classList?.add("active");
    navYears.appendChild(_ul);

    return presupuesto;
}

async function renderUI() {
    refreshPresupuestos()
        .then(parsePresupuestos)
        .then(renderNav)
        .then(renderYear)
        .catch(error => {
            console.error("Error al refrescar la UI: ", error)
            mensajeModal("Error al refrescar la UI: ", error)
        });
}

async function updateUI() {
    const activeYearButton = document.querySelector("#navYears .active");
    const activeTablist = document.querySelector("#tablist>.nav-item>.active");
    const activeTabContent = document.querySelector("#tabsContent>.tab-pane.show.active");
    await renderUI();
    activeYearButton?.click();
    activeYearButton.classList.add("active");
    activeTablist?.click();
    activeTablist.classList.add("active");
    activeTabContent?.classList.add("show", "active");
    activeTabContent?.querySelector("#tabsContainer")?.scrollIntoView({ behavior: "smooth" });
}

async function renderYear(presupuesto, year) {
    if (!year) {
        year = Object.keys(presupuesto)[0]?.substring(0, 4) || 2023;
    }

    // Renderizado de la lista de Tabs
    renderTablist(presupuesto, year);

    // Renderizado del contenido de los Tabs
    renderTabsContent(presupuesto, year);
}

function renderTabsContent(presupuesto, year) {
    if (!Object.keys(presupuesto).length) return;

    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const tabsContainer = document.querySelector("#tabsContainer");
    const _tabsContent = document.createElement("div");
    _tabsContent.setAttribute("id", "tabsContent");
    _tabsContent.classList.add("tab-content", "container", "pt-2", "col-lg-8", "col-md-11");
    meses.forEach((mes, index) => {
        const month = `${year}${String(index + 1).padStart(2, "0")}`;
        const _tabPane = document.createElement("div");
        _tabPane.setAttribute("id", `tabPresupuesto${mes}`);
        _tabPane.classList.add("tab-pane", "fade");
        _tabPane.setAttribute("role", "tabpanel");
        _tabsContent.appendChild(_tabPane);
        const _tabla = document.createElement("table");
        _tabla.classList.add("table", "table-sm", "small", "shadow");
        _tabla.setAttribute("id", `tablaPresupuestoAnual${mes}`);
        _tabla.style.tableLayout = "fixed";
        _tabPane.appendChild(_tabla);
        const _caption = document.createElement("caption");
        _caption.textContent = `Presupuesto ${mes} ${year}`;
        _tabla.appendChild(_caption);
        const _tbody = document.createElement("tbody");
        _tbody.classList.add("align-middle");
        _tabla.appendChild(_tbody);

        //  tr de Ingreso
        const _trIngreso = document.createElement("tr");
        const _thIngreso = document.createElement("th");
        _thIngreso.classList.add("text-end");
        _thIngreso.textContent = "Ingreso";
        _thIngreso.style.color = "#0040ff"

        const _tdIngresoExtraordinario = document.createElement("td");
        const _ingresoExtraordinario = presupuesto[year][month]?.ingreso
            ?.reduce((acc, movimiento) => acc + movimiento.monto.total, 0) || 0
        _tdIngresoExtraordinario.textContent = "$ " + _ingresoExtraordinario.toLocaleString();
        _tdIngresoExtraordinario.classList.add("fw-bold");
        _tdIngresoExtraordinario.style.color = "#0040ff";

        const _tdIngresoMonto = document.createElement("td");
        const _ingreso = presupuesto[year][month]?.ingreso
            ?.find((movimiento) => movimiento.nombre.includes("Sueldo"));
        const _ingresoHabitual = _ingreso?.monto?.habitual || 0;
        _tdIngresoMonto.innerHTML = _ingresoHabitual.toLocaleString();
        const __btnEdit = document.createElement("a");
        __btnEdit.textContent = "🖊"
        __btnEdit.classList.add("edit-btn", "float-end", "opacity-0");
        __btnEdit.addEventListener("click", () => { editForm(_ingreso) });
        _ingreso && _tdIngresoMonto.appendChild(__btnEdit);
        _tdIngresoMonto.classList.add("text-end", "text-primary-emphasis");

        const _tdIngreso = document.createElement("td");
        _tdIngreso.textContent = "Sueldo Normal"
        _tdIngreso.classList.add("text-primary-emphasis");
        _trIngreso.appendChild(_thIngreso);
        _trIngreso.appendChild(_tdIngresoExtraordinario);
        _trIngreso.appendChild(_tdIngresoMonto);
        _trIngreso.appendChild(_tdIngreso);
        // _trIngreso.appendChild(document.createElement("td"))
        _tbody.appendChild(_trIngreso);

        // Espacio de separación entre Ingreso y Gastos/Inversiones
        const _trEspacio = document.createElement("tr");
        const _tdEspacio = document.createElement("td");
        _tdEspacio.setAttribute("colspan", "2");
        _tdEspacio.setAttribute("rowspan", "20");
        _tdEspacio.innerHTML = `
        <div class="estadistica">
                <p class="mb-2 text-danger"><strong>Gasto Mensual:</strong> $${presupuesto[year][month]?.estadistica.gastoMensual?.toLocaleString() || "0"}</span><br>
                <p class="mb-2 text-warning-emphasis"><strong>Ahorro/Superávit:</strong> $<strong>${presupuesto[year][month]?.estadistica.ahorroMensual?.toLocaleString() || "0"}</strong></span><br>
                <p class="mb-2 text-muted"><strong>Ahorro Habitual:</strong> $${presupuesto[year][month]?.estadistica.ahorroMensualHabitual?.toLocaleString() || "0"}</span><br>
                <p class="mb-2 text-muted"><strong>Ahorro Extraordinario:</strong> $${presupuesto[year][month]?.estadistica.ahorroMensualExtraordinario?.toLocaleString() || "0"}</span><br>
                <p class="mb-2 text-body-tertiary"><strong>Ingresos Acumulados:</strong> $${presupuesto[year][month]?.estadistica.accumIngreso?.toLocaleString() || "0"}</span><br>
                <p class="mb-2 text-body-tertiary"><strong>Gastos Acumulados:</strong> $${presupuesto[year][month]?.estadistica.accumGasto?.toLocaleString() || "0"}</span><br>
                <p class="mb-2 text-body-tertiary"><strong>Ahorro Acumulado:</strong> $${presupuesto[year][month]?.estadistica.accumAhorro?.toLocaleString() || "0"}</span><br>
                <p class="mb-2 text-success"><strong>Inversiones ARS acumuladas:</strong> $${presupuesto[year][month]?.estadistica.accumInversionesARS?.toLocaleString() || "0"}</span><br>
                <p class="mb-2 text-success-emphasis"><strong>Inversiones USD acumuladas:</strong> U$D${presupuesto[year][month]?.estadistica.accumInversionesUSD?.toLocaleString() || "0"}</  span><br>
        </div>`;
        _tabla.caption.innerHTML += `&emsp; - &emsp; Ahorro: ${(presupuesto[year][month]?.estadistica.ahorroMensual/_ingresoHabitual * 100).toFixed(1) || "0"} %`;
        _tabla.caption.innerHTML += `&ensp; -&ensp; Ahorro Habitual: ${(presupuesto[year][month]?.estadistica.ahorroMensualHabitual/_ingresoHabitual * 100).toFixed(1) || "0"} %`;
        _trEspacio.appendChild(_tdEspacio);
        _tbody.appendChild(_trEspacio);

        /* GASTOS */
        presupuesto[year][month]?.gasto?.forEach((gasto, index) => {
            const _trGasto = document.createElement("tr");
            index === 0 && _trGasto.classList.add("table-group-divider");
            const _tdGastoMonto = document.createElement("td");
            _tdGastoMonto.classList.add("text-end");
            _tdGastoMonto.textContent = `$ ${(gasto.monto.total).toLocaleString()}`;
            const _thGastoNombre = document.createElement("th");
            _thGastoNombre.innerHTML = gasto.nombre;
            const _btnEdit = document.createElement("a");
            _btnEdit.textContent = "🖊"
            _btnEdit.classList.add("edit-btn", "float-end", "opacity-0");
            _btnEdit.addEventListener("click", () => { editForm(gasto) });
            _thGastoNombre.appendChild(_btnEdit);
            _thGastoNombre.style.color = "salmon"
            const _tdGastoPorcentaje = document.createElement("td")
            _tdGastoPorcentaje.innerHTML = `(${(gasto.monto.total / _ingresoHabitual * 100).toFixed(1)} %)`
            _tdGastoPorcentaje.classList.add("text-primary-emphasis");
            _trGasto.appendChild(_tdGastoMonto);
            _trGasto.appendChild(_thGastoNombre);
            _trGasto.appendChild(_tdGastoPorcentaje);
            _tbody.appendChild(_trGasto);
        });

        /* INVERSIONES */
        presupuesto[year][month]?.inversion?.forEach((inversion, index) => {
            const _trInversion = document.createElement("tr");
            index === 0 && _trInversion.classList.add("table-group-divider");
            const _tdInversionMonto = document.createElement("td");
            _tdInversionMonto.classList.add("text-end");
            _tdInversionMonto.textContent = `$ ${inversion.montoARS.toLocaleString()}`;
            const _thInversionNombre = document.createElement("th");
            _thInversionNombre.textContent = inversion.cantidadInstrumento + "\t";;
            _thInversionNombre.textContent += inversion.nombre;
            _thInversionNombre.style.color = "darkcyan"
            const _btnEdit = document.createElement("a");
            _btnEdit.textContent = "🖊"
            _btnEdit.classList.add("edit-btn", "float-end", "opacity-0");
            _btnEdit.addEventListener("click", () => { editForm(inversion) });
            _thInversionNombre.appendChild(_btnEdit);
            const _tdInversionMontoUSD = document.createElement("td");
            _tdInversionMontoUSD.textContent = `(~U$D${inversion.montoUSD})`
            _tdInversionMontoUSD.style.color = "darkcyan"
            _trInversion.appendChild(_tdInversionMonto);
            _trInversion.appendChild(_thInversionNombre);
            _trInversion.appendChild(_tdInversionMontoUSD);
            _tbody.appendChild(_trInversion);
        });

    });
    _tabsContent?.firstChild?.classList?.add("show", "active");
    tabsContainer.appendChild(_tabsContent);
}

function renderTablist(presupuesto, year) {
    if (!Object.keys(presupuesto).length) return;

    const tabsContainer = document.querySelector("#tabsContainer");
    tabsContainer.innerHTML = ""; // Limpiar contenido previo

    const _ulTabs = document.createElement("ul");
    _ulTabs.classList.add("nav", "nav-tabs");
    _ulTabs.setAttribute("id", "tablist");
    _ulTabs.setAttribute("role", "tablist");
    _ulTabs.style.setProperty("--bs-nav-link-color", "var(--bs-secondary-color)");
    _ulTabs.style.setProperty("--bs-nav-link-disabled-color", "var(--bs-tertiary-color)");

    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    meses.forEach((mes, index) => {
        const month = `${year}${String(index + 1).padStart(2, "0")}`;
        const _liTabs = document.createElement("li");
        _liTabs.classList.add("nav-item");
        _liTabs.setAttribute("role", "presentation");
        const _buttonTabs = document.createElement("button");
        _buttonTabs.classList.add("nav-link");
        _buttonTabs.setAttribute("data-bs-toggle", "tab");
        _buttonTabs.setAttribute("data-bs-target", `#tabPresupuesto${mes}`);
        _buttonTabs.setAttribute("type", "button");
        _buttonTabs.setAttribute("role", "tab");
        _buttonTabs.setAttribute("aria-controls", `tabPresupuesto${mes}`);
        _buttonTabs.textContent = mes;
        if (!presupuesto[year][month]) {
            _buttonTabs.classList.add("disabled");
        }
        _liTabs.appendChild(_buttonTabs);
        _ulTabs.appendChild(_liTabs);
    });
    _ulTabs?.firstChild?.firstChild?.classList?.add("active");
    tabsContainer.appendChild(_ulTabs);
    return { meses, tabsContainer };
}

async function init() {
    await renderUI();
    const navBarBrand = document.getElementById("navBarBrand");
    const _html = document.documentElement;

    navBarBrand.addEventListener("click", async () => {
        _html.dataset['bsTheme'] === "dark" ? _html.dataset['bsTheme'] = "light" : _html.dataset['bsTheme'] = "dark";

    });
    parseModalFormNvoMov();
}

document.addEventListener("DOMContentLoaded", function () {
    init();
});
init();
export { updateUI, eliminarMovimiento }