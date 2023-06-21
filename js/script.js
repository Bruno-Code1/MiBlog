let menuVisible = false;

// Función que oculta o muestra el menu
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList="";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

 // Oculto el menu una vez que selecciono una opcion
function seleccionar() {
    document.getElementById("nav").classList="";
    menuVisible = false;
}

//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades() {
    var habilidades = document.getElementById("habilidades");
    var distancia_habilidades = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_habilidades >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("JavaScript");
        habilidades[1].classList.add("HTMLCSS");
        habilidades[2].classList.add("Python");
        habilidades[3].classList.add("Creatividad");
        habilidades[4].classList.add("Comunicación");
        habilidades[5].classList.add("Trabajo");
        habilidades[6].classList.add("Dedicación");
    }
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function() {
    efectoHabilidades();
}