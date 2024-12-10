/*Usa map para convertir todas las cadenas en un array a mayúsculas.
console.log(convertirAMayusculas(["hola", "mundo"])); // ["HOLA", "MUNDO"]*/

function convertirAMayusculas(cadenas) {
    return cadenas.map(cadena => cadena.toUpperCase());
}

// Ejemplo de uso
console.log(convertirAMayusculas(["hola", "mundo"])); 
// Salida: ["HOLA", "MUNDO"]
