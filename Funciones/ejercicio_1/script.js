/*Escriba una función que tenga cómo parámetros la base y altura de un rectángulo y retorne su área.*/

// Función para calcular el área de un rectángulo
function calcularAreaRectangulo(base, altura) {
    return base * altura;
}

// Pedir los valores de base y altura al usuario
let base = parseFloat(prompt("Ingrese la base del rectángulo:"));
let altura = parseFloat(prompt("Ingrese la altura del rectángulo:"));

// Calcular el área
let area = calcularAreaRectangulo(base, altura);

// Mostrar el resultado en una alerta
alert(`El área del rectángulo es: ${area}`);
