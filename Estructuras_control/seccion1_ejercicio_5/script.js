/*Cree un programa que lea un número y muestre si este es par o impar. Realice una versión con condicionales
y otra con estructura switch-case.*/

//---------------Versión con condicionales---------------
let numero_condicional = Number(prompt("Ingrese un número:"));

if (isNaN(numero_condicional)) {
  alert("Por favor, ingresa un número válido.");
} else if (numero_condicional % 2 === 0) {
  alert("El número " + numero_condicional + " es par.");
} else {
  alert("El número " + numero_condicional + " es impar.");
}


//---------------Versión con switch-case---------------
let numero_switch = Number(prompt("Ingrese un número:"));

switch (true) {
  case isNaN(numero_switch):
    alert("Por favor, ingresa un número válido.");
    break;
  case numero_switch % 2 === 0:
    alert("El número " + numero_switch + " es par.");
    break;
  default:
    alert("El número " + numero_switch + " es impar.");
}
