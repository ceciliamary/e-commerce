const tarjetaProductos = document.getElementById("tarjetaProductos");

productos.forEach((producto) =>{
    const contenido = document.createElement("div");
    contenido.className="card";
    contenido.innerHTML= `<img src="${producto.img}">
    <h3>${producto.productoNombre}</h3>
    <p class="price">${producto.precio}$</p>
    `;
    tarjetaProductos.append(contenido);
});