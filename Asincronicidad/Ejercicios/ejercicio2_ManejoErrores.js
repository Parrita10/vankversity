/*Crear una promesa que se rechace si un número aleatorio es menor a 0.5. 
Manejar el error con .catch() e imprimir "Promesa rechazada" en ese caso.*/

const promesaError = new Promise((resolve, reject) => {
    const numero = Math.random(); // Genera un número entre 0 y 1
    console.log(`Número generado: ${numero}`);

    if (numero >= 0.5) {
        resolve("Promesa cumplida 🎉");
    } else {
        reject("Promesa rechazada ❌");
    }
});

// Consumir la promesa
promesaError
    .then((mensaje) => console.log(mensaje))
    .catch((error) => console.error(error));
