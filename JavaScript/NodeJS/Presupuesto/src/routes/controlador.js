import express from "express";
import { Ingreso, Gasto, Inversion } from "../database_mongoose/models/modelosPresupuesto.js";
import mongoose from "mongoose";
import { estadisticasDelMes, acumuladoEnElAño } from "./estadisticasMensuales.js";


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

export const simuladorPost = (Model) => (req, res) => {
    return Model.findById(req.body._id)
    .then(documento => {
        if (!documento) {
            // Si no existe el documento, se crea uno nuevo
            documento = new Model(req.body);
        } else {
            // Si el documento existe, se actualizan sus campos
            /* Object.assign(documento, req.body); */
        }
        return documento;
    })
    .then(movimientoGuardado => {
        console.log({ movimientoGuardado });
        return res.status(201).json(movimientoGuardado);
    })
    .catch(err => {
        console.error("Error al crear o actualizar movimiento simulado:", err);
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

