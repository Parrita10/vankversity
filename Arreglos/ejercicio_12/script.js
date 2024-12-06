/*Dados los arreglos arreglo1 = [“Pera”, “Cebolla”, “Limón”, “Pimentón”] 1
arreglo2 = [“Manzana”, “Banano”, “Lechuga”, “Perejíl”] Ordene los arreglos de tal
manera que los elementos(frutas y verduras) queden en el arreglo que les
corresponde. Use ciclos.*/

let arreglo1 = ["Pera", "Cebolla", "Limón", "Pimentón"];
let arreglo2 = ["Manzana", "Banano", "Lechuga", "Perejíl"];

let frutas = [];
let verduras = [];

// Función para verificar si un elemento es fruta
function esFruta(item) {
  let frutasConocidas = ["Pera", "Limón", "Manzana", "Banano"];
  return frutasConocidas.includes(item);
}

// Recorremos arreglo1 y clasificamos
arreglo1.forEach(function(item) {
  if (esFruta(item)) {
    frutas.push(item);
  } else {
    verduras.push(item);
  }
});

// Recorremos arreglo2 y clasificamos
arreglo2.forEach(function(item) {
  if (esFruta(item)) {
    frutas.push(item);
  } else {
    verduras.push(item);
  }
});

// Mostramos los resultados con alert
alert("Frutas: " + frutas);
alert("Verduras: " + verduras);
