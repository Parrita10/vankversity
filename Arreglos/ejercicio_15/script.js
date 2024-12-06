/*Cree una función que reciba un arreglo de letras no repetidas y lo retorne ordenado
alfabéticamente.*/

function ordenarArregloLetras(arreglo) {
    // Ordenamos el arreglo alfabéticamente
    let arregloOrdenado = arreglo.sort();
  
    // Mostramos el arreglo ordenado con alert
    alert("El arreglo ordenado alfabéticamente es: " + arregloOrdenado);
  
    // Retornamos el arreglo ordenado
    return arregloOrdenado;
  }
  
  // Ejemplo de uso
  let letras = ["z", "b", "a", "m", "x"];
  ordenarArregloLetras(letras);
  