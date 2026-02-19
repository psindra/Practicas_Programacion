import express from "express";
import { Movimiento, Ingreso, Gasto } from "../database_mongoose/models/presupuesto.js";


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
        res.status(500).json({ error: err.message });
    })
}

const controladorPost = (Model) => (req, res) => {
    return Model.create(req.body)
        .then(movimientoCreado => {
            res.status(201).json(movimientoCreado);
        })
        .catch(err => {
            console.error("Error al crear movimiento:", err);
            return res.status(500).json({ error: err.message });
        })
}

const controladorDelete = (Model, filtroF = () => ({})) => (req, res) => {
    const filtro = filtroF(req);
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
        res.status(500).json({ error: err.message });
    })
}

export { controladorGet, controladorPost, controladorDelete };