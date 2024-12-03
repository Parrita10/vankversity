/*Escriba una función la cual reciba una cadena como parámetro y ésta retorne la misma cadena pero sin sus vocales.*/

// Función para eliminar las vocales de una cadena
function eliminarVocales(cadena) {
    const vocales = "aeiouAEIOU"; // Lista de vocales (minúsculas y mayúsculas)
    let resultado = ""; // Cadena sin vocales

    // Recorrer la cadena y construir una nueva sin las vocales
    for (let caracter of cadena) {
        if (!vocales.includes(caracter)) {
            resultado += caracter; // Agregar solo los caracteres que no son vocales
        }
    }

    return resultado; // Retornar la cadena sin vocales
}

// Pedir al usuario que ingrese una cadena
let cadena = prompt("Ingrese una cadena:");

// Llamar a la función y mostrar el resultado
let cadenaSinVocales = eliminarVocales(cadena);
alert(`La cadena sin vocales es: ${cadenaSinVocales}`);
