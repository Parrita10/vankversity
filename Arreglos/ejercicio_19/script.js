/*Dado el arreglo [-2, 8, 99, 1, 7] usar ciclo forEach y una variable contadora para
mostrar la suma de los cuadrados de sus elementos.*/

let numeros = [-2, 8, 99, 1, 7];
let sumaCuadrados = 0; // Inicializamos el contador para la suma

// Recorremos el arreglo con forEach
numeros.forEach(function(numero) {
  sumaCuadrados += numero ** 2; // Calculamos el cuadrado y lo sumamos
});

// Mostramos el resultado con alert
alert(`La suma de los cuadrados de los elementos es: ${sumaCuadrados}`);
