
//Ejercicio l. Información del navegador
const url = window.location;
document.getElementById("url").textContent = url;

const nombre_nav = window.navigator.userAgent;
document.getElementById("info").textContent = nombre_nav;

const dimensiones_pantalla = window.screen.width + " x " + window.screen.height;
document.getElementById("tam").textContent = dimensiones_pantalla;

const idioma = window.navigator.language;
document.getElementById("idioma").textContent = idioma;


//Ejercicio 2. Ventana y dimensiones







// document.getElementById("info").textContent = "variable o lo que sea";

// window.innerHeight
// window.screen.width