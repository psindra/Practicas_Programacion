let contenedor = document.querySelector(".flex-container");

let titulo = document.createElement("h1");
titulo.textContent = "Boceto Tienda Electrónica";
document.body.insertBefore(titulo,contenedor)



let formulario = form();

let fragmento = document.createDocumentFragment();

for(let i=0;i<12;i++){
    let contenedor_producto = document.createElement("div");
    contenedor_producto.id = i
    contenedor_producto.tabIndex = i+1;
    contenedor_producto.classList.add("contenedor_producto");
    let h3_modelo = document.createElement("h3");
    let modeloRandom = Math.round(Math.random() * 1000);
    h3_modelo.textContent = `Producto modelo ${modeloRandom}`
    
    let img = document.createElement("img")
    img.src = "carrito_de_compras.png"
    
    let h5_descripción = document.createElement("h5")
    let descripciónRandom = Math.round(Math.random() * 20)+50;
    h5_descripción.textContent = `descripción #${descripciónRandom}`;
    
    let h4_precio = document.createElement("h4")
    let precioRandom = Math.round(Math.random() * 20)+50;
    h4_precio.textContent = contenedor_producto.title = `Precio $${precioRandom}`;
    contenedor_producto.append(img, h3_modelo,h5_descripción, h4_precio)
    fragmento.appendChild(contenedor_producto)
    contenedor_producto.addEventListener("click",()=>{
        formulario.querySelector(".input-class").value = modeloRandom
        modal_container.style.visibility = "visible"
        modal.querySelector("img").src = img.src;
        modal.querySelector("h3").textContent = h3_modelo.textContent;
        modal.querySelector("h5").textContent = h5_descripción.textContent;
        modal.querySelector(".contenedor_producto").title =
        modal.querySelector("h4").textContent = h4_precio.textContent;
        
    })
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

    return formulario;
}


let modal_container = document.createElement("div");
modal_container.className = "modal_container";

let modal = document.createElement("div");
modal.className = "modal";
{
    let contenedor_producto = document.createElement("div");
    contenedor_producto.classList.add("contenedor_producto");
    let h3_modelo = document.createElement("h3");
    let img = document.createElement("img")
    let h5_descripción = document.createElement("h5")
    let h4_precio = document.createElement("h4")
    
    contenedor_producto.append(img, h3_modelo,h5_descripción, h4_precio)
    modal.appendChild(contenedor_producto)
}

let modal_text = document.createElement("p");
modal_text.textContent = `Lorem ipsum dolor sit amet
     consectetur adipisicing elit. Ad, nostrum.`;

let modal_btn = document.createElement('button');
modal_btn.textContent = "Agregar al Carrito"


// modal.appendChild(modal_text);
modal.appendChild(modal_btn);
modal_container.appendChild(modal);

document.body.appendChild(modal_container);

modal_container.addEventListener("click", (event)=>{
    console.log(event.target == modal_container
        || event.target == modal_btn);
    if (event.target == modal_container
        || event.target == modal_btn){
        modal_container.style.visibility = "hidden"
    }
})
