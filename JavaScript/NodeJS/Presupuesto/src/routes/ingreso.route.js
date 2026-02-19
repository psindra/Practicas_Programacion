import express from "express";
import { Movimiento, Ingreso, Gasto, Inversion } from "../database_mongoose/models/presupuesto.js";
const router = express.Router();
import {controladorGet, controladorPost, controladorDelete} from "./controlador.js";

router.route("/ingreso")
    .get(controladorGet(Ingreso, undefined, { mes: -1 }))
    .post(controladorPost(Ingreso))
    .delete(controladorDelete(Ingreso, req => (req.body) )) /* Eliminar por filtro (¡CUIDADO!) */

router.route("/ingreso/:mes")
    .get(controladorGet(Ingreso, req => ({ mes: req.params.mes }), { mes: -1 }))
    .delete(controladorDelete(Ingreso, req => ({ mes: req.params.mes })))

export const ingresoRoute = router;
export default ingresoRoute;