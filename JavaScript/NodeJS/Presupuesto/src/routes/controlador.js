import express from "express";
import { Movimiento, Ingreso, Gasto, Inversion } from "../database_mongoose/models/modelosPresupuesto.js";
import mongoose from "mongoose";


export const controladorGet = (Model, filtroF = () => ({}), sort = {}) => (req, res) => {
    const filtro = filtroF(req);
    console.log({ filtro });

    return Model.find(filtro)
        .sort(sort)
        .exec()
        .then(resultados => {
            res.json(resultados);
        })
        .catch(err => {
            console.error("Error en controladorGet: ", err);
            return res.status(500).json({ error: err.message });
        })
}

export const controladorPost = (Model) => (req, res) => {
    return Model.findById(req.body._id)
    .then(documento => {
        if (!documento) {
            // Si no existe el documento, se crea uno nuevo
            documento = new Model(req.body);
        } else {
            // Si el documento existe, se actualizan sus campos
            Object.assign(documento, req.body);
        }
        return documento.save();
    })
    .then(movimientoGuardado => {
        console.log({ movimientoGuardado });
        return res.status(201).json(movimientoGuardado);
    })
    .catch(err => {
        console.error("Error al crear o actualizar movimiento:", err);
        return res.status(500).json({ error: err.message });
    })

    console.log({ body: req.body });
    return Model.findByIdAndUpdate(req.body._id || new mongoose.Types.ObjectId(), req.body, { returnDocument: 'after', upsert: true, runValidators: true })
        .then(movimientoGuardado => {
            console.log({ movimientoGuardado });
            return res.status(201).json(movimientoGuardado);
        })
        .catch(err => {
            console.error("Error al crear movimiento:", err);
            return res.status(500).json({ error: err.message });
        })

    /*  */
    const nuevoMovimiento = new Model(req.body);
    nuevoMovimiento.isNew = !req.body._id; // Si no tiene _id, es nuevo
    return nuevoMovimiento.save()
        .then(movimientoGuardado => {
            res.status(201).json(movimientoGuardado);
        })
        .catch(err => {
            console.error("Error al crear movimiento:", err);
            return res.status(500).json({ error: err.message });
        })
}

export const controladorDelete = (Model, filtroF = () => ({})) => (req, res) => {
    const filtro = filtroF(req);
    console.log({ filtro }, { body: req.body });

    //validar que filtro no es un objeto vacío
    if (filtro == undefined || Object.keys(filtro).length === 0) {
        return res.status(400).json({ error: "Filtro vacío" });
    }
    return Model.deleteMany(filtro)
        .exec()
        .then(resultado => {
            res.json({ mensaje: "Movimientos eliminados", resultado });
        })
        .catch(err => {
            console.error("Error en controladorDelete: ", err);
            return res.status(500).json({ error: err.message });
        })
}

export const controladorEstadisticas = () => async (req, res) => {
    // const _estadisticasDelMes = await estadisticasDelMes();
    // console.log({_estadisticasDelMes});
    
    // const _acumuladoEnElAño = await acumuladoEnElAño();
    // for(const estadisticaMes of _estadisticasDelMes) {
    //     Object.assign(estadisticaMes, _acumuladoEnElAño.find(accumMes => accumMes.mes === estadisticaMes.mes));
    // }
    // return res.json(_estadisticasDelMes);

    estadisticasDelMes()
    .then(estadisticas => {
        return acumuladoEnElAño()
        .then(acumulados => {
            for(const estadisticaMes of estadisticas) {
                Object.assign(estadisticaMes, acumulados.find(accumMes => accumMes.mes === estadisticaMes.mes));
            }
            return estadisticas;
        })
    })
    .then(estadisticasCompletas => {
        return res.json(estadisticasCompletas);
    })
    .catch(err => {
        console.error("Error en controladorEstadisticas: ", err);
        return res.status(500).json({ error: err.message });
    })

}
const estadisticasDelMes = async () => {
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
    ])
} 

// console.log("Estadisticas del Mes:\n ", await estadisticasDelMes());
const acumuladoEnElAño = async ()=>{
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
        return listaMesesExistentes.map(obj => obj.mes)
    }).then(async meses => {
        
        const accumArray = meses.map(async mes => {
            
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
            ])  // fin agregation
            return acumulados[0]
        })  // fin map meses
        return Promise.all(accumArray);
    })
} 
