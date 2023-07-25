const form = document.querySelector("#formulario");
form.addEventListener("submit",(item)=>{
item.preventDefault();
validar();
});
function validar(){
    let error = false;
    let mensajeError = "";
    const nombre=document.querySelector("#nombre-register");
    if(nombre.value==""){
        error=true;
        mensajesError+="<p>El campo nombre es obligatorio</p>";
    }else{
        form.submit();
    }
}