/*Cree un programa que muestre los números impares entre 1 y n.*/

// Solicitar el valor de n al usuario
let n = Number(prompt("Ingrese un número hasta el cual mostrar los números impares:"));

// Verificar si el valor ingresado es válido
if (isNaN(n) || n <= 0) {
  alert("Por favor, ingresa un número natural válido (mayor que 0).");
} else {
  let resultado = ""; // Cadena para almacenar los números impares

  // Ciclo para encontrar e imprimir números impares
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) { // Verificar si el número es impar
      resultado += i + " "; // Agregar el número a la cadena
    }
  }

  // Mostrar los números impares
  alert("Los números impares entre 1 y " + n + " son:\n" + resultado);
}

