// Objeto inicial
const numeros = { 3: "tres", 60: "sesenta", 10: "diez" };

// Eliminar la clave-valor 60: "sesenta"
delete numeros[60];

// Imprimir el objeto para verificar los cambios
console.log("Objeto después de eliminar la clave-valor 60: 'sesenta':", numeros);
