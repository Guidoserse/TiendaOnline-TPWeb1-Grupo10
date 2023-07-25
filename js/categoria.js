const categorias = [{
    id: "cat-beb",
    nombre: "bebidas"
},
{
    id: "cat-alm",
    nombre: "almacen"
},
{
    id: "cat-cui-hog",
    nombre: "cuidado el hogar"
},
{
    id: "cat-fru-ver",
    nombre: "frutas y verduras"
},
{
    id: "cat-kios",
    nombre: "kiosco"
},
{
    id: "cat-masc",
    nombre: "mascotas"
},
{
    id: "cat-cui-per",
    nombre: "cuidado personal"
},
{
    id: "cat-elec-hog",
    nombre: "electro hogar"
},
{
    id: "cat-perf",
    nombre: "perfumeria"
}
]

const buscador = document.querySelector("#buscador");
const valor = buscador.value;
const resultado=document.querySelector(".resultado");

var mensaje=document.createElement("p");
mensaje.classList.add("mensaje");
var contenido=document.createTextNode("Categoría no encontrada");
mensaje.appendChild(contenido);
resultado.appendChild(mensaje);
resultado.style.display="none";

buscador.addEventListener("keyup", ()=>{buscar()})

function buscar () {
    let cantidadResultados=0;
    categorias.forEach(e=>document.getElementById(e.id).style.display = "none");
    categorias.forEach(e=>{
        if(e.nombre.toLowerCase().indexOf(buscador.value.toLowerCase()) > -1){
            cantidadResultados++;
            document.getElementById(e.id).style.display = "flex";
        } else document.getElementById(e.id).style.display = "none";
    })
    if(cantidadResultados==0){
      resultado.style.display="flex";
    } else resultado.style.display="none"
}
   

