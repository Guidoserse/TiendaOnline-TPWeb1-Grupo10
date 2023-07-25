function estadoCarrito(){
let carritoMostrar= JSON.parse(localStorage.getItem("CarritoDeCompra"))
if(carritoMostrar!=null){
if(carritoMostrar.length>0){
    cantidadObtenido=carritoMostrar.length;
    let carritoCantidad=document.querySelector("#cantidadDeProductos");
    carritoCantidad.innerHTML=cantidadObtenido;
}
} }

let carritoDelLocalStorage=JSON.parse(localStorage.getItem("CarritoDeCompra"));


document.addEventListener("DOMContentLoaded", function (event) {
    carritoDelLocalStorage.forEach(function (elemento) {
        estadoCarrito();
        insertRowInCardsTable(elemento);
    })
})

let tabla=document.getElementById("tabla-carrito");

function insertRowInCardsTable(elemento) {
    let producto = document.createTextNode(elemento.nombre);
    let cantidad = document.createTextNode(elemento.cantidad);
    let precio = document.createTextNode(elemento.precio);
    let nodoProducto = document.createElement("p");
    let nodoCantidad = document.createElement("p");
    let nodoPrecio = document.createElement("p");
    let icono = document.createElement("i");
    let datos = document.createElement("div");
    let botonEliminar=document.createElement("button");
    botonEliminar.appendChild(icono);
    icono.classList.add("fa-solid");
    icono.classList.add("fa-trash");
    nodoProducto.appendChild(producto);
    nodoCantidad.appendChild(cantidad);
    nodoPrecio.appendChild(precio);
    datos.appendChild(nodoProducto);
    datos.appendChild(nodoCantidad);
    datos.appendChild(nodoPrecio);
    datos.appendChild(botonEliminar);
    datos.setAttribute("idFila",elemento["id"]);
    tabla.appendChild(datos);
    botonEliminar.addEventListener("click", (event)=>{
        let fila=event.target.parentNode.parentNode;
        let idEliminar= fila.getAttribute("idFila");
        console.log(idEliminar)
        fila.remove();
        eliminarProductoLocalStorage(idEliminar);
        estadoCarrito();
    });
}

function eliminarProductoLocalStorage(idEliminar){
    let ArrayCarrito=JSON.parse(localStorage.getItem("CarritoDeCompra"));
    let productoEliminar=ArrayCarrito.findIndex(element=>element.id==idEliminar);    
    ArrayCarrito.splice(productoEliminar,1);
    let carritoJSON = JSON.stringify(ArrayCarrito);
    localStorage.setItem("CarritoDeCompra",carritoJSON);
}
