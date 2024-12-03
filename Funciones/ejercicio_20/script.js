/*Escriba un programa que calcule el área y el perímetro de un rectángulo. Usa dos funciones: 
● calcularArea(largo, ancho): calcula el área del rectángulo. 
● calcularPerimetro(largo, ancho): calcula el perímetro.*/

// Función para calcular el área del rectángulo
function calcularArea(largo, ancho) {
    return largo * ancho;
}

// Función para calcular el perímetro del rectángulo
function calcularPerimetro(largo, ancho) {
    return 2 * (largo + ancho);
}

// Solicitar los valores de largo y ancho al usuario
let largo = parseFloat(prompt("Ingrese el largo del rectángulo:"));
let ancho = parseFloat(prompt("Ingrese el ancho del rectángulo:"));

// Validar que los valores sean positivos
if (largo > 0 && ancho > 0) {
    // Calcular el área y el perímetro
    let area = calcularArea(largo, ancho);
    let perimetro = calcularPerimetro(largo, ancho);

    // Mostrar los resultados
    alert(`El área del rectángulo es: ${area.toFixed(2)}`);
    alert(`El perímetro del rectángulo es: ${perimetro.toFixed(2)}`);
} else {
    alert("Por favor, ingrese valores positivos para el largo y el ancho.");
}
