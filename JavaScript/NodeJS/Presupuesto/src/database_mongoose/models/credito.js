import mongoose, { Mongoose } from "mongoose";
import Movimiento from "./movimiento.js";

const esquemaCredito = new mongoose.Schema({
    monto: {
        total: {
            type: Number,
            validate: [
                {
                    validator: (v) => (v == v.toFixed(2)) && v > 0,
                    message: "El campo Monto.Total debe ser un valor positivo"
                }
            ],
            required: true
        },
        nroCuotas: {
            type: Number,
            validate: {
                min: 0,
                validator: (v) => Number.isInteger(v),
                message: "El campo Monto.nroCuotas debe ser un valor entero positivo"
            },
            required: true,
        }
    },
    formaDebito: {...Movimiento.schema.path("formaPago").options},
    formaPago: {type: String, required: false}
}, { _id: false });

esquemaCredito.pre("validate", function (next) {
    if (this.formaPago === "Contado" && this.monto.nroCuotas) {
        throw new Error("La forma de pago 'Contado' no puede tener cuotas. Por favor, elija una forma de pago diferente.");
    }
    return;
});
export const Credito = Movimiento.discriminator("credito", esquemaCredito);
export default Credito;