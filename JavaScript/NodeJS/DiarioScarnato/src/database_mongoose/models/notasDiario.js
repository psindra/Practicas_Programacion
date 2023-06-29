const { default: mongoose, model } = require("mongoose");

const notas_Squema = new mongoose.Schema({
    date: {type: Date, required: true, immutable: true ,unique: true},
    intensidadDolor: { type: String, enum: ["??", "-", "Leve-", "Leve", "Leve+", "Medio", "Severo", "Severo+"]},
    mareos: Boolean,
    sensibilidadL: { type: String, enum: ["false", "true", "true+",]},
    sensibilidadR: Boolean,
    sensibilidadO: Boolean,
    afecto: { type: String, enum: ["??", "true", "+-", "false"]},
    medicina:  { type: String, enum: ["??", "-", "Diclo100mg", "Diclo50mg+Relax", "Diclo50mg", "Diclo50mg*2", "Otro", "DicloPotasico50mg", "DicloPotasico50mg+Reliveran"]}
})

notas_Squema.path("date").set(date=>{
    // return new Date((new Date(date).toDateString()));
    console.log("path 'date' -> ", date);
    console.log("path 'new Date(date)' -> ", new Date(date));
    return date;
    return new Date(date);
})

const Nota = new mongoose.model("notadiario", notas_Squema);

module.exports = Nota;