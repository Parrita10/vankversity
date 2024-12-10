/*Usa map para extraer un campo específico de un array de objetos y convertirlo en
un nuevo array.
const usuarios = [{ nombre: "Ana" }, { nombre: "Juan" }, { nombre: "Luisa" }];
console.log(nombres); // ["Ana", "Juan", "Luisa"]*/

const usuarios = [{ nombre: "Ana" }, { nombre: "Juan" }, { nombre: "Luisa" }];

const nombres = usuarios.map(usuario => usuario.nombre);

console.log(nombres);
// Salida: ["Ana", "Juan", "Luisa"]
