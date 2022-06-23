let numeroIngresado  = Number.parseFloat(prompt("ingrese el número"));

while(Number.isNaN(numeroIngresado) || !Number.isInteger(numeroIngresado) || 
!(numeroIngresado>0 && numeroIngresado<=26)
){
    numeroIngresado  = Number.parseFloat(prompt("ingrese un número entero entre 1 y 26 (letras A y Z"));
}

numeroIngresado = Number.parseInt(numeroIngresado);

let matriz = []
//  new Array(numeroIngresado*2)
// matriz.map(item=>{
//     return new Array(numeroIngresado*2);
// })

let letra = numeroIngresado - 1;
let contador = 0;
for (let p=0;p<numeroIngresado*2;p++){
    matriz[p] = [];
}
console.log(matriz);

for (let n=0;n<numeroIngresado;n++){
    for(let i=contador; i< (2*numeroIngresado)-contador; i++){
        for(let j=contador; j< (2*numeroIngresado)-contador; j++){
            matriz[i][j] = String.fromCharCode(letra + 65);
        }
    }
    letra = letra-1
    contador = contador + 1;
}
    
    console.table(matriz);