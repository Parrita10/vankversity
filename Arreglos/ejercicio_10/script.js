/*Use indexOf para mostrar los índices de los elementos 44, 89, 70 del arreglo [30, 44,
54, 89, 100]*/

let arr = [30, 44, 54, 89, 100];

// Usamos indexOf para encontrar los índices
let indice44 = arr.indexOf(44);
let indice89 = arr.indexOf(89);
let indice70 = arr.indexOf(70); // Devolverá -1 si no está en el arreglo

// Mostramos los resultados con alert
alert("El índice del elemento 44 es: " + indice44);
alert("El índice del elemento 89 es: " + indice89);
alert("El índice del elemento 70 es: " + indice70);
