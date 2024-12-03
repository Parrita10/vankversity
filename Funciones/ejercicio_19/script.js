/*Escriba un programa que convierta entre grados Celsius y Fahrenheit utilizando dos funciones: 
● celsiusToFahrenheit(celsius): convierte grados Celsius a Fahrenheit. 
● fahrenheitToCelsius(fahrenheit): convierte grados Fahrenheit a Celsius.*/

// Función para convertir grados Celsius a Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

// Función para convertir grados Fahrenheit a Celsius
function fahrenheitToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}

// Solicitar al usuario el tipo de conversión
let opcion = prompt(
    "Seleccione una opción:\n1. Convertir de Celsius a Fahrenheit\n2. Convertir de Fahrenheit a Celsius"
);

// Realizar la conversión según la opción seleccionada
if (opcion === "1") {
    // Convertir de Celsius a Fahrenheit
    let celsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius:"));
    let fahrenheit = celsiusToFahrenheit(celsius);
    alert(`La temperatura en Fahrenheit es: ${fahrenheit.toFixed(2)}°F`);
} else if (opcion === "2") {
    // Convertir de Fahrenheit a Celsius
    let fahrenheit = parseFloat(prompt("Ingrese la temperatura en grados Fahrenheit:"));
    let celsius = fahrenheitToCelsius(fahrenheit);
    alert(`La temperatura en Celsius es: ${celsius.toFixed(2)}°C`);
} else {
    alert("Opción no válida. Por favor, elija 1 o 2.");
}
