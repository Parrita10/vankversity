/*Crea una función que reciba un array de objetos con propiedades precio y cantidad y
devuelva un nuevo array con los precios totales (precio × cantidad) solo de los
productos cuya cantidad sea mayor que 10.
const productos = [ { precio: 5, cantidad: 15 }, { precio: 10, cantidad: 5 }, { precio: 8,
cantidad: 20 } ];
console.log(calcularTotales(productos)); // [75, 160]*/

function calcularTotales(productos) {
    return productos
        .filter(producto => producto.cantidad > 10) // Filtra productos con cantidad > 10
        .map(producto => producto.precio * producto.cantidad); // Calcula precio total
}

// Ejemplo de uso
const productos = [
    { precio: 5, cantidad: 15 },
    { precio: 10, cantidad: 5 },
    { precio: 8, cantidad: 20 }
];

const totales = calcularTotales(productos);

console.log(totales);
// Salida: [75, 160]
