import mongoose from "mongoose";
// try {require("dotenv/config")}catch{};
import "dotenv/config"

const MONGODB_URI = process.env["MONGODB_URI"];
const MONGODB_DATABASE = process.env["MONGODB_DATABASE"];
console.log({MONGODB_URI, MONGODB_DATABASE});

mongoose.connect( MONGODB_URI + MONGODB_DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(DB=>{
    console.log("Conectado. Nombre Base de Datos: ", mongoose.connection.name);
})
.catch(err=>{
    console.log(err);
})