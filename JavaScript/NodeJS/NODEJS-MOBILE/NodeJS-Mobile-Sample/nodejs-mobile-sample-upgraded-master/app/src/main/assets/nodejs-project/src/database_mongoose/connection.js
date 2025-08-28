import path from "path"; import { fileURLToPath } from 'url'; const __dirname = path.dirname(fileURLToPath(import.meta.url));
import dotenv from "dotenv"; dotenv.config({ path: path.join(__dirname, "../.env") });

import mongoose from "mongoose";
//try { await import("dotenv/config")}catch(err){console.log(err)};

console.log("connection.js")

const MONGODB_URI = process.env['MONGODB_URI'];
const MONGODB_DATABASE = process.env['MONGODB_DATABASE'];
console.log({MONGODB_URI, MONGODB_DATABASE});
mongoose.connect(MONGODB_URI + MONGODB_DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(DB => {
    // console.log((DB.connection));
    console.log({ "nombre Base de Datos": mongoose.connection.name });
  })
  .catch(err => {
    console.log(err);
  })
