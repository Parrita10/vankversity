// Objeto inicial
const numeros = { dos: 2, cinco: 5, siete: 7, cuarenta: 40, cincuenta: 50 };

// Recorrer el objeto y mostrar los valores pares
console.log("Valores pares en el objeto:");
for (const clave in numeros) {
    if (numeros[clave] % 2 === 0) {
        console.log(`Clave: ${clave}, Valor: ${numeros[clave]}`);
    }
}
