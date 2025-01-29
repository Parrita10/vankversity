/* Crear dos promesas, una que se resuelve en 2 segundos y otra en 5 segundos.
Usar Promise.race() para determinar cuál se resuelve primero.*/

const promesaRapida = new Promise((resolve) => setTimeout(() => resolve("Promesa rápida resuelta 🚀"), 2000));
const promesaLenta = new Promise((resolve) => setTimeout(() => resolve("Promesa lenta resuelta 🐌"), 5000));

Promise.race([promesaRapida, promesaLenta])
    .then((resultado) => console.log(resultado))
    .catch((error) => console.error(error));
