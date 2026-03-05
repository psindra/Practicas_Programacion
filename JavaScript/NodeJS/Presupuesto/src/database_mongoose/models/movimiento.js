import mongoose from "mongoose";

const presupuestoEsquemaBase = new mongoose.Schema({
    mes: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /^(19|20)\d{2}(0[1-9]|1[0-2])$/.test(v);
            },
            message: props => `${props.value} no es un formato de mes válido (YYYYMM)`
        }
    },
    nombre: { type: String, required: true, trim: true, maxlength: 50 },
    formaPago: {
        type: String,
        trim: true,
        enum: ["Contado", "TC Visa BH", "TC Powercard", "Otros"],
        required: true,
    }
},
    {
        discriminatorKey: "tipo",     // usamos "tipo" en español
        collection: "movimientos",
        timestamps: true
    });

/**
 * Los indices se pueden definir en el Schema, a la hora de compilar, o directamente a nivel de colección. 
 * En el primero caso, Mongoose se encarga de crear los índices automáticamente al iniciar la aplicación (si no existen y
 *  el autoIndex está activado).
 * En el segundo caso, crea el indice en tiempo de ejecución, lo cual puede ser útil para índices que se crean o modifican
 * dinámicamente,(no es necesario para índices estáticos definidos en el Schema).
 * En general, para índices estáticos, es recomendable definirlos en el Schema para mantener la definición del modelo
 * centralizada y aprovechar las características de Mongoose.
 */
/**
 * índices compuestos recomendados
 */
presupuestoEsquemaBase.index({ mes: 1, tipo: 1, nombre: 1 }); // Índice compuesto para consultas frecuentes por mes, tipo y nombre
presupuestoEsquemaBase.index({ tipo: 1, nombre: 1 }); // Índice para consultas por tipo y nombre
presupuestoEsquemaBase.index({ mes: 1 }); // Índice para consultas por mes

/**
 * Modelo base
 */
export const Movimiento = mongoose.model("Movimiento", presupuestoEsquemaBase);
Movimiento.createIndexes(); // Asegura que los índices definidos en el Schema se creen en la colección
export default Movimiento;
