import mongoose from "mongoose";
import { Movimiento } from "./presupuesto.js";

/**
 * -----------------------
 * Discriminador: inversion
 * - plataforma, instrumento requeridos
 * - cantidadInstrumento opcional (puede ser decimal)
 * - montoARS, montoUSD: Number >= 0 (recomiendo centavos si son fiat)
 */
const esquemaInversion = new mongoose.Schema({
    plataforma: { type: String, required: true, trim: true, maxlength: 50 },
    instrumento: { type: String, required: true, trim: true, maxlength: 50 },
    cantidadInstrumento: { type: Number, required: false, min: 0 },
    montoARS: { type: Number, required: true, min: 0, validate: { validator: (v) => Number.isInteger(v), message: "El campo MontoARS debe ser un número entero no negativo" } },
    montoUSD: { type: Number, required: true, min: 0, validate: { validator: (v) => Number.isInteger(v), message: "El campo MontoUSD debe ser un número entero no negativo" } }
}, { _id: false });
export const Inversion = Movimiento.discriminator("inversion", esquemaInversion);
export default Inversion;