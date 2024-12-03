/*Escriba una función la cual reciba una cadena como parámetro y retorne la cantidad de vocales que contiene la cadena.*/

// Función para contar las vocales en una cadena
function contarVocales(cadena) {
    let contador = 0; // Inicializar el contador
    const vocales = "aeiouAEIOU"; // Lista de vocales (minúsculas y mayúsculas)

    // Recorrer la cadena para verificar cada carácter
    for (let caracter of cadena) {
        if (vocales.includes(caracter)) {
            contador++; // Incrementar el contador si es una vocal
        }
    }

    return contador; // Retornar el número total de vocales
}

// Pedir al usuario que ingrese una cadena
let cadena = prompt("Ingrese una cadena:");

// Llamar a la función y mostrar el resultado
let cantidadVocales = contarVocales(cadena);
alert(`La cantidad de vocales en la cadena es: ${cantidadVocales}`);
