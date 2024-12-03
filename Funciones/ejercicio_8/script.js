/*Escriba una función llamada obtenerPrimeraLetra() que reciba un nombre y devuelva la primera letra del nombre.*/

// Función para obtener la primera letra de un nombre
function obtenerPrimeraLetra(nombre) {
    return nombre.charAt(0); // Retorna la primera letra del nombre
}

// Pedir al usuario que ingrese un nombre
let nombre = prompt("Ingrese un nombre:");

// Llamar a la función y mostrar el resultado
let primeraLetra = obtenerPrimeraLetra(nombre);
alert(`La primera letra del nombre es: ${primeraLetra}`);
