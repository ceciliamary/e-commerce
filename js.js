const tarjetaProductos = document.getElementById("tarjetaProductos");
const carrito = [];

productos.forEach((producto) =>{
    const contenido = document.createElement("div");
    contenido.className="card";
    contenido.innerHTML= `<img  class="imagen" src="${producto.img}">
    <h3>${producto.productoNombre}</h3>
    <p class="price">${producto.precio}$</p>
    `;
    tarjetaProductos.append(contenido);

    const botonComprar = document.createElement("boton");
    botonComprar.innerText = "Comprar";
    botonComprar.className= "btnCompra";
    contenido.append(botonComprar)

    botonComprar.addEventListener("click", ()=>{
        carrito.push({
            id: producto.id,
            productoNombre: producto.productoNombre,
            precio: producto.precio, 
            cantidad: producto.cantidad,
            img: producto.img,
        });
        console.log(carrito);
    });
});

