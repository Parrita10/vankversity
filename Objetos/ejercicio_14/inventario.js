// Arreglo de productos
const productos = [
    { nombre: "MOUSE", stock: 10, umbral: 5 },
    { nombre: "TECLADO", stock: 3, umbral: 10 },
    { nombre: "MEMORIA", stock: 15, umbral: 8 },
    { nombre: "AUDIFONOS", stock: 7, umbral: 5 }
];

// Función para verificar el stock
function verificarStock() {
    productos.forEach(producto => {
        if (producto.stock < producto.umbral) {
            alert(`⚠️ Alerta: El stock de ${producto.nombre} está bajo (${producto.stock}).`);
        }
        console.log(`Producto: ${producto.nombre}, Stock: ${producto.stock}, Umbral: ${producto.umbral}`);
    });
}

// Función para actualizar el stock interactivamente
function actualizarStockUsuario() {
    const nombreProducto = prompt("Ingrese el nombre del producto que desea actualizar (MOUSE, TECLADO, MEMORIA, AUDIFONOS):").toUpperCase();
    const cantidad = parseInt(prompt("Ingrese la cantidad a sumar (+) o restar (-):"), 10);

    const producto = productos.find(p => p.nombre === nombreProducto);
    if (producto) {
        producto.stock += cantidad;
        alert(`✅ El stock de ${producto.nombre} ha sido actualizado. Nuevo stock: ${producto.stock}`);
        console.log(`El stock de ${producto.nombre} ha sido actualizado. Nuevo stock: ${producto.stock}`);
        verificarStock();
    } else {
        alert(`❌ El producto "${nombreProducto}" no fue encontrado.`);
        console.log(`Error: Producto "${nombreProducto}" no existe.`);
    }
}

// Ejemplo de uso
verificarStock(); // Verifica inicialmente el stock de todos los productos

// Permitir al usuario actualizar el stock
let continuar = true;
while (continuar) {
    actualizarStockUsuario(); // Llama a la función que permite al usuario actualizar el stock
    continuar = confirm("¿Desea actualizar otro producto?");
}
