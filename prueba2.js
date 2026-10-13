
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
function ejercicio2() {
    window.alert(window.innerWidth + " x " + window.innerHeight);
}


//Ejercicio 3. Navegación
function ejercicio3a_Volver() {
    window.history.back();
}
function ejercicio3b_Recargar() {
    window.location.reload();
}


//Ejercicio 4. Temporizador
let cont = 30;
let temporizador = null;

function act_contador() {
    document.getElementById("temporizador").textContent = cont;
}

function ejercicio4a_Iniciar() {
    if (temporizador !== null) return;

    cont = 30;
    act_contador();

    temporizador = setInterval(() => {
        if (cont > 0) {
            cont--;
            console.log(cont);
            act_contador();
        } else {
            clearInterval(temporizador);
            temporizador = null;
            window.alert("Fin");
        }
    }, 1000);
}

function ejercicio4b_Detener() {
    clearInterval(temporizador);
    temporizador = null;
    cont = 30;
    act_contador();
}


//Ejercicio 5. Ventana emergente
function ejercicio5a_Abrir() {
    window.open("https://google.com");
}
function ejercicio5b_Cerrar() {
    window.close();
}


//Ejercicio 6. Confirmación y entrada de datos
function ejercicio6(){
    let pregunta = window.confirm("¿Deseas cambiar el color de fondo?");
    if (pregunta) {
        // 
    } else {
        // 
    }
}




//Ejercicio 7. Información mediante cuadros de diálogo
function ejercicio7(){
    let nombre = window.prompt("Introduce tu nombre");
    if (nombre) {
        alert("Bienvenido " + nombre);
    } else {
        alert("No has introducido ningun nombre");
    }
}


//Ejercicio 8. Control del tamaño de la ventana
function ejercicio8(){
    let ancho = window.innerWidth;
    if (ancho < 768) {
        alert("Ventana pequeña, el ancho actual es: " + ancho)
    } else {
        alert("Ventana grande, el ancho actual es: " + ancho);
    }
}