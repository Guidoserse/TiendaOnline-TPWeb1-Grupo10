
const botonAgregar = document.querySelector(".agregar");
const bontonCerrarModal = document.querySelector(".cancelar");

const modalDirecciones = document.querySelector("#agregarDireccion");

let tablaDirecciones = document.querySelector(".tabla")

const form = document.querySelector("#fromulario-mis-direcciones");

botonAgregar.addEventListener("click", function () { modalDirecciones.showModal() });
bontonCerrarModal.addEventListener("click", function () { modalDirecciones.close() })

form.addEventListener("submit", (e) => {
   
    if (validar()) {
        modalDirecciones.close();
    }
    form.reset();
});

let direcciones = JSON.parse(localStorage.getItem('listaDirecciones')) || [];

document.addEventListener("DOMContentLoaded", function (event) {
    direcciones.forEach(function (elemento) {
        insertRowInDirectionsTable(elemento);
    })
})

function insertRowInDirectionsTable(elemento) {
    let alias = document.createTextNode(elemento.alias);
    let direccion = document.createTextNode(elemento.direccion);
    let nodoAlias = document.createElement("p");
    let nodoDireccion = document.createElement("p")
    let icono = document.createElement("i");
    let datos = document.createElement("div");
    let botonEliminar=document.createElement("button");
    botonEliminar.appendChild(icono);
    icono.classList.add("fa-solid");
    icono.classList.add("fa-trash");
    nodoAlias.appendChild(alias);
    nodoDireccion.appendChild(direccion);
    datos.appendChild(nodoAlias);
    datos.appendChild(nodoDireccion);
    datos.appendChild(botonEliminar);
    datos.setAttribute("idFila",elemento["id"]);
    tablaDirecciones.appendChild(datos);
    botonEliminar.addEventListener("click", (event)=>{
        let fila=event.target.parentNode.parentNode;
        let idEliminar= fila.getAttribute("idFila");
        console.log(idEliminar)
        fila.remove();
        eliminarDireccionLocalStorage(idEliminar);
    });
}


function validar() {
    let error = false;
    let mensajesError = '';
    let alias = document.querySelector("#alias");
    let provincia = document.querySelector("#provincias");
    let localidad = document.querySelector("#localidad");
    let direccion = document.querySelector("#direccion");
    let telefono = document.querySelector("#telefono");
    let piso = document.querySelector("#piso");
    let dpto = document.querySelector("#dto");

    if (alias.value == "") {
        error = true;
        mensajesError = "<p>El campo alias es obligatorio</p>";
        document.querySelector("#mensaje1").innerHTML = mensajesError;
    }

    if (provincia.value == 0) {
        error = true;
        mensajesError = "<p>El campo provincia es obligatorio</p>"
        document.querySelector("#mensaje2").innerHTML = mensajesError;
    } else { provincia = provincia.value };

    if (localidad.value == 0) {
        error = true;
        mensajesError = "<p>El campo localidad es obligatorio</p>"
        document.querySelector("#mensaje3").innerHTML = mensajesError;
    } else { localidad = localidad.value }

    if (direccion.value == "") {
        error = true;
        mensajesError = "<p>El campo dirección es obligatorio</p>";
        document.querySelector("#mensaje4").innerHTML = mensajesError;
    }

    if (telefono.value == "") {
        error = true;
        mensajesError = "<p>El campo teléfono es obligatorio</p>";
        document.querySelector("#mensaje5").innerHTML = mensajesError;
    }

    if (!error) {
        let nuevaDireccion = {
            id: generarId(),
            alias: alias.value,
            provincia: provincia.value,
            localidad: localidad.value,
            direccion: direccion.value,
            telefono: telefono.value,
            piso: piso.value,
            dpto: dpto.value
        }
        direcciones.push(nuevaDireccion);
        localStorage.setItem("listaDirecciones", JSON.stringify(direcciones));
        insertRowInDirectionsTable(nuevaDireccion);
        return true;
    }
}

function generarId(){
    let ultimoId = localStorage.getItem("listaIdDireccion")|| "-1";
    let nuevoId=JSON.parse(ultimoId)+1;
    localStorage.setItem("listaIdDireccion", JSON.stringify(nuevoId))
    return nuevoId;
}

function eliminarDireccionLocalStorage(idEliminar){
    let ArrayDirecciones=JSON.parse(localStorage.getItem("listaDirecciones"));
    let direccionEliminar=ArrayDirecciones.findIndex(element=>element.id==idEliminar);    
    ArrayDirecciones.splice(direccionEliminar,1);
    let direccionesJSON = JSON.stringify(ArrayDirecciones);
    localStorage.setItem("listaDirecciones",direccionesJSON);
}




//Métodos de pago

const botonAgregarMp = document.querySelector("#btn-agregar-pago");
const bontonCerrarMp = document.querySelector("#cancelar-mp");

const modalMetodosPago = document.querySelector("#agregarMetodosDePago");

let tablaTarjeta = document.querySelector("#tabla-tarjetas")

