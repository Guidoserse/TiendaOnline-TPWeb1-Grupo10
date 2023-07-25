const usuario = document.querySelector("#usuario");
const contraseñaLogin =document.querySelector("#contraseña");

usuario.addEventListener("keyup",(item)=>{
    cambiarStilo();
});
function cambiarStilo(){
    const login = document.getElementById("login-boton");
    if(usuario.value.length!=0&&contraseñaLogin.value.length>0){
    login.style.backgroundColor = "#04D99D";
}  
    contraseñaLogin.addEventListener("keyup",(item)=>{
        cambiarStilo();
    });
    function cambiarStilo(){
        const login = document.getElementById("login-boton");
        if(usuario.value.length!=0&&contraseñaLogin.value.length>0){
        login.style.backgroundColor = "#04D99D";
    }
        }
    }
const form = document.querySelector("#login");
form.addEventListener("submit",(item)=>{
    item.preventDefault();
    agregarUsuarioLocalStorage();

});
function agregarUsuarioLocalStorage(){
    let nombreUsuario = document.querySelector("#usuario").value;
    let contraseñaUsuario = document.querySelector("#contraseña").value;
    let usuarioNuevo = {
        usuario : nombreUsuario,
        contraseña: contraseñaUsuario
    };
    localStorage.setItem("usuarioNuevo",JSON.stringify(usuarioNuevo));
    form.submit();
}
