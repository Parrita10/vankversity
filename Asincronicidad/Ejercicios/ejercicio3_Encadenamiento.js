/*Simular un flujo de pasos donde cada paso tarda 1 segundo en completarse. 
Usar tres promesas y encadenarlas con .then() para ejecutarlas en orden.*/

const paso1 = () => new Promise((resolve) => setTimeout(() => resolve("Paso 1 completado ✅"), 1000));
const paso2 = () => new Promise((resolve) => setTimeout(() => resolve("Paso 2 completado ✅"), 1000));
const paso3 = () => new Promise((resolve) => setTimeout(() => resolve("Paso 3 completado ✅"), 1000));

paso1()
    .then((mensaje) => {
        console.log(mensaje);
        return paso2();
    })
    .then((mensaje) => {
        console.log(mensaje);
        return paso3();
    })
    .then((mensaje) => {
        console.log(mensaje);
        console.log("Todos los pasos completados 🎉");
    })
    .catch((error) => console.error(error));
