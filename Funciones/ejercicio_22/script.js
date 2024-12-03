/*Escriba un programa que calcule si un estudiante aprueba o reprueba con base en tres notas. Usa tres funciones: 
● calcularPromedio(notas): calcula el promedio de las tres notas. ● esAprobado(promedio): 
determina si el estudiante aprueba o no (promedio >= 6). 
● mostrarResultado(aprobado): imprime si el estudiante aprueba o reprueba.*/

// Función para calcular el promedio de tres notas
function calcularPromedio(notas) {
    let suma = notas.reduce((total, nota) => total + nota, 0); // Suma todas las notas
    return suma / notas.length; // Calcula el promedio
}

// Función para determinar si el estudiante aprueba
function esAprobado(promedio) {
    return promedio >= 6; // Retorna true si el promedio es >= 6, de lo contrario false
}

// Función para mostrar el resultado
function mostrarResultado(aprobado) {
    if (aprobado) {
        alert("El estudiante aprueba.");
    } else {
        alert("El estudiante reprueba.");
    }
}

// Solicitar las tres notas al usuario
let notas = [];
for (let i = 1; i <= 3; i++) {
    let nota = parseFloat(prompt(`Ingrese la nota ${i}:`));
    if (nota >= 0 && nota <= 10) {
        notas.push(nota);
    } else {
        alert("Por favor, ingrese una nota válida entre 0 y 10.");
        i--; // Repetir la solicitud para esta nota
    }
}

// Calcular el promedio
let promedio = calcularPromedio(notas);

// Determinar si aprueba
let aprobado = esAprobado(promedio);

// Mostrar el resultado
mostrarResultado(aprobado);
