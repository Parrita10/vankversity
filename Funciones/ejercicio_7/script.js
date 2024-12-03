/*Escriba una función la cual reciba como parámetro una cadena y genere como retorno
la misma cadena pero con todos su contenido en mayúscula.*/

// Función para convertir una cadena a mayúsculas
function convertirAMayusculas(cadena) {
    return cadena.toUpperCase(); // Convierte la cadena a mayúsculas
}

// Pedir al usuario que ingrese una cadena
let cadena = prompt("Ingrese una cadena:");

// Llamar a la función y mostrar el resultado
let resultado = convertirAMayusculas(cadena);
alert(`La cadena en mayúsculas es: ${resultado}`);
