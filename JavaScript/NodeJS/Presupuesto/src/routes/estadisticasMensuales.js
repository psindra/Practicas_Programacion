import Movimiento from "../database_mongoose/models/movimiento";

export const estadisticasDelMes = async () => {
    return await Movimiento.aggregate([
        {
            $group: {
                _id: "$mes",
                ingresoMensualHabitual: { $sum: { $cond: [{ $and: [{ $eq: ["$tipo", "ingreso"] }, { $eq: ["$nombre", "Sueldo"] }] }, "$monto.habitual", 0] } },
                ingresoMensualExtraordinario: { $sum: { $cond: [{ $eq: ["$tipo", "ingreso"] }, "$monto.total", 0] } },
                gastoMensual: { $sum: { $cond: [{ $and: [{ $eq: ["$tipo", "gasto"] }, { $eq: ["$formaPago", "Contado"] }] }, "$monto.total", 0] } },
                gastoMensualHabitual: { $sum: { $cond: [{ $and: [{ $eq: ["$tipo", "gasto"] }, { $eq: ["$formaPago", "Contado"] }, { $eq: ["$habitual", true] }] }, "$monto.total", 0] } }
            }
        },
        {
            $addFields: {
                ahorroMensual: { $subtract: ["$ingresoMensualHabitual", "$gastoMensual"] },
                ahorroMensualHabitual: { $subtract: ["$ingresoMensualHabitual", "$gastoMensualHabitual"] },
                ahorroMensualExtraordinario: { $subtract: ["$ingresoMensualExtraordinario", "$gastoMensual"] }
            }
        },
        {
            $project: {
                mes: "$_id",
                ingresoMensualHabitual: 1,
                ingresoMensualExtraordinario: 1,
                gastoMensual: 1,
                gastoMensualHabitual: 1,
                ahorroMensual: 1,
                ahorroMensualHabitual: 1,
                ahorroMensualExtraordinario: 1
            }
        }
    ]);
};
// console.log("Estadisticas del Mes:\n ", await estadisticasDelMes());
export const acumuladoEnElAño = async () => {
    return await Movimiento.aggregate([
        {
            $group: {
                _id: "$mes",
            }
        },
        {
            $project: { mes: "$_id" }
        },
        {
            $sort: { "mes": 1 }
        }
    ]).then(listaMesesExistentes => {
        return listaMesesExistentes.map(obj => obj.mes);
    }).then(async (meses) => {

        const accumArray = meses.map(async (mes) => {

            const desde = mes.slice(0, 4) + "01";
            const hasta = mes;
            const acumulados = await Movimiento.aggregate([
                { $match: { mes: { $lte: hasta } } },
                { $match: { mes: { $gte: desde } } },
                {
                    $group: {
                        _id: null,
                        accumIngreso: { $sum: { $cond: [{ $eq: ["$tipo", "ingreso"] }, "$monto.total", 0] } },
                        accumGasto: { $sum: { $cond: [{ $and: [{ $eq: ["$tipo", "gasto"] }, { $eq: ["$formaPago", "Contado"] }] }, "$monto.total", 0] } },
                        accumInversionesARS: { $sum: { $cond: [{ $eq: ["$tipo", "inversion"] }, "$montoARS", 0] } },
                        accumInversionesUSD: { $sum: { $cond: [{ $eq: ["$tipo", "inversion"] }, "$montoUSD", 0] } },
                    }
                },
                {
                    $project: {
                        mes: hasta,
                        accumIngreso: 1,
                        accumGasto: 1,
                        accumAhorro: { $subtract: ["$accumIngreso", "$accumGasto"] },
                        accumInversionesARS: 1,
                        accumInversionesUSD: 1
                    }
                },
                {
                    $sort: { "mes": 1 }
                },
            ]); // fin agregation
            return acumulados[0];
        }); // fin map meses
        return Promise.all(accumArray);
    });
};
