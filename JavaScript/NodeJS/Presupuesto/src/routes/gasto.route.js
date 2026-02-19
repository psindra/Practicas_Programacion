import express from "express";
import { Movimiento, Ingreso, Gasto, Inversion } from "../database_mongoose/models/presupuesto.js";
const router = express.Router();
import {controladorGet, controladorPost, controladorDelete} from "./controlador.js";

router.route("/gasto")
    .get(controladorGet(Gasto, undefined, { mes: -1 }))
    .post(controladorPost(Gasto))
    .delete(controladorDelete(Gasto, req => (req.body) )) /* Eliminar por filtro (¡CUIDADO!) */

router.route("/gasto/:mes")
    .get(controladorGet(Gasto, req => ({ mes: req.params.mes }), { mes: -1 }))
    .delete(controladorDelete(Gasto, req => ({ mes: req.params.mes })))

export const gastoRoute = router;
export default gastoRoute;