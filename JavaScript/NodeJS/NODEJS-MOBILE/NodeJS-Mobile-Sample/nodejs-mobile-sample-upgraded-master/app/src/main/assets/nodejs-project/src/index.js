import path from "path"; import { fileURLToPath } from 'url'; const __dirname = path.dirname(fileURLToPath(import.meta.url));
import dotenv from "dotenv"; dotenv.config({ path: path.join(__dirname, "../.env") });
console.log("comienzo index.js")
console.log({process.env['MONGODB_URI'], process.env['MONGODB_DATABASE']});

//////////////////////////////////////////////////
import express from "express"
const app = express();


/* Definiciones / Constantes */
app.set("PORT", process.env.PORT || 7300);

import "./database_mongoose/connection.js";
import ListaCompra, { DetalleProducto} from "./database_mongoose/models/listaCompra.js";
import mongoose from "mongoose";
import { listaCompraRoute } from "./routes/listaCompra.route.js";
import { detalleProductoRoute } from "./routes/detalleProducto.route.js";

app.use(express.json());
app.use(express.urlencoded());


app.use("/api", listaCompraRoute);
app.use("/api", detalleProductoRoute);
app.use(express.static(path.join(__dirname, "public")));

// app.get("/public/index.html", (req, res)=>{
  //   res.sendFile("./src/public/index.html")
  // })

console.log({__dirname});

app.get("/", (req, res, next) =>{
  res.sendFile(path.join( __dirname, "public", "index.html"))
})


MONGODB_URI = process.env['MONGODB_URI'];
MONGODB_DATABASE = process.env['MONGODB_DATABASE'];
console.log("final index.js")
console.log({MONGODB_URI, MONGODB_DATABASE});

/* Inicio servidor */
app.listen(app.get("PORT"), err=>{
  console.log("listening on PORT: ", app.get("PORT"));
})

export {DetalleProducto, ListaCompra, mongoose, app}
