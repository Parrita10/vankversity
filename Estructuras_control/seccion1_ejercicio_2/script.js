/*En un supermercado se tiene los siguientes productos: lentejas, crema, arroz y vino. Las lentejas y el arroz no
pagan IVA, el vino y la crema si. Cree un programa que reciba el nombre de alguno de los productos
mencionados y muestre si el producto paga IVA o no. Realice una versión con condicionales y otra con estructura
switch-case.*/

//--------VERSION CON IF-ELSE--------

// Solicitar el nombre del producto al usuario
let producto = prompt("Ingrese el nombre del producto (lentejas, crema, arroz, vino):");

// Convertir el nombre del producto a minúsculas para evitar problemas de mayúsculas/minúsculas
producto = producto.toLowerCase();

// Verificar si el producto paga IVA o no
if (producto === "lentejas" || producto === "arroz") {
  alert("El producto NO paga IVA.");
} else if (producto === "crema" || producto === "vino") {
  alert("El producto SÍ paga IVA.");
} else {
  alert("Producto no reconocido. Por favor, ingresa un producto válido.");
}


//--------VERSION CON SWITCH-CASE--------

// Solicitar el nombre del producto al usuario
let producto1 = prompt("Ingrese el nombre del producto (lentejas, crema, arroz, vino):");

// Convertir el nombre del producto a minúsculas para evitar problemas de mayúsculas/minúsculas
producto1 = producto1.toLowerCase();

// Verificar si el producto paga IVA o no
switch (producto1) {
  case "lentejas":
  case "arroz":
    alert("El producto NO paga IVA.");
    break;
  case "crema":
  case "vino":
    alert("El producto SÍ paga IVA.");
    break;
  default:
    alert("Producto no reconocido. Por favor, ingresa un producto válido.");
}
