/*Escriba un programa que genere una contraseña segura a partir de una palabra base y una serie de reglas. Usa dos funciones: 
● generarContraseña(palabraBase): genera una contraseña agregando números y caracteres especiales. 
● imprimirContraseña(contraseña): muestra la contraseña generada.*/

// Función para generar una contraseña segura a partir de una palabra base
function generarContraseña(palabraBase) {
    // Reglas para transformar la palabra base
    let contraseña = palabraBase
        .replace(/a/gi, "@")
        .replace(/e/gi, "3")
        .replace(/i/gi, "1")
        .replace(/o/gi, "0")
        .replace(/s/gi, "$");

    // Agregar números y caracteres especiales al final
    contraseña += Math.floor(Math.random() * 1000); // Número aleatorio entre 0 y 999
    contraseña += "!*#";

    return contraseña;
}

// Función para imprimir la contraseña generada
function imprimirContraseña(contraseña) {
    alert(`Tu contraseña segura es: ${contraseña}`);
}

// Solicitar al usuario una palabra base
let palabraBase = prompt("Ingrese una palabra base para generar una contraseña segura:");

// Generar la contraseña segura
let contraseña = generarContraseña(palabraBase);

// Mostrar la contraseña generada
imprimirContraseña(contraseña);
