/*Usa every para verificar si todos los números en un array son positivos.*/

function sonTodosPositivos(numeros) {
    return numeros.every(num => num > 0);
}

// Ejemplo de uso
const numeros1 = [1, 2, 3, 4, 5];
const numeros2 = [1, -2, 3, 4, 5];

console.log(sonTodosPositivos(numeros1)); // true
console.log(sonTodosPositivos(numeros2)); // false
