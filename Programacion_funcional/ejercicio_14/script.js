/*Crea una función que reciba un array de números y aplique diferentes operaciones
(multiplicar, dividir, sumar) según condiciones definidas en un callback.*/

function aplicarOperaciones(numeros, callback) {
    return numeros.map(callback);
}

// Ejemplo de uso
const numeros = [2, 4, 6, 8, 10];

// Callback para aplicar diferentes operaciones según condiciones
const operaciones = (numero) => {
    if (numero % 2 === 0 && numero < 5) {
        return numero * 2; // Multiplicar por 2 si es par y menor que 5
    } else if (numero % 2 === 0 && numero >= 5) {
        return numero / 2; // Dividir por 2 si es par y mayor o igual a 5
    } else {
        return numero + 10; // Sumar 10 para otros casos
    }
};

const resultado = aplicarOperaciones(numeros, operaciones);

console.log(resultado);
// Salida: [4, 8, 3, 4, 5] (basado en las condiciones definidas)
