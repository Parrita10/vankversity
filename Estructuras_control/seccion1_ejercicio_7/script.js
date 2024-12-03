/*Cree un programa que lea un número entre 1 y 15 y muestre si éste es primo o no. Realice una versión con
condicionales y otra con estructura switch-case.*/

//---------------Versión con condicionales---------------
let numero_condicional = Number(prompt("Ingrese un número entre 1 y 15:"));

if (isNaN(numero_condicional) || numero_condicional < 1 || numero_condicional > 15) {
  alert("Por favor, ingresa un número válido entre 1 y 15.");
} else {
  if (numero_condicional === 1) {
    alert("El número 1 NO es primo.");
  } else if (
    numero_condicional === 2 ||
    numero_condicional === 3 ||
    numero_condicional === 5 ||
    numero_condicional === 7 ||
    numero_condicional === 11 ||
    numero_condicional === 13
  ) {
    alert("El número " + numero_condicional + " es primo.");
  } else {
    alert("El número " + numero_condicional + " NO es primo.");
  }
}

//---------------Versión con switch-case---------------
let numero_switch = Number(prompt("Ingrese un número entre 1 y 15:"));

switch (true) {
  case isNaN(numero_switch) || numero_switch < 1 || numero_switch > 15:
    alert("Por favor, ingresa un número válido entre 1 y 15.");
    break;
  case numero_switch === 1:
    alert("El número 1 NO es primo.");
    break;
  case numero_switch === 2:
  case numero_switch === 3:
  case numero_switch === 5:
  case numero_switch === 7:
  case numero_switch === 11:
  case numero_switch === 13:
    alert("El número " + numero_switch + " es primo.");
    break;
  default:
    alert("El número " + numero_switch + " NO es primo.");
}
