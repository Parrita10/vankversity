/*Cree un programa que calcula la suma de los primeros n números naturales*/

// Solicitar el valor de n al usuario
let n = Number(prompt("Ingrese el número hasta el cual calcular la suma de los números naturales:"));

// Verificar si el valor ingresado es válido
if (isNaN(n) || n <= 0) {
  alert("Por favor, ingresa un número natural válido (mayor que 0).");
} else {
  let suma = 0; // Inicializar la variable para la suma

  // Ciclo para calcular la suma de los primeros n números naturales
  for (let i = 1; i <= n; i++) {
    suma += i; // Acumular la suma
  }

  // Mostrar el resultado
  alert("La suma de los primeros " + n + " números naturales es: " + suma);
}