botonAgregarMp.addEventListener("click", function () { modalMetodosPago.showModal() });
bontonCerrarMp.addEventListener("click", function () { modalMetodosPago.close() })

const guardarMp = document.querySelector(".btn-guardar2");

const formMp = document.querySelector("#formulario-mis-mp");

console.log(formMp);

formMp.addEventListener("submit", (e) => {
    e.preventDefault();
    if (validarMp()) {
        modalMetodosPago.close();
    }
    formMp.reset();
});

let tarjetas = JSON.parse(localStorage.getItem('listaTarjetas')) || [];

document.addEventListener("DOMContentLoaded", function (event) {
    tarjetas.forEach(function (elemento) {
        insertRowInCardsTable(elemento);
    })
})

function insertRowInCardsTable(elemento) {
    let alias = document.createTextNode(elemento.alias);
    let nodoAlias = document.createElement("p");
    let icono = document.createElement("i");
    let datos = document.createElement("div");
    let botonEliminar=document.createElement("button");
    botonEliminar.appendChild(icono);
    icono.classList.add("fa-solid");
    icono.classList.add("fa-trash");
    nodoAlias.appendChild(alias);
    datos.appendChild(nodoAlias);
    datos.appendChild(botonEliminar);
    datos.setAttribute("idFila",elemento["id"]);
    tablaTarjeta.appendChild(datos);
    botonEliminar.addEventListener("click", (event)=>{
        let fila=event.target.parentNode.parentNode;
        let idEliminar= fila.getAttribute("idFila");
        console.log(idEliminar)
        fila.remove();
        eliminarTarjetaLocalStorage(idEliminar);
    });
}


function validarMp() {
    let error = false;
    let mensajesError = '';
    let alias = document.querySelector("#alias2");
    let numeroTarjeta = document.querySelector("#num-tarjeta");
    let codigo = document.querySelector("#codigo");
    let vencimiento = document.querySelector("#vencimiento");
    let nombreTitular = document.querySelector("#nombre-titular");
    var sumaValores = 0;
    var arrayTarjeta = numeroTarjeta.value.toString().split("");
    for (i = 0; i < arrayTarjeta.length - 1; i++) {
        let numero = parseInt(arrayTarjeta[i])
        sumaValores += numero
    }

    if (alias.value == "") {
        error = true;
        mensajesError = "<p>El campo alias es obligatorio</p>";
        document.querySelector("#mensaje6").innerHTML = mensajesError;
    }

    if (numeroTarjeta.value == " ") {
        error = true;
        mensajesError = "<p>El campo numero de tarjeta es obligatorio</p>"
        document.querySelector("#mensaje7").innerHTML = mensajesError;
    } else if (arrayTarjeta.length != 10) {
        error = true;
        mensajesError = " <p>ERROR: cantidad de carácteres invalida.</p>"
        document.querySelector("#mensaje7").innerHTML = mensajesError;
    } else if (((arrayTarjeta[9]) % 2 == 0 && !sumaValores % 2 != 0) || ((arrayTarjeta[9]) % 2 != 0 && sumaValores % 2 != 0)) {
        error = true
        mensajesError += "<p> Número de tarjeta invalido </p>"
        document.querySelector("#mensaje7").innerHTML = mensajesError;
    }


    if (codigo.value == " ") {
        error = true;
        mensajesError = "<p>El campo código es obligatorio</p>"
        document.querySelector("#mensaje8").innerHTML = mensajesError;
    }

    if (vencimiento.value == "") {
        error = true;
        mensajesError = "<p>El campo vencimiento es obligatorio</p>";
        document.querySelector("#mensaje9").innerHTML = mensajesError;
    }

    if (nombreTitular.value == "") {
        error = true;
        mensajesError = "<p>El campo nombre del titular es obligatorio</p>";
        document.querySelector("#mensaje10").innerHTML = mensajesError;
    }

    if (!error) {
        let nuevaTarjeta = {
            id: generarId(),
            alias: alias.value,
            numeroTarjeta: numeroTarjeta.value,
            codigo: codigo.value,
            vencimiento: vencimiento.value,
            nombreTitular: nombreTitular.value,
        }
        console.log(nuevaTarjeta)
        tarjetas.push(nuevaTarjeta);
        localStorage.setItem("listaTarjetas", JSON.stringify(tarjetas));
        insertRowInCardsTable(nuevaTarjeta);
        return true;
    }
}

function generarId(){
    let ultimoId = localStorage.getItem("listaIdTarjeta")|| "-1";
    let nuevoId=JSON.parse(ultimoId)+1;
    localStorage.setItem("listaIdTarjeta", JSON.stringify(nuevoId))
    return nuevoId;
}

function eliminarTarjetaLocalStorage(idEliminar){
    let ArrayTarjetas=JSON.parse(localStorage.getItem("listaTarjetas"));
    let tarjetaEliminar=ArrayTarjetas.findIndex(element=>element.id==idEliminar);    
    ArrayTarjetas.splice(tarjetaEliminar,1);
    let tarjetasJSON = JSON.stringify(ArrayTarjetas);
    localStorage.setItem("listaTarjetas",tarjetasJSON);
}











