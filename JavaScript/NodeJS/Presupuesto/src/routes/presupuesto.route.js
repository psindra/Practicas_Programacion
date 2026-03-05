import express from "express";
import { Movimiento, Ingreso, Gasto, Inversion } from "../database_mongoose/models/modelosPresupuesto.js";
const router = express.Router();
import { controladorGet } from "./controlador.js";

router.route("/presupuesto")
    .get(controladorGet(Movimiento))

router.route("/presupuesto/:mes")
    .get(controladorGet(Movimiento, req => ({ mes: req.params.mes })))

router.route("/presupuesto/anual/:año")
    .get(controladorGet(Movimiento, req => {
        if (!/^(19|20)\d{2}$/.test(req.params.año)) {
            throw new Error("Año inválido. Error en validación año.");
        }
        return { mes: { $regex: `^${req.params.año}` } };
    },
        { mes: 1 }))

export const presupuestoRoute = router;
export default presupuestoRoute;