/*Usa reduce para combinar las palabras de un array en una sola oración.*/

function combinarEnOracion(palabras) {
    return palabras.reduce((oracion, palabra) => `${oracion} ${palabra}`.trim(), "");
}

// Ejemplo de uso
const palabras = ["Hola", "mundo", "esto", "es", "JavaScript"];
const oracion = combinarEnOracion(palabras);

console.log(oracion);
// Salida: "Hola mundo esto es JavaScript"
