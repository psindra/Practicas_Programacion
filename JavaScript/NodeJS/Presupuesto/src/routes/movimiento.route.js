import express from "express";
import { Movimiento, Ingreso, Gasto, Inversion } from "../database_mongoose/models/presupuesto.js";
const router = express.Router();
import {controladorGet, controladorPost, controladorDelete} from "./controlador.js";

router.route("/movimiento")
    .get(controladorGet(Movimiento,req => (req.body), { mes: -1 }))
    .post(controladorPost(Movimiento))
    .delete(controladorDelete(Movimiento, req => (req.body) )) /* Eliminar todos los movimientos (¡CUIDADO!) */


router.route("/movimiento/:mes")
    .get(controladorGet(Movimiento, req => ({ mes: req.params.mes }), { mes: -1 }))
    .delete(controladorDelete(Movimiento, req => ({ mes: req.params.mes })))


router.route("/movimiento/id/:id")
    .get(controladorGet(Movimiento, req => ({ _id: req.params.id }))) /* Consultar por ID */
    .delete(controladorDelete(Movimiento, req => ({ _id: req.params.id }))) /* Eliminar por ID */

export const movimientoRoute = router;
export default movimientoRoute;