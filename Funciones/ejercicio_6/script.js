/*Escriba una función con el nombre de esVocal() que tome un carácter ,
 devuelva True si es vocal (no importa si es mayúscula o minúscula), y devuelva False en caso contrario.*/

 // Función para verificar si un carácter es una vocal
function esVocal(caracter) {
    // Convertir el carácter a minúscula para simplificar la comparación
    caracter = caracter.toLowerCase();

    // Lista de vocales
    const vocales = ['a', 'e', 'i', 'o', 'u'];

    // Verificar si el carácter está en la lista de vocales
    return vocales.includes(caracter);
}

// Pedir al usuario que ingrese un carácter
let caracter = prompt("Ingrese un carácter:");

// Validar que el usuario ingresó un solo carácter
if (caracter.length === 1) {
    // Llamar a la función esVocal y mostrar el resultado
    let resultado = esVocal(caracter);
    alert(`¿Es "${caracter}" una vocal? ${resultado}`);
} else {
    alert("Por favor, ingrese un solo carácter.");
}
