/*Escriba un programa que verifique si un número es primo utilizando dos funciones: 
● esPrimo(numero): determina si un número es primo. 
● imprimirResultado(numero): imprime si el número es primo o no, llamando a la función esPrimo.*/

// Función para determinar si un número es primo
function esPrimo(numero) {
    if (numero <= 1) return false; // Los números menores o iguales a 1 no son primos
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false; // Si es divisible por otro número, no es primo
        }
    }
    return true; // Si no tiene divisores, es primo
}

// Función para imprimir el resultado
function imprimirResultado(numero) {
    if (esPrimo(numero)) {
        alert(`El número ${numero} es primo.`);
    } else {
        alert(`El número ${numero} no es primo.`);
    }
}

// Solicitar al usuario un número entero
let numero = parseInt(prompt("Ingrese un número entero para verificar si es primo:"));

// Validar que el usuario ingresó un número válido
if (!isNaN(numero)) {
    imprimirResultado(numero);
} else {
    alert("Por favor, ingrese un número entero válido.");
}
