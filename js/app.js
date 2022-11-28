const chatButton = document.querySelector('.chatbox__button');
const chatContent = document.querySelector('.chatbox__support');
const icons = {
    isClicked: '<span id="boot-icon" class="bi bi-chat-square-dots-fill" style="font-size: 35px; color: #e84393;"></span>',
    isNotClicked: '<span id="boot-icon" class="bi bi-chat-square-dots-fill" style="font-size: 35px; color: #e84393;"></span>'
}
const chatbox = new InteractiveChatbox(chatButton, chatContent, icons);
chatbox.display();
chatbox.toggleIcon(false, chatButton);




const carrito = document.getElementById('carrito');
const productos = document.getElementById('lista-productos');
const listaProductos = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

cargarEventListeners();

function cargarEventListeners(){
    productos.addEventListener('click', comprarProducto);

    carrito.addEventListener('click', eliminarProducto);

    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

    document.addEventListener('DOMContentLoaded', leerLocalStorage);
}

function comprarProducto(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const producto = e.target.parentElement.parentElement;
        leerDatosProductos(producto);
    }

    function leerDatosProductos(producto){
        const infoProducto = {
            imagen: producto.querySelector('img').src,
            titulo: producto.querySelector('h4').textContent,
            precio: producto.querySelector('.precio span').textContent,
            id: producto.querySelector('a').getAttribute('data-id')
        }

insertarCarrito(infoProducto);

    }

function insertarCarrito(producto){
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>
    <img src = "${producto.imagen}" width=100>
    </td>
    <td>${producto.titulo}</td>
    <td>${producto.precio}</td>
    <td>
   <a href="a" class="borrar-producto" data.id="${producto.id}">X</a> 
    </td>
    `;
    listaProductos.appendChild(row);
    guardarProductoLocalStorage(producto);
}

function eliminarProducto(e){
    e.preventDefault();

    let producto,
    productoId;

    if (e.target.classList.contains('borrar-producto')) {
        e.target.parentElement.parentElement.remove();
        producto = e.target.parentElement.parentElement();
        producto = producto.querySelector('a').getAttribute('data-id');
    }

    eliminarProductoLocalStorage(productoId)
}

function vaciarCarrito(){
    while (listaProductos.firstChild) {
        listaProductos.removeChild(listaProductos.firstChild);
    }

    vaciarLocalStorage();
    return false;
}

function guardarProductoLocalStorage(producto){
    let productos;

    productos = obtenerProductosLocalStorage();

    productos.push(producto);

    localStorage.setItem('productos',JSON.stringify(productos));
}

function obtenerProductosLocalStorage(){
    let productosLS;

    if (localStorage.getItem('productos')===null) {
        productosLS = [];
    }else{
        productosLS = JSON.parse(localStorage.getItem('productos'));
    }
    return productosLS;
}

function leerLocalStorage(){
    let productosLS;

    productosLS = obtenerProductosLocalStorage();

    productosLS.forEach(function(producto){
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>
    <img src = "${producto.imagen}" width=100>
    </td>
    <td>${producto.titulo}</td>
    <td>${producto.precio}</td>
    <td>
   <a href="a" class="borrar-producto" data.id="${producto.id}">X</a> 
    </td>
        `;
        listaProductos.appendChild(row);
    });
}

function eliminarProductoLocalStorage(producto){
    let productosLS;
    productosLS = obtenerProductosLocalStorage();

    producto.forEach(function(productosLS, index) {
        if (productoLS.id === producto) {
         productosLS.splice(index, 1);   
        }
    });
    
}



}