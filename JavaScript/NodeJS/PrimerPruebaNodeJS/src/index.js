const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")
app.set("PORT", process.env.PORT || 443)

// app.get('/', (req, res) => {
//   res.send('<h1>Hello Express app 2!</h1>')
// });

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(app.get("PORT"), () => {
  console.log('server started');
});

setInterval(() => {
  fetch("https://jsonplaceholder.typicode.com/albums")
    .then(resp => resp.json())
    .then(dato => {
      console.log(dato);
      fs.writeFile("salida/" + new Date().toLocaleString('sv').replace(/\:/g, "_") + ".txt", JSON.stringify(dato, null, 4), (writeFileError) => {
        console.log({ writeFileError });
      })
    })

}, 60000);

setInterval(() => {
  fetch("https://telefonica-ar1.test.etadirect.com/rest/ofscCore/v1/folders/dailyExtract/folders/2023-01-29/files/telefonica-ar.xml.2023-01-29.zip", {
    method: 'GET',
    headers: { "Authorization": "Basic =" },
    redirect: 'follow'
  })
    .then(resp => resp.text())
    .then(dato => {
      // console.log(dato);
      fs.writeFile("salida/" + new Date().toLocaleString('sv').replace(/\:/g, "_") + ".zip", JSON.stringify(dato, null, 4), (writeFileError) => {
        console.log({ writeFileError });
      })
    })
}, 10000);

// console.log(process.env);
console.log(process.env.PORT);
// console.log({ process });