/*Cree un programa que lea los tres ángulos internos de un triángulo y muestre si los ángulos corresponden a un
triángulo o no. Realice una versión con condicionales y otra con estructura switch-case.*/

//----------Versión con condicionales----------
let angulo1_condicional = Number(prompt("Ingrese el primer ángulo:"));
let angulo2_condicional = Number(prompt("Ingrese el segundo ángulo:"));
let angulo3_condicional = Number(prompt("Ingrese el tercer ángulo:"));

if (isNaN(angulo1_condicional) || isNaN(angulo2_condicional) || isNaN(angulo3_condicional)) {
  alert("Por favor, ingresa ángulos válidos.");
} else if (angulo1_condicional + angulo2_condicional + angulo3_condicional === 180) {
  alert("Los ángulos ingresados forman un triángulo.");
} else {
  alert("Los ángulos ingresados NO forman un triángulo.");
}


//----------Versión con switch-case----------
let angulo1_switch = Number(prompt("Ingrese el primer ángulo:"));
let angulo2_switch = Number(prompt("Ingrese el segundo ángulo:"));
let angulo3_switch = Number(prompt("Ingrese el tercer ángulo:"));

switch (true) {
  case isNaN(angulo1_switch) || isNaN(angulo2_switch) || isNaN(angulo3_switch):
    alert("Por favor, ingresa ángulos válidos.");
    break;
  case angulo1_switch + angulo2_switch + angulo3_switch === 180:
    alert("Los ángulos ingresados forman un triángulo.");
    break;
  default:
    alert("Los ángulos ingresados NO forman un triángulo.");
}
