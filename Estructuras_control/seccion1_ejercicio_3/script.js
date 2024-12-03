/*Cree un programa que reciba dos números y muestre el mayor. En caso de que los números sean iguales
también se debe mostrar al usuario.*/

// Solicitar los dos números al usuario
let numero1 = prompt("Ingrese el primer número:");
let numero2 = prompt("Ingrese el segundo número:");

// Convertir los valores ingresados a números
numero1 = Number(numero1);
numero2 = Number(numero2);

// Verificar si los valores son números válidos
if (isNaN(numero1) || isNaN(numero2)) {
  alert("Por favor, ingresa números válidos.");
} else {
  // Comparar los números
  if (numero1 > numero2) {
    alert("El primer número (" + numero1 + ") es mayor que el segundo número (" + numero2 + ").");
  } else if (numero2 > numero1) {
    alert("El segundo número (" + numero2 + ") es mayor que el primer número (" + numero1 + ").");
  } else {
    alert("Ambos números son iguales (" + numero1 + ").");
  }
}
