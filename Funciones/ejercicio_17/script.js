/*Escriba una función la cual reciba como parámetro 2 números enteros y 1 cadena, La idea es que los números
recibidos se puedan operar según la operación que hallamos recibido en la cadena, ejemplo miFuncion(2, 5, ”suma”).*/

// Función para operar dos números según la operación especificada
function miFuncion(num1, num2, operacion) {
    let resultado;

    // Determinar la operación a realizar
    switch (operacion.toLowerCase()) {
        case "suma":
            resultado = num1 + num2;
            break;
        case "resta":
            resultado = num1 - num2;
            break;
        case "multiplicacion":
            resultado = num1 * num2;
            break;
        case "division":
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                return "Error: No se puede dividir entre cero.";
            }
            break;
        default:
            return "Operación no válida. Las operaciones disponibles son: suma, resta, multiplicacion, division.";
    }

    return `El resultado de la ${operacion} es: ${resultado}`;
}

// Solicitar datos al usuario
let num1 = parseInt(prompt("Ingrese el primer número entero:"));
let num2 = parseInt(prompt("Ingrese el segundo número entero:"));
let operacion = prompt("Ingrese la operación a realizar (suma, resta, multiplicacion, division):");

// Llamar a la función y mostrar el resultado
let mensaje = miFuncion(num1, num2, operacion);
alert(mensaje);
