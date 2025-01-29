/*Escribir una promesa que se resuelva después de 2 segundos con el mensaje "Promesa cumplida". 
Luego, consumirla usando .then() para imprimir el mensaje en la consola.*/

const promesaSimple = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promesa cumplida");
    }, 2000); // Espera 2 segundos
});

// Consumir la promesa
promesaSimple.then((mensaje) => console.log(mensaje));
