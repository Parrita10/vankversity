/*Escriba una función que tenga una cadena de ADN como parámetro y retorne un string con el número de bases en ella, 
por ejemplo, si la cadena es “AACAGT” entonces debe retornar “Cantidad de A: 3, Cantidad de C: 1, Cantidad de G: 1, Cantidad de T: 1”*/

// Función para contar las bases en una cadena de ADN
function contarBasesADN(cadenaADN) {
    // Inicializar contadores para cada base
    let cantidadA = 0;
    let cantidadC = 0;
    let cantidadG = 0;
    let cantidadT = 0;

    // Recorrer la cadena y contar cada base
    for (let base of cadenaADN) {
        switch (base.toUpperCase()) {
            case "A":
                cantidadA++;
                break;
            case "C":
                cantidadC++;
                break;
            case "G":
                cantidadG++;
                break;
            case "T":
                cantidadT++;
                break;
            default:
                // Manejar caso de caracteres no válidos en la cadena
                return "Error: La cadena contiene caracteres no válidos.";
        }
    }

    // Construir el resultado con las cantidades de cada base
    return `Cantidad de A: ${cantidadA}, Cantidad de C: ${cantidadC}, Cantidad de G: ${cantidadG}, Cantidad de T: ${cantidadT}`;
}

// Solicitar al usuario que ingrese una cadena de ADN
let cadenaADN = prompt("Ingrese una cadena de ADN (compuesta por A, C, G, T):");

// Llamar a la función y mostrar el resultado
let mensaje = contarBasesADN(cadenaADN);
alert(mensaje);
