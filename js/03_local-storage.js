let carrito = JSON.parse(localStorage.getItem("CarritoDeCompra")) || [];
//agregar cafee
const cafe = document.querySelector("#carritoCafe");
cafe.addEventListener("click", (e) => {
    agregarProductoCafe();
});
//agregar cerveza
const cerveza = document.querySelector("#carritoCerveza");
cerveza.addEventListener("click", (e) => {
    agregarProducto();
});
//agregar coca-cola
const cocaCola = document.querySelector("#carritoCoca");
cocaCola.addEventListener("click", (e) => {
    agregarProductoCoca();
});
//agregar ariel-liquido
const arielLiquido = document.querySelector("#carritoAriel");
arielLiquido.addEventListener("click", (e) => {
    agregarProductoAriel();
});

function agregarProductoAriel() {
    let cantidadde = document.querySelector("#cantidadAriel").value;
    if (cantidadde > 0) {
        let productoNuevo = {
            id: generarId(),
            nombre: "Jabon Liquido Ariel",
            cantidad: cantidadde,
            precio: 420
        }
        carrito.push(productoNuevo);
        localStorage.setItem("CarritoDeCompra", JSON.stringify(carrito));
        let carritoCantidad = document.querySelector("#cantidadDeProductos");
        let cantidadDelCarrito = carrito.length;
        carritoCantidad.innerHTML = cantidadDelCarrito
    }
}

function generarId(){
    let ultimoId = localStorage.getItem("listaIdCarrito")|| "-1";
    let nuevoId=JSON.parse(ultimoId)+1;
    localStorage.setItem("listaIdCarrito", JSON.stringify(nuevoId))
    return nuevoId;
}

function agregarProductoCoca() {
    let cantidadde = document.querySelector("#cantidadCoca").value;
    if (cantidadde > 0) {
        let productoNuevo = {
            id: generarId(),
            nombre: "Coca Cola 2,25L",
            cantidad: cantidadde,
            precio: 420
        }
        carrito.push(productoNuevo);
        localStorage.setItem("CarritoDeCompra", JSON.stringify(carrito));
        let carritoCantidad = document.querySelector("#cantidadDeProductos");
        let cantidadDelCarrito = carrito.length;
        carritoCantidad.innerHTML = cantidadDelCarrito
    }
}
function agregarProducto() {
    let cantidadde = document.querySelector("#cantidadCerveza").value;
    if (cantidadde > 0) {
        let productoNuevo = {
            id: generarId(),
            nombre: "Cerveza Imperial Gold",
            cantidad: cantidadde,
            precio: 320
        }
        carrito.push(productoNuevo);
        localStorage.setItem("CarritoDeCompra", JSON.stringify(carrito));
        let carritoCantidad = document.querySelector("#cantidadDeProductos");
        let cantidadDelCarrito = carrito.length;
        carritoCantidad.innerHTML = cantidadDelCarrito
    }
}

function agregarProductoCafe() {
    let cantidadde = document.querySelector("#cantidadDeCafe").value;
    if (cantidadde > 0) {
        let productoNuevo = {
            id: generarId(),
            nombre: "Café",
            cantidad: cantidadde,
            precio: 130
        }
        carrito.push(productoNuevo);
        localStorage.setItem("CarritoDeCompra", JSON.stringify(carrito));
        let carritoCantidad = document.querySelector("#cantidadDeProductos");
        let cantidadDelCarrito = carrito.length;
        carritoCantidad.innerHTML = cantidadDelCarrito
    }
}