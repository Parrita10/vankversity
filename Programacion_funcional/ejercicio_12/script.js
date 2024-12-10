/*Usa reduce para agrupar palabras en un objeto según su longitud.
const palabras = ["hola", "adiós", "sol", "estrella"];
console.log(agrupado); // {4: ["hola", "sol"], 5: ["adiós"], 8: ["estrella"]}*/

function agruparPorLongitud(palabras) {
    return palabras.reduce((acumulador, palabra) => {
        const longitud = palabra.length;
        if (!acumulador[longitud]) {
            acumulador[longitud] = []; // Inicializa el array si no existe
        }
        acumulador[longitud].push(palabra); // Agrega la palabra al array correspondiente
        return acumulador;
    }, {}); // El acumulador comienza como un objeto vacío
}

// Ejemplo de uso
const palabras = ["hola", "adiós", "sol", "estrella"];
const agrupado = agruparPorLongitud(palabras);

console.log(agrupado);
// Salida: {4: ["hola", "sol"], 5: ["adiós"], 8: ["estrella"]}
