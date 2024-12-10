/*Escribe una función que use map y reduce para calcular el total de ventas en un
array de objetos.
const ventas = [ { producto: "A", cantidad: 10, precio: 2 }, { producto: "B", cantidad: 5, precio: 3 } ];*/

function calcularTotalVentas(ventas) {
    return ventas
        .map(venta => venta.cantidad * venta.precio) // Calcula el total por producto
        .reduce((total, subtotal) => total + subtotal, 0); // Suma todos los totales
}

// Ejemplo de uso
const ventas = [
    { producto: "A", cantidad: 10, precio: 2 },
    { producto: "B", cantidad: 5, precio: 3 }
];

const totalVentas = calcularTotalVentas(ventas);

console.log(`El total de ventas es: ${totalVentas}`);
// Salida: "El total de ventas es: 35"
