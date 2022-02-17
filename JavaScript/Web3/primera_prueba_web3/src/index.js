let btn_conectar = document.querySelector("#btn-conectar")
let btn_sendTransaction = document.querySelector("#btn-sendTransaction")
let lbl_address = document.querySelector("#lbl-address")
let span_address = document.querySelector("#span-address")
let lbl_cake = document.querySelector("#lbl-cake")
let span_cake = document.querySelector("#span-cake")



var web3 = new Web3(window.ethereum);

btn_conectar.addEventListener('click', async()=>{
    var account;
    alert("wallet => " + (web3.eth.defaultAccount = (await web3.eth.requestAccounts())[0]))
    // alert("2=> " + await web3.eth.call({method: 'eth_requestAccounts'}))
    // debugger
    if(web3.eth.defaultAccount){
        span_address.textContent = web3.eth.defaultAccount;
    }

    var contract_cake = new web3.eth.Contract(jsonInterface, '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82');

    let cake_amount = await contract_cake.methods.balanceOf(web3.eth.defaultAccount)
        .call({from: web3.eth.defaultAccount})
    lbl_cake.style.display = ''
    span_cake.textContent = (cake_amount/1e18) + '  Cake'
})

btn_sendTransaction.addEventListener('click', async ()=>{
    await web3.eth.sendTransaction({to: web3.eth.defaultAccount, value: 2e15})
})


