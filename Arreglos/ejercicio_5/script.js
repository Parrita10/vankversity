/*Dado el siguiente arreglo let k = [17, 4, 64, 79, 109, 112] , recorrer cada elemento con
foreach e imprimir los elementos que sean números impares.*/

let k = [17, 4, 64, 79, 109, 112];

// Recorremos el arreglo y verificamos si el elemento es impar
k.forEach(function(elemento) {
  if (elemento % 2 !== 0) {
    alert("Número impar: " + elemento);
  }
});
