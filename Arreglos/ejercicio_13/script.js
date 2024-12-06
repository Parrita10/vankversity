/*Cree una función que reciba un arreglo de nombres de personas y muestre si la letra
“c” se encuentra entre tales nombres, en caso de que la letra “c” se encuentre,
mostrar las veces que se encuentra(considerando las apariciones entre todos los
nombres) . Se le debe pedir al usuario que introduzca el arreglo.*/

function contarLetraC() {
    // Solicitamos al usuario que introduzca un arreglo separado por comas
    let entrada = prompt("Introduce un arreglo de nombres separados por comas (ejemplo: Carlos, Ana, Cecilia)");
    
    // Convertimos la entrada en un arreglo
    let nombres = entrada.split(",").map(nombre => nombre.trim());
    
    // Contamos las apariciones de la letra 'c' o 'C'
    let conteo = 0;
    nombres.forEach(function(nombre) {
      for (let letra of nombre.toLowerCase()) {
        if (letra === "c") {
          conteo++;
        }
      }
    });
  
    // Mostramos el resultado
    if (conteo > 0) {
      alert(`La letra "c" aparece ${conteo} veces en los nombres introducidos.`);
    } else {
      alert('La letra "c" no se encuentra en los nombres introducidos.');
    }
  }
  
  // Llamamos a la función
  contarLetraC();
  