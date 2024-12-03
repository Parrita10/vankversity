/*Cree un programa que lea la edad de un usuario e imprima un mensaje que diga si el usuario es mayor de
edad o no.*/

// Solicitar la edad al usuario
let edad = prompt("Por favor, ingresa tu edad:");

// Convertir la edad a un número
edad = Number(edad);

// Verificar si la edad es válida
if (isNaN(edad) || edad <= 0) {
  alert("Por favor, ingresa una edad válida.");
} else {
  // Verificar si es mayor o menor de edad
  if (edad >= 18) {
    alert("Eres mayor de edad.");
  } else {
    alert("Eres menor de edad.");
  }
}
