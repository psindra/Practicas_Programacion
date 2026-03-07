import express from "express";
import { Movimiento, Ingreso, Gasto, Inversion } from "../database_mongoose/models/modelosPresupuesto.js";
import mongoose from "mongoose";


const controladorGet = (Model, filtroF = () => ({}), sort = {}) => (req, res) => {
    const filtro = filtroF(req);
    console.log(filtro);

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

const controladorPost = (Model) => (req, res) => {
    return Model.findByIdAndUpdate(req.body._id || new mongoose.Types.ObjectId(), req.body, { returnDocument: 'after', upsert: true })
    .then(movimientoGuardado => {
            res.status(201).json(movimientoGuardado);
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

const controladorDelete = (Model, filtroF = () => ({})) => (req, res) => {
    const filtro = filtroF(req);
    console.log({filtro},{body: req.body});
    
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

export { controladorGet, controladorPost, controladorDelete };