/*Dado el arreglo [34, ["q"], 67, 1, 99, 1/2] Elimine los elementos desde el índice 3 hasta
el índice 4 en un sólo llamado*/

let arr = [34, ["q"], 67, 1, 99, 1/2];

// Eliminamos los elementos desde el índice 3 hasta el índice 4
arr.splice(3, 2);

// Mostramos el arreglo actualizado
alert("El arreglo actualizado es: " + arr);
