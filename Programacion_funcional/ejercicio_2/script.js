/*Crea una función aplicarOperacion que reciba un número y un callback. La función
debe ejecutar el callback pasándole el número.*/

function aplicarOperacion(numero, callback) {
    callback(numero);
}

// Ejemplo de uso
aplicarOperacion(10, (num) => {
    console.log(`El número es: ${num}`);
});

aplicarOperacion(5, (num) => {
    console.log(`El doble del número es: ${num * 2}`);
});
