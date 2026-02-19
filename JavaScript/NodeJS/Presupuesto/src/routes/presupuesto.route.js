import express from "express";
import { Movimiento, Ingreso, Gasto, Inversion } from "../database_mongoose/models/presupuesto.js";
const router = express.Router();
import { controladorGet } from "./controlador.js";

router.route("/presupuesto")
    .get(controladorGet(Movimiento))

router.route("/presupuesto/:mes")
    .get(controladorGet(Movimiento, req => ({ mes: req.params.mes })))


export const presupuestoRoute = router;
export default presupuestoRoute;