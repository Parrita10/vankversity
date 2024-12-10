/*Usa map para duplicar los números de un array y luego filter para obtener solo los
mayores de 10.*/

function procesarNumeros(numeros) {
    return numeros
        .map(num => num * 2) // Duplicar los números
        .filter(num => num > 10); // Filtrar los mayores de 10
}

// Ejemplo de uso
const numeros = [3, 5, 7, 10, 2];
const resultado = procesarNumeros(numeros);

console.log(resultado);
// Salida: [14, 20]
