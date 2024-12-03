/*Cree un programa que pregunte al usuario si desea salir, si o no “S/N”, si el usuario teclea la letra
S el programa se detendrá, de lo contrario continuará ejecutándose.*/

let salir = false; // Variable para controlar el ciclo

while (!salir) {
  // Preguntar al usuario si desea salir
  let respuesta = prompt("¿Deseas salir? Teclea 'S' para salir o 'N' para continuar:").toUpperCase();

  // Verificar la respuesta del usuario
  if (respuesta === "S") {
    salir = true; // Cambiar la variable para salir del ciclo
    alert("El programa ha terminado. ¡Hasta luego!");
  } else if (respuesta === "N") {
    alert("El programa continuará ejecutándose.");
  } else {
    alert("Entrada no válida. Por favor, ingresa 'S' o 'N'.");
  }
}
