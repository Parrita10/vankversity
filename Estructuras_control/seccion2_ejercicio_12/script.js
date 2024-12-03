/*Cree un programa que calcule la suma de los cuadrados de los números entre 1 y n.*/

// Solicitar al usuario el valor de n
let n = Number(prompt("Ingrese un número n para calcular la suma de los cuadrados de los números entre 1 y n:"));

// Verificar si el valor ingresado es válido
if (isNaN(n) || n <= 0) {
  alert("Por favor, ingresa un número natural válido (mayor que 0).");
} else {
  let sumaCuadrados = 0; // Variable para almacenar la suma de los cuadrados

  // Ciclo para calcular la suma de los cuadrados
  for (let i = 1; i <= n; i++) {
    sumaCuadrados += i * i; // Sumar el cuadrado de i
  }

  // Mostrar el resultado
  alert("La suma de los cuadrados de los números entre 1 y " + n + " es: " + sumaCuadrados);
}
