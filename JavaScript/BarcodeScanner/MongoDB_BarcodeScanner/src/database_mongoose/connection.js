import mongoose from "mongoose";
import "dotenv/config"
// const mongoose = require('mongoose');


const mongodb_URI = process.env['MONGODB_URI']
const MONGODB_DATABASE = process.env['MONGODB_DATABASE']
console.log({mongodb_URI, MONGODB_DATABASE});
mongoose.connect(mongodb_URI + MONGODB_DATABASE, {
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