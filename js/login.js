let nombre = "Aldana";
let contra = "Aranda";

function ingresarData() {
    let user = document.querySelector("#usuario").value;
    let clave = document.querySelector("#contrasenia").value;
    let error = document.querySelector(".error");

    let usuario = nombre;
    let password = contra;

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
    let contenedor = document.querySelector("#main");
    
    contenedor.innerHTML =
    "<div id= 'caja'>" +
    "<h3>" + miPerfil[0] + " " + miPerfil[1] + "</h3>" +
        "<div id='info'>" + "</div>" +
        "<img src=" + miPerfil[2] + ">" +
        "<h4>" + miPerfil[3] + "</h4>" +
        "<hr>" +
        "<button id='callback'>" + miPerfil[4] + "</button>" +
        "</div>";
    callback.addEventListener('click', fnAgregarInfo);
}

function fnAgregarInfo() {
    let parrafo = prompt('¿Qué querés agregar?');
    info.innerHTML =
        "<div id= 'box'>" +
        "<p>" + parrafo + "</p>"
        "</div>"
    }
    
    let miPerfil = [
        nombre,
        contra,
        "img/perfil.jpg",
        "Web developer",
        "Agregar descripcion"
    ]

