import express from "express"
const app = express();


/* Definiciones / Constantes */
app.set("PORT", process.env.PORT || 7300);

import "./database_mongoose/connection.js";
import ListaCompra, { detalleProducto } from "./database_mongoose/models/listaCompra.js";
import mongoose from "mongoose";
import { listaCompraRoute } from "./routes/listaCompra.route.js";
import { detalleProductoRoute } from "./routes/detalleProducto.route.js";

app.use(express.json());
app.use(express.urlencoded());

import path from "path"; import { fileURLToPath } from 'url'; const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use("/api", listaCompraRoute);
app.use("/api", detalleProductoRoute);
app.use(express.static(path.join(__dirname, "public")));

// app.get("/public/index.html", (req, res)=>{
  //   res.sendFile("./src/public/index.html")
  // })

console.log({__dirname});
console.log(path.join( __dirname, "public", "index.html"));

app.get("/", (req, res, next) =>{
  // res.send("OK");
  res.sendFile(path.join( __dirname, "public", "index.html"))
})

/* Inicio servidor */
app.listen(app.get("PORT"), err=>{
  console.log("listening on PORT: ", app.get("PORT"));
})