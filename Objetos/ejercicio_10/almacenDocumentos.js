// Objeto para almacenar documentos y nombres de los usuarios
const usuarios = {
    1001: "Juan Pérez",
    1002: "Ana Gómez",
    1003: "Carlos Ramírez",
    1004: "María López",
    1005: "Pedro Martínez",
    1006: "Laura Torres",
    1007: "José Hernández",
    1008: "Elena Vargas",
    1009: "Luis Castillo",
    1010: "Sofía Díaz"
};

// Imprimir todos los nombres de los usuarios usando un ciclo
console.log("Nombres de los usuarios:");
for (const documento in usuarios) {
    console.log(usuarios[documento]);
}
