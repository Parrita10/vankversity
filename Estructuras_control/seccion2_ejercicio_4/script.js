/*Cree un programa que calcule el promedio de tres notas para n estudiantes. Use ciclo for. Use
funciones.*/

// Función para calcular el promedio de tres notas
function calcularPromedio(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
  }
  
  // Solicitar el número de estudiantes
  let numEstudiantes = Number(prompt("Ingrese el número de estudiantes:"));
  
  // Verificar si el número ingresado es válido
  if (isNaN(numEstudiantes) || numEstudiantes <= 0) {
    alert("Por favor, ingresa un número válido de estudiantes.");
  } else {
    // Ciclo para procesar las notas de cada estudiante
    for (let i = 1; i <= numEstudiantes; i++) {
      alert("Estudiante " + i);
      
      // Solicitar las tres notas del estudiante
      let nota1 = Number(prompt("Ingrese la primera nota del estudiante " + i + ":"));
      let nota2 = Number(prompt("Ingrese la segunda nota del estudiante " + i + ":"));
      let nota3 = Number(prompt("Ingrese la tercera nota del estudiante " + i + ":"));
  
      // Verificar si las notas son válidas
      if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        alert("Por favor, ingresa notas válidas para el estudiante " + i + ".");
      } else {
        // Calcular el promedio usando la función
        let promedio = calcularPromedio(nota1, nota2, nota3);
  
        // Mostrar el promedio
        alert("El promedio del estudiante " + i + " es: " + promedio.toFixed(2));
      }
    }
  }
  