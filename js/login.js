var nombre = prompt("Ingrese su nombre");
var contra = prompt("Ingrese su apellido");
alert("Gracias, ya puede ingresar");

function ingresarData() {
    var user = document.querySelector("#usuario").value;
    var clave = document.querySelector("#contrasenia").value;
    var error = document.querySelector(".error");

    var usuario = nombre;
    var password = contra;

    if ((user == usuario) && (clave == password)) {
        console.log("Ingresaste correctamente");
        mostrarPerfil();
    } else {
        console.log("Datos incorrectos");
        error.style.display = "block"
        error.innerHTML = "Datos incorrectos";
        alert("El nombre o apellido no coiciden con lo ingresado anteriormente")
    }
}

function mostrarPerfil() {
    var contenedor = document.querySelector("#main");
    
    contenedor.innerHTML =
    "<div id= 'caja'>" +
    "<h3>" + miPerfil[0] + "</h3>" +
        "<div id='info'>" + "</div>" +
        "<img src=" + miPerfil[1] + ">" +
        "<h4>" + miPerfil[2] + "</h4>" +
        "<hr>" +
        "<button id='callback'>" + miPerfil[3] + "</button>" +
        "</div>";
    callback.addEventListener('click', fnAgregarInfo);
}

function fnAgregarInfo() {
    var parrafo = prompt('¿Qué querés agregar?');
    info.innerHTML =
        "<div id= 'box'>" +
        "<p>" + parrafo + "</p>"
        "</div>"
    }
    
    var miPerfil = [
        nombre,
        "img/perfil.jpg",
        "Web developer",
        "Agregar descripcion"
    ]

