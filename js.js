const tarjetaProductos = document.getElementById("tarjetaProductos");

productos.forEach((producto) =>{
    const contenido = document.createElement("div");
    contenido.innerHTML = `
    <img src="${producto.img}">
    <h3>${producto.productoNombre}</h3>
    <p>${producto.precio}$</p>
    `;
    tarjetaProductos.append(contenido);
});