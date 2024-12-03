/*Escriba una función la cual reciba 5 notas de un estudiante y genere un mensaje informando si el estudiante aprobó o no la materia, para que la materia se de como aprobada
 el promedio del estudiante debe ser mayor o igual a 3,0.*/

 // Función para evaluar si un estudiante aprobó o no
function evaluarNotas(nota1, nota2, nota3, nota4, nota5) {
    // Calcular el promedio
    let promedio = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;

    // Determinar si el promedio es mayor o igual a 3.0
    if (promedio >= 3.0) {
        return `El estudiante aprobó con un promedio de ${promedio.toFixed(2)}.`;
    } else {
        return `El estudiante no aprobó. Su promedio fue de ${promedio.toFixed(2)}.`;
    }
}

// Pedir al usuario las 5 notas del estudiante
let nota1 = parseFloat(prompt("Ingrese la primera nota:"));
let nota2 = parseFloat(prompt("Ingrese la segunda nota:"));
let nota3 = parseFloat(prompt("Ingrese la tercera nota:"));
let nota4 = parseFloat(prompt("Ingrese la cuarta nota:"));
let nota5 = parseFloat(prompt("Ingrese la quinta nota:"));

// Llamar a la función y mostrar el mensaje
let mensaje = evaluarNotas(nota1, nota2, nota3, nota4, nota5);
alert(mensaje);
