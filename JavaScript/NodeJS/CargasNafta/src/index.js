import express from "express";
const app = express();
import path, { dirname } from "path"
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));


/* Definiciones / Constantes */
app.set("PORT", process.env.PORT || 7300);

/* Base de Datos Mongoose */
import "./database_mongoose/connection.js";
import { puntoCargaRoute } from "./routes/puntoCarga.route.js";

app.use(express.json());
app.use("/api", puntoCargaRoute);
app.use(express.static(path.join(__dirname, "public")));


app.get("/", (req, res, next) =>{
    res.send("Punto de Carga OK");
});

/* Inicio servidor */
app.listen(app.get("PORT"), err=>{
    console.log("listening on PORT: ", app.get("PORT"));
});