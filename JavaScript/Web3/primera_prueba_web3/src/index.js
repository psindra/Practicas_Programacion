let btn_conectar = document.querySelector("#btn-conectar")
let btn_sendTransaction = document.querySelector("#btn-sendTransaction")
let lbl_address = document.querySelector("#lbl-address")
let span_address = document.querySelector("#span-address")
let lbl_cake = document.querySelector("#lbl-cake")
let span_cake = document.querySelector("#span-cake")


if(!window.ethereum) {
    alert("debes tener una wallet web3 compatible instalada. Ej:Metamask");
    // throw new Error("=> Debes tener una wallet web3 compatible instalada. Ej:Metamask");
    throw ("=> Debes tener una wallet web3 compatible instalada. Ej:Metamask");
}

var web3 = new Web3(window.ethereum);
var contract_cake = new web3.eth.Contract(ABIjsonInterface, '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82');

btn_conectar.addEventListener('click', async()=>{
    var account;
    try {
        alert("wallet => " + (web3.eth.defaultAccount = (await web3.eth.requestAccounts())[0]))
    } catch (error) {
        alert("debes permitir leer tu wallet");
    }
    // alert("2=> " + await web3.eth.call({method: 'eth_requestAccounts'}))
    // debugger
    if(web3.eth.defaultAccount){
        span_address.textContent = web3.eth.defaultAccount;
    }


    let cake_amount = await contract_cake.methods.balanceOf(web3.eth.defaultAccount)
        .call()
        // .call({from: web3.eth.defaultAccount})
    lbl_cake.style.display = ''
    span_cake.textContent = (cake_amount/1e18) + '  Cake'
})

btn_sendTransaction.addEventListener('click', async ()=>{
    await web3.eth.sendTransaction({to: web3.eth.defaultAccount, value: 2e15})
        .catch(()=>alert("Transacción rechazada "))
})


