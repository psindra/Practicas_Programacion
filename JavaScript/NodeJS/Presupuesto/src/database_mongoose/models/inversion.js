import mongoose from "mongoose";
import Movimiento from "./movimiento.js";

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
    montoARS: {
        type: Number, required: true,
        validate: {
            validator: (v) => (Number.isInteger(v*100) && v > 0),
            message: "El campo MontoARS debe ser un número entero positivo"
        }
    },
    montoUSD: {
        type: Number, required: true,
        validate: {
            validator: (v) => (Number.isInteger(v*100) && v > 0),
            message: "El campo MontoUSD debe ser un número entero positivo"
        }
    }
}, { _id: false });
export const Inversion = Movimiento.discriminator("inversion", esquemaInversion);
export default Inversion;