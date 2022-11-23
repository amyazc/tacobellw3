window.addEventListener("load",function(){
    const modal_mensaje = document.getElementById("mensaje");
    const close= document.getElementById("btn-mensaje");

    let ancho_mensaje = modal_mensaje.offsetWidth;
    let ancho_boton   = close.offsetWidth;
    let posicion_left = (ancho_mensaje - ancho_boton)/2;
    close.style.left = `${posicion_left}px`;

    //Posicionar el mansaje dentro del documento web
    const ancho_pagina  = document.documentElement.scrollWidth;
    posicion_left = (ancho_pagina - ancho_mensaje)/2;
    mensaje.style.left = `${posicion_left}px`;			

    close.addEventListener("click", function(){
        modal_mensaje.classList.remove("show");
    }, true);
},true);


function mostrar_mensaje(titulo, mensaje){
    let modal_mensaje =  document.querySelector("#mensaje");
    let titulo_msg = document.querySelector(".mensaje h2");
    let cuerpo_msg = document.querySelector(".mensaje p");
 
    titulo_msg.innerText = "ERROR EN EL LOGUEO";
    cuerpo_msg.innerText = "TUS CREDENCIALES ESTAN MAL";
    modal_mensaje.classList.add("show");


}