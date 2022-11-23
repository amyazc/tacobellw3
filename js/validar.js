
//Ver si existen los Datos del Json Tipo_Usuarios
var Array_Tipo_Usuario;
let url="Tipos_Usuarios.json";

fetch(url)
.then(respuesta => respuesta.json())
.then(data => {
    Array_Tipo_Usuario = data;
})
.catch(error => alert("No se pudo Cargar los datos de Tipos_Usuario"));


//Ver si existen los Datos del Json Usuarios
var Array_Usuarios;
url="json/usuarios.json";
fetch(url)
.then(respuesta => respuesta.json())
.then(data => {
    Array_Usuarios = data;
})
.catch(error => alert("No se pudo Cargar los datos de Usuarios"));


window.addEventListener("load",function(){
    var ingresar = document.getElementById("acceder");
    ingresar.addEventListener("click",function(){
        var usuario_obj = document.getElementById("name");
        var usuario = usuario_obj.value;
        var psw_obj     = document.getElementById("password");
        var psw = psw_obj.value;

        console.log("uno"+usuario);

        const Validar = Array_Usuarios.filter(usu => usu.Correo==usuario && usu.Contresenia==psw);

        if(Validar.length >= 1){
            res_obj = Validar[0];
            let rol_usu = res_obj.rol;
            let estatus_usu = res_obj.Estado;
            if(estatus_usu == 'Activo'){
                const r_arreglo = Array_Tipo_Usuario.filter(t_u => t_u.Rol_Id==rol_usu);
                if(r_arreglo.length >=1){
                    r_obj = r_arreglo[0];
                    let path = r_obj.Ref;
                    window.location.href = path;
                    alert("Inicio de sesion correcto");
                    
                }
            }else{
                let titulo = "Usuario Inactivo";
                let mensaje = "En estado inactivo los usuarios no pueden ingresar al aeropuerto";
                mostrar_mensaje(titulo, mensaje)
            }
        }else{
            let titulo = "Error al loguearse";
            let mensaje = "Datos Erroneos";
            mostrar_mensaje(titulo, mensaje);
         }
    },true);

},true)
