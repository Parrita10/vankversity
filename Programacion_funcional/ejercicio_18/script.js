/*Usa reduce para agrupar un arreglo de números en un objeto con las claves pares e
impares, donde cada clave contiene un arreglo con los números correspondientes.
Ejemplo: { pares: [2, 4, 6, 8], impares: [1, 3, 5, 7] }*/

function agruparParesImpares(numeros) {
    return numeros.reduce((acumulador, numero) => {
        if (numero % 2 === 0) {
            acumulador.pares.push(numero); // Si es par, agrégalo al array de pares
        } else {
            acumulador.impares.push(numero); // Si es impar, agrégalo al array de impares
        }
        return acumulador;
    }, { pares: [], impares: [] }); // Inicializa el acumulador con dos arrays vacíos
}

// Ejemplo de uso
const numeros = [1, 2, 3, 4, 5, 6, 7, 8];
const agrupados = agruparParesImpares(numeros);

console.log(agrupados);
// Salida: { pares: [2, 4, 6, 8], impares: [1, 3, 5, 7] }
