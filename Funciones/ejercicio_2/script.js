/*Escriba una función que reciba el lado de un cubo y retorne su volumen.*/

// Función para calcular el volumen de un cubo
function calcularVolumenCubo(lado) {
    return lado ** 3; 
}

// Pedir el valor del lado al usuario
let lado = parseFloat(prompt("Ingrese el lado del cubo:"));

// Calcular el volumen
let volumen = calcularVolumenCubo(lado);

// Mostrar el resultado en una alerta
alert(`El volumen del cubo es: ${volumen}`);
