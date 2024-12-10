/*Usa reduce para eliminar duplicados de un array
const numeros = [1, 2, 2, 3, 4, 4, 5];*/

function eliminarDuplicados(array) {
    return array.reduce((unicos, numero) => {
        if (!unicos.includes(numero)) {
            unicos.push(numero); // Agrega el número si no está en el array único
        }
        return unicos;
    }, []); // Inicializa el acumulador como un array vacío
}

// Ejemplo de uso
const numeros = [1, 2, 2, 3, 4, 4, 5];
const sinDuplicados = eliminarDuplicados(numeros);

console.log(sinDuplicados);
// Salida: [1, 2, 3, 4, 5]
