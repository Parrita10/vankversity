/*Usa reduce para aplanar un array de arrays en uno solo nivel.
const arrays = [[1, 2], [3, 4], [5, 6]];
console.log(plano); // [1, 2, 3, 4, 5, 6]*/

function aplanarArray(arrays) {
    return arrays.reduce((acumulador, array) => acumulador.concat(array), []);
}

// Ejemplo de uso
const arrays = [[1, 2], [3, 4], [5, 6]];
const plano = aplanarArray(arrays);

console.log(plano);
// Salida: [1, 2, 3, 4, 5, 6]
