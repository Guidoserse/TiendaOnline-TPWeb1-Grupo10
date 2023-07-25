let condicionMayuscula=/^[A-Z]{1}[0-9a-zA-Z._.-]+$/;
const numeros = /(?:\d)/
const form = document.querySelector("#formulario");
form.addEventListener("submit",(item)=>{
item.preventDefault();
validar();
});

function validar(){
    let error = false;
    let mensajeError ='';
    const pass = document.querySelector("#password");
    const passValor = document.querySelector("#password").value;
    const passrepetido=document.querySelector("#repetir").value;
    if(pass.value.length<7){
        error=true;
        mensajeError+="<p>ERROR: Mínimo 8 caracteres</p>";
    }
    if(!condicionMayuscula.test(passValor)){
        error=true;
        mensajeError+="<p>ERROR: El primer caracter tiene que empezar con Mayúscula</p>";
    }
    if(!numeros.test(passValor)){
        error=true;
        mensajeError+="<p>ERROR: Debe contener al menos un número</p>";
    }
    if(passValor!=passrepetido){
        error=true;
        mensajeError+="<p>ERROR: Las contraseñas no coinciden</p>";
    }
    if(error){
        document.querySelector("#mensaje").innerHTML=mensajeError;
    }else{
        // let nombreUsuario = document.querySelector("#nombre-register").value;
        // let contraseñaUsuario = document.querySelector("#repetir").value;
        // let usuarioNuevo = {
        //     usuario : nombreUsuario,
        //     contraseña: contraseñaUsuario
        // };
        // localStorage.setItem("usuarioNuevo",JSON.stringify(usuarioNuevo));
        form.submit();
    }
}


    
