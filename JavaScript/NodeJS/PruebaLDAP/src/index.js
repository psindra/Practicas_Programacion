const ldap = require('ldapjs');
const express = require("express")
const app = express();

app.listen(3000, function () {
    console.log("server started")
})

const client = ldap.createClient({
  url: 'ldap://10.167.5.49:1389'
});

// client.bind('uid=S_Draco_P,ou=service_accounts,o=TELEFONICA,o=TELEFONICA', "y9yVOHj3YS", (err) => {
client.bind('uid=s_draco_t,OU=servicios,O=TELEFONICA', "TelefonicaWhite22+", (err) => {
    // assert.ifError(err);

    console.log("++BIND++");
    console.log("__error BIND_", err);
  });

client.on("connect", (err)=>{
    console.log("+CONECTÓ+");
})


client.on("close", (err)=>{
    console.log("+close+");
})



client.on("idle", (err)=>{
    console.log("+idle+");
})

client.on('connectError', (err) => {
  // handle connection error
  console.log("--DENTRO DEL ERROR connectError--");
  console.log(err);
})

client.on('connectTimeout', (err) => {
  // handle connection error
  console.log("--DENTRO DEL ERROR connectTimeout--");
  console.log(err);
})

client.on('socketTimeout', (err) => {
  // handle connection error
  console.log("--DENTRO DEL ERROR socketTimeout--");
  console.log(err);
})

client.on('error', (err) => {
  // handle connection error
  console.log("--DENTRO DEL ERROR error--");
  console.log(err);
})



console.log("Final");