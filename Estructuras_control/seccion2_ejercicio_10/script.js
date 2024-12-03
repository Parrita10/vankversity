/*Cree un programa que calcule el promedio de 10 números.*/

let suma = 0; // Variable para almacenar la suma de los números

// Ciclo para pedir 10 números al usuario
for (let i = 1; i <= 10; i++) {
  let numero = Number(prompt("Ingrese el número " + i + " de 10:"));

  // Validar si la entrada es un número
  if (isNaN(numero)) {
    alert("Entrada no válida. Por favor, ingresa un número.");
    i--; // Reducir el contador para que el usuario vuelva a ingresar un número válido
  } else {
    suma += numero; // Agregar el número a la suma total
  }
}

// Calcular el promedio
let promedio = suma / 10;

// Mostrar el promedio
alert("El promedio de los 10 números ingresados es: " + promedio.toFixed(2));
