/* Al ejecutarse en el navegador, el código busca el objeto global window y se autoasigna como una propiedad */
// import 'https://cdn.jsdelivr.net/npm/chart.js';
import "https://cdn.jsdelivr.net/npm/chart.js@4.5.1/dist/chart.umd.min.js";

const ctx = document.getElementById('graficoCanvas').getContext('2d');
const grafico = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        datasets: [
            {
                label: 'Ingresos',
                data: [1200, 1500, 1800, 2000, 2200, 2500, 2800, 3000, 3200, 3500, 3800, 4000],
                backgroundColor: 'rgba(75, 192, 192, 1)',
                borderColor: 'rgba(75, 192, 192, 1)',
                tension: 0.1,
                pointRadius: 6,
                pointBackgroundColor: 'rgba(0, 0, 0, 0)',
                pointBorderColor: 'rgba(0, 0, 0, 0)',
                pointHoverRadius: 4,
                pointHoverBackgroundColor: 'rgba(75, 192, 192, 1)',
                pointHoverBorderColor: 'rgba(75, 192, 192, 1)',
                pointHoverBorderWidth: 2,
            },
            {
                label: 'Gastos',
                data: [800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900],
                borderColor: 'rgba(255, 99, 132, 1)',
                tension: 0.1,
            }
        ]
    },
    options: {
        responsive: true,
    }
});


// function chartjsGraficar(Year, Ingresos, Gastos, AhorrosOrd, AhorrosHabitual, Inversiones){
export default function graficarPresupuesto(Presupuesto, Year) {
    Presupuesto.__promesaEstadisticas.then(() => {
        grafico.data = {
            labels: ['Enero' + Year, 'Febrero' + Year, 'Marzo' + Year, 'Abril' + Year, 'Mayo' + Year, 'Junio' + Year, 'Julio' + Year, 'Agosto' + Year, 
                'Septiembre' + Year, 'Octubre' + Year, 'Noviembre' + Year, 'Diciembre' + Year],
            datasets: [
                {
                    label: 'Ingresos',
                    data: Object.values(Presupuesto[Year]).map(mes=> mes.estadistica.ingresoMensualHabitual),
                    backgroundColor: 'rgba(75, 192, 192, 1)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    tension: 0.1,
                },
                {
                    label: 'Gastos',
                    data: Object.values(Presupuesto[Year]).map(mes=> mes.estadistica.gastoMensualHabitual),
                    backgroundColor: 'rgba(255, 99, 132, 1)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    tension: 0.1,
                },
                {
                    label: 'Ahorros',
                    data: Object.values(Presupuesto[Year]).map(mes=> mes.estadistica.ahorroMensual),
                    backgroundColor: 'rgba(255, 206, 86, 1)',
                    borderColor: 'rgba(255, 206, 86, 1)',
                    tension: 0.1,
                },
                {
                    label: 'Ahorros Habituales',
                    data: Object.values(Presupuesto[Year]).map(mes=> mes.estadistica.ahorroMensualHabitual),
                    backgroundColor: 'rgb(255, 244, 86)',
                    borderColor: 'rgba(255, 244, 86, 1)',
                    tension: 0.1,
                },
            ]
        };
    });
}