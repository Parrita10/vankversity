/*Cree un programa que lea un número y muestre si este es divisible entre cinco o no. Realice una versión con
condicionales y otra con estructura switch-case.*/

//---------------Versión con condicionales---------------
let numero_condicional = Number(prompt("Ingrese un número:"));

if (isNaN(numero_condicional)) {
  alert("Por favor, ingresa un número válido.");
} else if (numero_condicional % 5 === 0) {
  alert("El número " + numero_condicional + " es divisible entre 5.");
} else {
  alert("El número " + numero_condicional + " NO es divisible entre 5.");
}


//---------------Versión con switch-case---------------
let numero_switch = Number(prompt("Ingrese un número:"));

switch (true) {
  case isNaN(numero_switch):
    alert("Por favor, ingresa un número válido.");
    break;
  case numero_switch % 5 === 0:
    alert("El número " + numero_switch + " es divisible entre 5.");
    break;
  default:
    alert("El número " + numero_switch + " NO es divisible entre 5.");
}
