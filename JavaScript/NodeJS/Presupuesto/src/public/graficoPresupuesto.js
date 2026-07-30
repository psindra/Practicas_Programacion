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
        maintainAspectRatio: false, // <-- FUEZA AL CANVAS A ADAPTARSE AL ALTO DEL CSS
        interaction: {
            intersect: false    // agranda el area desde donde aparece el tooltip
        },
        scales: {
            x: {
                ticks: {
                    // align: "start",
                    // mirror: true,
                    maxRotation: 85,
                    // align: "start",
                    // crossAlign: true,
                },
                grid: {
                    color: 'rgba(128, 128, 128, 0.2)'
                },
            },
            y: {
                beginAtZero: true,
                ticks: {
                    align: "end",
                    mirror: true,
                    padding: 0,
                },
                grid: {
                    color: 'rgba(128, 128, 128, 0.3)'
                },
            },
            yPorcentaje: {
                beginAtZero: true,
                position: 'right',
                min: 0,
                max: 115,
                ticks: {
                    callback: function (value) {
                        return value + '%';
                    }
                },
                grid: {
                    drawOnChartArea: false, // Evita que se dibuje la cuadrícula del eje derecho
                },
            }
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function (context) {
                        if(context.dataset.yAxisID === 'yPorcentaje') {
                            const label = context.dataset.label || '';
                            const value = context.parsed.y.toFixed(1) + '%';
                            return label + ': ' + value;
                        }
                    }
                }
            },
        }
    }
});


// function chartjsGraficar(Year, Ingresos, Gastos, AhorrosOrd, AhorrosHabitual, Inversiones){
export default function graficarPresupuesto(Presupuesto, Year) {
    Presupuesto.__promesaEstadisticas.then(() => {
        grafico.data = {
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto',
                'Sept.', 'Octubre', 'Nov.', 'Dic.'],
            datasets: [
                {
                    label: 'Ingresos',
                    data: Object.entries(Presupuesto[Year]).reduce((arr, [mes, datosMes]) => {
                        arr[parseInt(mes.slice(-2)) - 1] = datosMes.estadistica.ingresoMensualHabitual;
                        return arr;
                    }, []),
                    backgroundColor: 'rgba(75, 192, 192, 1)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    tension: 0.1,
                },
                {
                    label: 'Gastos',
                    data: Object.entries(Presupuesto[Year]).reduce((arr, [mes, datosMes]) => {
                        arr[parseInt(mes.slice(-2)) - 1] = datosMes.estadistica.gastoMensual;
                        return arr;
                    }, []),
                    backgroundColor: 'rgba(255, 0, 55, 1)',
                    borderColor: 'rgba(255, 0, 55, 1)',
                    tension: 0.1,
                },
                {
                    label: 'Gastos Habitual',
                    data: Object.entries(Presupuesto[Year]).reduce((arr, [mes, datosMes]) => {
                        arr[parseInt(mes.slice(-2)) - 1] = datosMes.estadistica.gastoMensualHabitual;
                        return arr;
                    }, []),
                    backgroundColor: 'rgba(255, 99, 132, 1)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    tension: 0.1,
                },
                {
                    label: 'Ahorros',
                    data: Object.entries(Presupuesto[Year]).reduce((arr, [mes, datosMes]) => {
                        arr[parseInt(mes.slice(-2)) - 1] = datosMes.estadistica.ahorroMensual;
                        return arr;
                    }, []),
                    backgroundColor: 'rgb(255, 165, 86)',
                    borderColor: 'rgba(255, 165, 86, 1)',
                    tension: 0.1,
                },
                {
                    label: 'Ahorros Habituales',
                    data: Object.entries(Presupuesto[Year]).reduce((arr, [mes, datosMes]) => {
                        arr[parseInt(mes.slice(-2)) - 1] = datosMes.estadistica.ahorroMensualHabitual;
                        return arr;
                    }, []),
                    backgroundColor: 'rgb(255, 244, 86)',
                    borderColor: 'rgba(255, 244, 86, 1)',
                    tension: 0.1,
                },
                {
                    label: "% Ah Hab",
                    data: Object.entries(Presupuesto[Year]).reduce((arr, [mes, datosMes]) => {
                        arr[parseInt(mes.slice(-2)) - 1] = (datosMes.estadistica.ahorroMensualHabitual / datosMes.estadistica.ingresoMensualHabitual) * 100;
                        return arr;
                    }, []),
                    // backgroundColor: 'rgb(102, 255, 168)',
                    borderColor: 'rgb(102, 255, 168)',
                    borderWidth: 1.5,
                    pointRadius: 1,
                    tension: 0.1,
                    borderDash: [5, 5],
                    yAxisID: 'yPorcentaje',
                },
                {
                    label: "~ % Ah Hab",
                    hidden: true,
                    data: Object.entries(Presupuesto[Year]).map(([mes, datosMes], index, arr) => {
                        const val1 = (index-1)>=0 ? (arr[index - 1][1].estadistica.ahorroMensualHabitual /
                                arr[index - 1][1].estadistica.ingresoMensualHabitual * 100) : null;
                            const val2 = arr[index][1].estadistica.ahorroMensualHabitual /
                                arr[index][1].estadistica.ingresoMensualHabitual * 100;
                            const val3 = (index+1)<arr.length ? (arr[index + 1][1].estadistica.ahorroMensualHabitual /
                                arr[index + 1][1].estadistica.ingresoMensualHabitual * 100) : null;
                                
                                
                        const contDivisor = ((index-1)>=0 ? 1 : 0) + 1 + ((index+1)<arr.length ? 1 : 0);
                        const media = (val1 + val2 + val3) / contDivisor;
                        return media;
                    }),
                    borderColor: 'rgb(102, 255, 168)',
                    borderWidth: 0.5,
                    tension: 0.3,
                    yAxisID: 'yPorcentaje',
                }
            ]
        };
    });
}