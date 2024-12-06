/*4. 5. 6. 7. 8. Cree una función que reciba un arreglo de n elementos y retorne el
número de elementos del arreglo.*/

function contarElementos(arr) {
    return arr.length;
  }
  
  // Ejemplo de uso
  let ejemplo = [1, 2, 3, 4, 5];
  let cantidad = contarElementos(ejemplo);
  
  // Mostramos el resultado con alert
  alert("El número de elementos del arreglo es: " + cantidad);
  