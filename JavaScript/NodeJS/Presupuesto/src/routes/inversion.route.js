import express from "express";
import { Movimiento, Ingreso, Gasto, Inversion } from "../database_mongoose/models/presupuesto.js";
const router = express.Router();
import {controladorGet, controladorPost, controladorDelete} from "./controlador.js";

router.route("/inversion")
    .get(controladorGet(Inversion, undefined, { mes: -1 }))
    .post(controladorPost(Inversion))
    .delete(controladorDelete(Inversion, req => (req.body) )) /* Eliminar por filtro (¡CUIDADO!) */

router.route("/inversion/:mes")
    .get(controladorGet(Inversion, req => ({ mes: req.params.mes }), { mes: -1 }))
    .delete(controladorDelete(Inversion, req => ({ mes: req.params.mes })))

export const inversionRoute = router;
export default inversionRoute;