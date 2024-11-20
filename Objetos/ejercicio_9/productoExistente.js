// Objeto con productos y precios
const productos = {
    Papa: 2000,
    Arroz: 3000,
    Lentejas: 2500,
    Aceite: 12000,
    Azucar: 4000
};

// Función para mostrar el precio de un producto
function mostrarPrecioProducto() {
    // Mostrar los productos disponibles al usuario
    const nombresProductos = Object.keys(productos).join(", ");
    const productoElegido = prompt(`Ingrese el nombre de uno de los siguientes productos:\n${nombresProductos}`);

    // Verificar si el producto existe en la tienda
    if (productos[productoElegido]) {
        alert(`El precio del producto "${productoElegido}" es $${productos[productoElegido]}`);
    } else {
        alert("El producto ingresado no existe en la tienda.");
    }
}

// Llamar a la función
mostrarPrecioProducto();
