/*Cree un programa que muestre los números naturales de 1 a n. Use ciclo while.*/

// Solicitar el valor de n al usuario
let n = Number(prompt("Ingrese el número hasta el cual mostrar los números naturales:"));

// Verificar si el valor ingresado es válido
if (isNaN(n) || n <= 0) {
  alert("Por favor, ingresa un número natural válido (mayor que 0).");
} else {
  let i = 1; // Inicializar el contador

  // Ciclo while para mostrar los números del 1 a n
  while (i <= n) {
    console.log(i); // Mostrar el número actual en la consola
    i++; // Incrementar el contador
  }
  
  alert("Los números del 1 al " + n + " se han mostrado en la consola.");
}
