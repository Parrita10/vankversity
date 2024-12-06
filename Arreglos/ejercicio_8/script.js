/*Cree una función que reciba como argumento el siguiente arreglo [2, 5, 7, 9] y lo
recorra, imprimiendo cada uno de sus elementos.*/

function recorrerArreglo(arr) {
    arr.forEach(function(elemento) {
      alert("Elemento: " + elemento);
    });
  }
  
  // Llamamos a la función con el arreglo [2, 5, 7, 9]
  recorrerArreglo([2, 5, 7, 9]);
  