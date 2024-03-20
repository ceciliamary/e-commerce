const tarjetaProductos = document.getElementById("tarjetaProductos");

productos.forEach((producto) =>{
    const contenido = document.createElement("div");
    contenido.className="card";
    contenido.innerHTML= `<img src="${producto.img}">
    <h3>${producto.productoNombre}</h3>
    <p class="price">${producto.precio}$</p>
    `;
    tarjetaProductos.append(contenido);

    const botonComprar = document.createElement("boton");
    botonComprar.innerText = "Comprar";
    botonComprar.className= "btnCompra";
    contenido.append(botonComprar)
});