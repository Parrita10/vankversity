/*Escribir una función asíncrona que devuelva el mensaje "Hola, Mundo" y consumirla con .then() o await. */

async function obtenerSaludo() {
    return "Hola, Mundo";
}

// Consumir la función con then()
obtenerSaludo().then((mensaje) => console.log(mensaje));

// Consumir la función con await (dentro de otra función asíncrona)
async function mostrarSaludo() {
    const mensaje = await obtenerSaludo();
    console.log(mensaje);
}

mostrarSaludo();
