let contenedor = document.querySelector(".flex-container");
// contenedor.style.display = "flex";
// contenedor.style.flexWrap = "wrap";
// contenedor.style.justifyContent = "center";
// contenedor.style.color= "#333";
// contenedor.style.fontFamily = "sans-serif";

let titulo = document.createElement("h1");
titulo.textContent = "Boceto Tienda Electrónica";
// titulo.style.textAlign = "center";
// titulo.style.textDecoration = "underline";
// titulo.style.color = color = "darkblue"
document.body.insertBefore(titulo,contenedor)

// let img_esq_div = document.createElement("div")
// img_esq_div.classList.add("img_esq_div")
// let img_esq = document.createElement("img");
// img_esq.src = "carrito_de_compras.png";
// img_esq.classList.add("img_esq");
// img_esq_div.appendChild(img_esq)
// titulo.insertAdjacentElement('beforebegin', img_esq_div);


let formulario = form();

let fragmento = document.createDocumentFragment();

for(let i=0;i<9;i++){
    let contenedor_producto = document.createElement("div");
    contenedor_producto.id = i
    contenedor_producto.tabIndex = i+1;
    contenedor_producto.classList.add("contenedor_producto");
    let h3_modelo = document.createElement("h3");
    let modeloRandom = Math.round(Math.random() * 1000);
    h3_modelo.textContent = `Producto modelo ${modeloRandom}`
    // h3_modelo.style.margin= 0;
    
    let img = document.createElement("img")
    img.src = "carrito_de_compras.png"
    // // img.style.zoom = 0.3
    // img.style.width = "100px";
    // img.style.alignContent = "center";
    
    let h5_descripción = document.createElement("h5")
    let descripciónRandom = Math.round(Math.random() * 20)+50;
    h5_descripción.textContent = `descripción #${descripciónRandom}`;
    // h5_descripción.style.margin= 0;
    
    let h4_precio = document.createElement("h4")
    let precioRandom = Math.round(Math.random() * 20)+50;
    h4_precio.textContent = contenedor_producto.title = `Precio $${precioRandom}`;
    // h4_precio.style.color= "#999";
    contenedor_producto.append(img, h3_modelo,h5_descripción, h4_precio)
    fragmento.appendChild(contenedor_producto)
    contenedor_producto.addEventListener("click",()=>{
        formulario.querySelector(".input-class").value = modeloRandom
        
    })

    // // estilos
    // // 
    // // 
    // contenedor_producto.style.flexGrow = 1;
    // contenedor_producto.style.margin= "20px";
    // contenedor_producto.style.maxWidth= "200px";
    // contenedor_producto.style.border= "2px solid #333";
    // contenedor_producto.style.padding= "0 20px";

    // contenedor_producto.onmouseover = ()=> {
    //     // if(contenedor_producto != document.activeElement)
    //     {
    //         contenedor_producto.style.borderColor= "#71a154";
    //         contenedor_producto.style.boxShadow= "0px 0px 30px #317124";
    //         h4_precio.style.color= "#f77";
    //     }
    // }
    // contenedor_producto.onmouseleave = ()=> {
    //     // if(contenedor_producto != document.activeElement)
    //     {
    //         contenedor_producto.style.borderColor= "";
    //         contenedor_producto.style.boxShadow= "";
    //         h4_precio.style.color= "#999";
    //     }
    // }

}
contenedor.appendChild(fragmento)


contenedor.insertAdjacentElement('afterend',formulario)

function form() {
    let formulario = document.createElement("form");
    let input = document.createElement("input");
    input.type = "hidden"
    input.className = "input-class";
    let boton = document.createElement("input");
    boton.type = "submit";
    boton.value = "COMPRAR";
    formulario.append(input, boton);
    // formulario.action = alert("PEDIDO ENVIADO");
    formulario.action = "javascript:alert(\"PEDIDO REALIZADO\")";
    
    formulario.style.width= "100%";
    formulario.style.textAlign= "center";
    formulario.style.padding= "50px 0px";

    // boton.style.background= "#71a154";
    // boton.style.color= "#fff";
    // boton.style.border= "none";
    // // boton.onmouseover = () => boton.style.boxShadow= "0px 0px 10px #317124";
    // // boton.onmouseleave = () => boton.style.boxShadow= "";
    // boton.style.padding= "12px 36px";
    // boton.style.fontSize= "17px";
    // boton.style.letterSpacing= "1px";

    return formulario;
}
