/*Dado un array de nombres, conviértelos a mayúsculas y ordénalos alfabéticamente.*/

function procesarNombres(nombres) {
    return nombres
        .map(nombre => nombre.toUpperCase()) // Convertir a mayúsculas
        .sort(); // Ordenar alfabéticamente
}

// Ejemplo de uso
const nombres = ["ana", "Carlos", "beatriz", "david"];
const nombresProcesados = procesarNombres(nombres);

console.log(nombresProcesados);
// Salida: ["ANA", "BEATRIZ", "CARLOS", "DAVID"]
