/*Escriba una función que reciba un número entero y dicha función pueda determinar si el número enviado es positivo o negativo.*/

// Función para determinar si un número es positivo o negativo
function determinarSigno(numero) {
    if (numero > 0) {
        return `El número ${numero} es positivo.`;
    } else if (numero < 0) {
        return `El número ${numero} es negativo.`;
    } else {
        return `El número es cero (ni positivo ni negativo).`;
    }
}

// Pedir al usuario que ingrese un número entero
let numero = parseInt(prompt("Ingrese un número entero:"));

// Llamar a la función y mostrar el resultado
let mensaje = determinarSigno(numero);
alert(mensaje);
