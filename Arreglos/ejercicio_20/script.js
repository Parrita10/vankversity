/*Dado el arreglo [15, 7, 9, 12, 1] usar ciclo forEach y una variable contadora para
mostrar la suma de sus elementos.*/

let numeros = [15, 7, 9, 12, 1];
let suma = 0; // Inicializamos el contador para la suma

// Recorremos el arreglo con forEach
numeros.forEach(function(numero) {
  suma += numero; // Sumamos cada número al contador
});

// Mostramos el resultado con alert
alert(`La suma de los elementos es: ${suma}`);
