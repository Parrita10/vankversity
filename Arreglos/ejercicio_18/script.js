/*Dado el arreglo ["Maria", "Pedro", "Juan", "Pablo", "Diana", "Maria"] usar un ciclo, un
condicional, y una variable contador(iniciela fuera del ciclo y úsela para almacenar las
veces que aparece Maria en el arreglo) para mostrar cuántas veces aparece el
nombre Maria.*/

let nombres = ["Maria", "Pedro", "Juan", "Pablo", "Diana", "Maria"];
let contador = 0; // Inicializamos el contador

// Recorremos el arreglo con un ciclo for
nombres.forEach(function(nombre) {
  if (nombre === "Maria") {
    contador++; // Incrementamos el contador si el nombre es "Maria"
  }
});

// Mostramos el resultado con alert
alert(`El nombre "Maria" aparece ${contador} veces en el arreglo.`);
