/*Usa reduce para contar cuántas veces aparece cada palabra en un array y devolver
un objeto con las frecuencias.
const palabras = ["hola", "mundo", "hola", "javascript", "mundo", "hola"];
console.log(contarPalabras(palabras)); // { hola: 3, mundo: 2, javascript: 1 }*/

function contarPalabras(palabras) {
    return palabras.reduce((contador, palabra) => {
        contador[palabra] = (contador[palabra] || 0) + 1;
        return contador;
    }, {}); // Inicializa el acumulador como un objeto vacío
}

// Ejemplo de uso
const palabras = ["hola", "mundo", "hola", "javascript", "mundo", "hola"];
const frecuencias = contarPalabras(palabras);

console.log(frecuencias);
// Salida: { hola: 3, mundo: 2, javascript: 1 }
