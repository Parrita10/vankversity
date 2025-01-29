/*Crear una función que procese una lista de nombres uno por uno. Usa await para simular un retraso de 1 segundo entre cada nombre. */

function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function procesarNombres(nombres) {
    for (const nombre of nombres) {
        await delay(1000);
        console.log(`Procesado: ${nombre}`);
    }
}

const nombres = ["Juan", "Ana", "Carlos", "Sofía"];

procesarNombres(nombres);
