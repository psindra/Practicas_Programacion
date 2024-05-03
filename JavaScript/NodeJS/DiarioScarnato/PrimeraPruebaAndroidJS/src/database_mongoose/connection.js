const mongoose = require('mongoose');
try {require("dotenv/config")}catch{};


const mongodb_URI = process.env['MONGODB_URI']
mongoose.connect(mongodb_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(DB => {
    // console.log((DB.connection));
    console.log({ "nombre Base de Datos": mongoose.connection.name });
  })
  .catch(err => {
    console.log(err);
  })