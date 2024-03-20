const listadoCompra = document.getElementById("listadoCompra");
const buyList = document.getElementById("buyList");

const btnCarrito = document.getElementById("btnCarrito");

const mostrarCarrito = () =>{
//header
const contenedorHeader = document.createElement("div");
const contenedorCerrado = document.createElement("div");
contenedorCerrado.innerText = "❌";
contenedorCerrado.className = "contenedor-cerrado";
contenedorHeader.append(contenedorCerrado);

const contenedorTitulo = document.createElement("div");
contenedorTitulo.innerText = "carrito";
contenedorTitulo.className = "contenedorTitulo";
contenedorHeader.append(contenedorTitulo);
listadoCompra.append(contenedorHeader);

};

btnCarrito.addEventListener("click", mostrarCarrito);