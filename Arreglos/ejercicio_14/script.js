/*Cree una función que reciba un arreglo de números enteros no repetidos y lo retorne
ordenado de menor a mayor según el valor de tales elementos.*/

function ordenarArregloNumeros(arreglo) {
    // Ordenamos el arreglo de menor a mayor
    let arregloOrdenado = arreglo.sort(function(a, b) {
      return a - b;
    });
  
    // Mostramos el arreglo ordenado con alert
    alert("El arreglo ordenado de menor a mayor es: " + arregloOrdenado);
  
    // Retornamos el arreglo ordenado
    return arregloOrdenado;
  }
  
  // Ejemplo de uso
  let numeros = [45, 12, 78, 4, 32];
  ordenarArregloNumeros(numeros);
  