/*Escriba una función que tenga como parámetro un nombre y retorne la cadena “Hola Juan”, por ejemplo si el nombre pasado es Juan.*/

// Función para saludar a una persona por su nombre
function saludar(nombre) {
    return `Hola ${nombre}`;
}

// Pedir el nombre al usuario
let nombre = prompt("Ingrese su nombre:");

// Llamar a la función y obtener el saludo
let saludo = saludar(nombre);

// Mostrar el saludo en una alerta
alert(saludo);
