const iconoLogin=document.querySelector(".lbl-modal-login");
const miCuenta=document.querySelector(".mi-cuenta");

const usuarioNuevo=JSON.parse(localStorage.getItem('usuarioNuevo'));

document.addEventListener("DOMContentLoaded", ()=> {
    miCuenta.classList.add("filtro");
    if(usuarioNuevo!=null){
        iconoLogin.classList.add("filtro");
        miCuenta.classList.remove("filtro");
    }
})


