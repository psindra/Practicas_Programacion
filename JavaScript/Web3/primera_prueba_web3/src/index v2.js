let btn_conectar = document.querySelector("#btn-conectar")
let btn_sendTransaction = document.querySelector("#btn-sendTransaction")
let div_address = document.querySelector("#address")
let lbl_address = document.querySelector("#lbl-address")
let span_address = document.querySelector("#span-address")
let container_saldos = document.querySelector("#container-saldos");

let lbl_cake = document.querySelector("#lbl-saldo-cake")
let span_cake = document.querySelector("#span-saldo-cake")

let lbl_eth = document.querySelector("#lbl-saldo-eth")
let span_eth = document.querySelector("#span-saldo-eth")

let lbl_ada = document.querySelector("#lbl-saldo-ada")
let span_ada = document.querySelector("#span-saldo-ada")

let lbl_busd = document.querySelector("#lbl-saldo-busd")
let span_busd = document.querySelector("#span-saldo-busd")

let lbl_usdt = document.querySelector("#lbl-saldo-usdt")
let span_usdt = document.querySelector("#span-saldo-usdt")


if(!window.ethereum) {
    alert("debes tener una wallet web3 compatible instalada. Ej:Metamask");
    // throw new Error("=> Debes tener una wallet web3 compatible instalada. Ej:Metamask");
    throw ("=> Debes tener una wallet web3 compatible instalada. Ej:Metamask");
}

var web3 = new Web3(window.ethereum);
web3.eth.getChainId().then(chainId=> {
    if (chainId!=56){
        alert("Debes estar conectado a la red BSC en tu wallet")
        throw ("=> Debes estar conectado a la red BSC en tu wallet");
    }
});

// var contract_cake;
// (async ()=>{
//     contract_cake = await new web3.eth.Contract(ABIgenerico, '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82');
// })();

btn_conectar.addEventListener('click', async()=>{
    var account;

    await web3.eth.requestAccounts()
        .then(account=>{
            web3.eth.defaultAccount = account[0];
        })
        .catch(error=>{
            alert("debes permitir leer la dirección pública de tu wallet");
            throw ("=> Debes permitir leer la dirección pública de tu wallet");
        })

    // alert("2=> " + await web3.eth.call({method: 'eth_requestAccounts'}))
    
    if(web3.eth.defaultAccount){
        span_address.textContent = web3.eth.defaultAccount;
    }


    // contract_cake.methods.balanceOf(web3.eth.defaultAccount) //.call().....
    new web3.eth.Contract(ABIgenerico, '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82')
    .methods.balanceOf(web3.eth.defaultAccount)
        .call()
        .then((cake_amount)=>{
        span_cake.textContent = (cake_amount/1e18).toFixed(4) + '  Cake';
    })
    span_cake.innerHTML = "<i>leyendo...</i>";
    
    // ETH
    web3.eth.getBalance(web3.eth.defaultAccount)
    .then((eth_amount)=>{
        span_eth.textContent = (eth_amount/1e18).toFixed(4) + '  BNB';
        // + ((56) === (await web3.eth.getChainId()))? '  Ether': '  BNB';
    })
    span_eth.innerHTML = "<i>leyendo...</i>";

    // el resto de contratos
    // ADA
    new web3.eth.Contract(ABIgenerico, '0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47')
    .methods.balanceOf(web3.eth.defaultAccount)
        .call()
        .then((ada_amount)=>{
            span_ada.textContent = (ada_amount/1e18).toFixed(4) + '  ada';
        })
    span_ada.innerHTML = "<i>leyendo...</i>";
    
    // BUSD
    new web3.eth.Contract(ABIgenerico, '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56')
    .methods.balanceOf(web3.eth.defaultAccount)
        .call()
        .then((busd_amount)=>{
            span_busd.textContent = (busd_amount/1e18).toFixed(4) + '  busd';
        })
    span_busd.innerHTML = "<i>leyendo...</i>";
    
    // USDT
    new web3.eth.Contract(ABIgenerico, '0x55d398326f99059fF775485246999027B3197955')
    .methods.balanceOf(web3.eth.defaultAccount)
        .call()
        .then((usdt_amount)=>{
            span_usdt.textContent = (usdt_amount/1e18).toFixed(4) + '  usdt';
        })
    span_usdt.innerHTML = "<i>leyendo...</i>";
    
    div_address.style.removeProperty("display")
    container_saldos.style.removeProperty("display")

})  // fin addEventListener

// btn_sendTransaction.addEventListener('click', async ()=>{
//     await web3.eth.sendTransaction({to: web3.eth.defaultAccount, value: 2e15})
//         .catch(()=>alert("Transacción rechazada "))
// })


