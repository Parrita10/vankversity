/* Crear una función asíncrona que utilice await para esperar una promesa 
que se resuelve en 3 segundos, y luego imprime "Proceso terminado".*/

function esperar3Segundos() {
    return new Promise((resolve) => setTimeout(() => resolve("Proceso terminado"), 3000));
}

async function ejecutarProceso() {
    console.log("Esperando...");
    const mensaje = await esperar3Segundos();
    console.log(mensaje);
}

ejecutarProceso();

