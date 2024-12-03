/*Cree un programa que muestre el promedio de n números, dejándose de solicitar números
cuando se introduzca el cero.*/

let suma = 0; // Variable para almacenar la suma de los números
let contador = 0; // Variable para contar cuántos números se ingresaron

while (true) {
  // Solicitar un número al usuario
  let numero = Number(prompt("Ingrese un número (ingrese 0 para finalizar):"));

  // Verificar si la entrada es válida
  if (isNaN(numero)) {
    alert("Por favor, ingresa un número válido.");
    continue; // Vuelve a solicitar un número
  }

  // Si el usuario ingresa 0, se rompe el ciclo
  if (numero === 0) {
    break;
  }

  // Agregar el número a la suma y aumentar el contador
  suma += numero;
  contador++;
}

// Calcular el promedio
if (contador === 0) {
  alert("No se ingresaron números para calcular el promedio.");
} else {
  let promedio = suma / contador;
  alert("El promedio de los " + contador + " números ingresados es: " + promedio.toFixed(2));
}
