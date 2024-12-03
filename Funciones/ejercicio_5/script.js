/*Escriba una función que reciba un número n como parámetro y genere su factorial.*/ 

// Función para calcular el factorial de un número
function calcularFactorial(n) {
    if (n === 0 || n === 1) {
        return 1; // El factorial de 0 y 1 es 1
    }
    let factorial = 1;
    for (let i = 2; i <= n; i++) {
        factorial *= i; // Multiplica los números desde 2 hasta n
    }
    return factorial;
}

// Pedir el valor de n al usuario
let n = parseInt(prompt("Ingrese un número para calcular su factorial:"));

// Validar que el usuario ingresó un número no negativo
if (n >= 0) {
    // Calcular el factorial y mostrar el resultado
    let resultado = calcularFactorial(n);
    alert(`El factorial de ${n} es: ${resultado}`);
} else {
    alert("Por favor, ingrese un número entero no negativo.");
}
