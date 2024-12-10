/*Escribe una función que use setTimeout con un callback para imprimir un mensaje
después de 2 segundos.*/

function imprimirConRetraso(mensaje, callback) {
    setTimeout(() => {
        callback(mensaje);
    }, 2000); // Retraso de 2 segundos
}

// Ejemplo de uso
imprimirConRetraso("Hola, este mensaje se muestra después de 2 segundos", (msg) => {
    console.log(msg);
});
