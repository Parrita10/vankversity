// Objeto que almacena los productos y sus precios
const productos = {
    Papa: 2000,
    Arroz: 3000,
    Lentejas: 2500,
    Aceite: 12000
};

// Imprimir cada producto con su precio
let mensaje = "Lista de productos y precios:\n";
for (const producto in productos) {
    mensaje += `Producto: ${producto}, Precio: $${productos[producto]}\n`;
}
alert(mensaje);
