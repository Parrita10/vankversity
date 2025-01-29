/*Crear tres promesas que se resuelvan en diferentes tiempos (1s, 2s, 3s). Usar Promise.all() 
para esperar a que todas se resuelvan e imprimir los resultados en un arreglo.*/

const promesaA = new Promise((resolve) => setTimeout(() => resolve("Promesa A resuelta ✅"), 1000));
const promesaB = new Promise((resolve) => setTimeout(() => resolve("Promesa B resuelta ✅"), 2000));
const promesaC = new Promise((resolve) => setTimeout(() => resolve("Promesa C resuelta ✅"), 3000));

Promise.all([promesaA, promesaB, promesaC])
    .then((resultados) => console.log("Resultados:", resultados))
    .catch((error) => console.error(error));
