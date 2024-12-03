/*Escriba una función que se llame facturacion() La función tiene que recibir como parámetro el monto de un producto ,
y el medio de pago : C (tarjeta de crédito), E (efectivo) y D (tarjeta de débito). Si el monto del producto es menor a $200 
no se aplicará ningún descuento. Si el monto a pagar es entre $200 y $400 se aplicará un descuento del 30% si el medio de pago
es efectivo, 20% si se realiza con débito y 10% con tarjeta de crédito. Para montos mayores a $400, el descuento es del 40% sin
importar el medio de pago La función deberá retornar el monto final a pagar.*/

// Función para calcular la facturación con descuentos según el monto y el medio de pago
function facturacion(monto, medioPago) {
    let descuento = 0;

    if (monto >= 200 && monto <= 400) {
        // Aplicar descuentos según el medio de pago
        if (medioPago === "E") {
            descuento = 0.30; // 30% para efectivo
        } else if (medioPago === "D") {
            descuento = 0.20; // 20% para débito
        } else if (medioPago === "C") {
            descuento = 0.10; // 10% para crédito
        }
    } else if (monto > 400) {
        // Descuento fijo del 40% para montos mayores a $400
        descuento = 0.40;
    }

    // Calcular el monto final después del descuento
    let montoFinal = monto - (monto * descuento);
    return montoFinal; // Retornar el monto final a pagar
}

// Solicitar datos al usuario
let monto = parseFloat(prompt("Ingrese el monto del producto:"));
let medioPago = prompt("Ingrese el medio de pago (E para efectivo, D para débito, C para crédito):").toUpperCase();

// Validar entrada del medio de pago
if (monto > 0 && ["E", "D", "C"].includes(medioPago)) {
    // Llamar a la función y mostrar el resultado
    let montoFinal = facturacion(monto, medioPago);
    alert(`El monto final a pagar es: $${montoFinal.toFixed(2)}`);
} else {
    alert("Por favor, ingrese un monto válido y un medio de pago correcto (E, D, o C).");
}
