// Lista de productos (inventario)
const inventario = [];

// Función para mostrar todos los productos
function mostrarTodosLosProductos() {
    if (inventario.length === 0) {
        alert("El inventario está vacío.");
        console.log("El inventario está vacío.");
    } else {
        console.log("Productos en el inventario:");
        inventario.forEach((producto, index) => {
            console.log(`(${index + 1}) Código: ${producto.codigo}, Nombre: ${producto.nombre}, Categoría: ${producto.categoria}, Precio: $${producto.precio}, Cantidad: ${producto.cantidad}`);
        });
        alert("Consulta la consola para ver todos los productos.");
    }
}

// Función para agregar un nuevo producto
function agregarProducto() {
    const codigo = prompt("Ingrese el código único del producto:");
    if (inventario.some(producto => producto.codigo === codigo)) {
        alert("❌ El código ingresado ya existe. No se puede agregar el producto.");
        console.log("Error: El código ingresado ya existe.");
        return;
    }

    const nombre = prompt("Ingrese el nombre del producto:");
    const categoria = prompt("Ingrese la categoría del producto:");
    const precio = parseFloat(prompt("Ingrese el precio del producto:"));
    const cantidad = parseInt(prompt("Ingrese la cantidad del producto:"), 10);

    inventario.push({ codigo, nombre, categoria, precio, cantidad });
    alert(`✅ Producto "${nombre}" agregado con éxito.`);
    console.log(`Producto agregado: Código: ${codigo}, Nombre: ${nombre}, Categoría: ${categoria}, Precio: $${precio}, Cantidad: ${cantidad}`);
}

// Función para editar un producto
function editarProducto() {
    const codigo = prompt("Ingrese el código del producto que desea editar:");
    const producto = inventario.find(producto => producto.codigo === codigo);

    if (producto) {
        const nuevoNombre = prompt(`Ingrese el nuevo nombre para el producto (${producto.nombre}):`) || producto.nombre;
        const nuevaCategoria = prompt(`Ingrese la nueva categoría para el producto (${producto.categoria}):`) || producto.categoria;
        const nuevoPrecio = parseFloat(prompt(`Ingrese el nuevo precio para el producto (${producto.precio}):`)) || producto.precio;
        const nuevaCantidad = parseInt(prompt(`Ingrese la nueva cantidad para el producto (${producto.cantidad}):`), 10) || producto.cantidad;

        producto.nombre = nuevoNombre;
        producto.categoria = nuevaCategoria;
        producto.precio = nuevoPrecio;
        producto.cantidad = nuevaCantidad;

        alert(`✅ Producto "${producto.nombre}" actualizado con éxito.`);
        console.log(`Producto actualizado: Código: ${producto.codigo}, Nombre: ${producto.nombre}, Categoría: ${producto.categoria}, Precio: $${producto.precio}, Cantidad: ${producto.cantidad}`);
    } else {
        alert("❌ Producto no encontrado con el código ingresado.");
        console.log("Error: Producto no encontrado.");
    }
}

// Función para eliminar un producto
function eliminarProducto() {
    const codigo = prompt("Ingrese el código del producto que desea eliminar:");
    const index = inventario.findIndex(producto => producto.codigo === codigo);

    if (index !== -1) {
        const productoEliminado = inventario.splice(index, 1)[0];
        alert(`✅ Producto "${productoEliminado.nombre}" eliminado con éxito.`);
        console.log(`Producto eliminado: Código: ${productoEliminado.codigo}, Nombre: ${productoEliminado.nombre}`);
    } else {
        alert("❌ Producto no encontrado con el código ingresado.");
        console.log("Error: Producto no encontrado.");
    }
}

// Menú principal
function menuInventario() {
    let continuar = true;

    while (continuar) {
        const opcion = prompt(
            "Seleccione una opción:\n" +
            "1. Agregar producto\n" +
            "2. Editar producto\n" +
            "3. Eliminar producto\n" +
            "4. Visualizar todos los productos\n" +
            "5. Salir"
        );

        switch (opcion) {
            case "1":
                agregarProducto();
                break;
            case "2":
                editarProducto();
                break;
            case "3":
                eliminarProducto();
                break;
            case "4":
                mostrarTodosLosProductos();
                break;
            case "5":
                continuar = false;
                alert("Saliendo del sistema de inventario.");
                break;
            default:
                alert("Opción no válida. Intente nuevamente.");
        }
    }
}

// Ejecutar el menú principal
menuInventario();
