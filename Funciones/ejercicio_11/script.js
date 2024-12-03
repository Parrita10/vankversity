/*Escriba una función que al llamarla retorne un número entero aleatorio entre 1 y 20.*/

// Función para generar un número entero aleatorio entre 1 y 20
function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 20) + 1;
}

// Llamar a la función y mostrar el resultado
let numeroAleatorio = generarNumeroAleatorio();
alert(`El número aleatorio generado es: ${numeroAleatorio}`);
