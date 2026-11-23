alert("Hola, bienvenido al generador de direcciones IP. Por favor, ingresa los datos solicitados para generar la dirección IP, la máscara de subred, la dirección de red, la puerta de enlace y la dirección de broadcast.");

function mostrarDireccionRed() {
    document.getElementById("ip").textContent = "192.168.1.0";


}


function mostrarPuertaEnlace(){
    document.getElementById("ip").textContent = "192.168.1.1";


}


function generarIP() {

    let numero_aleatorio;

    numero_aleatorio = Math.random();
    numero_aleatorio = numero_aleatorio * 253;
    numero_aleatorio = Math.floor(numero_aleatorio);
    numero_aleatorio = numero_aleatorio + 2;

    document.getElementById("ip").textContent = "192.168.1." + numero_aleatorio;


}

function mostrarBroadcast(){
    document.getElementById("ip").textContent = "192.168.1.255";


}
function MostrarMascara() {
    document.getElementById("ip").textContent = "255.255.255.0";
}


