/*Escriba una función que muestre los números de 1 a n, teniendo n como parámetro*/

// Función para mostrar los números de 1 a n
function mostrarNumeros(n) {
    let numeros = ""; // Variable para almacenar los números
    for (let i = 1; i <= n; i++) {
        numeros += i + (i < n ? ", " : ""); // Agregar números separados por coma
    }
    return numeros;
}

// Pedir el valor de n al usuario
let n = parseInt(prompt("Ingrese un número (n):"));

// Validar que el usuario ingresó un número positivo
if (n > 0) {
    // Llamar a la función y mostrar los números
    let resultado = mostrarNumeros(n);
    alert(`Los números de 1 a ${n} son: ${resultado}`);
} else {
    alert("Por favor, ingrese un número positivo.");
}
