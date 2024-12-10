/*Escribe una función que reciba un string y use forEach para imprimir cada letra en
una nueva línea.*/

function imprimirLetrasConAlert() {
    const texto = prompt("Por favor, ingresa un texto:"); // Solicitar el texto al usuario
    if (texto) {
        texto.split("").forEach(letra => {
            alert(letra); // Mostrar cada letra en una nueva alerta
        });
    } else {
        alert("No ingresaste ningún texto.");
    }
}

// Llamar a la función
imprimirLetrasConAlert();
