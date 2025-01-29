/*Escribir una función asíncrona que use Promise.all() para esperar varias promesas. 
Simular tres búsquedas con retrasos aleatorios y mostrar los resultados juntos. */

function busqueda(id, tiempo) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Resultado de búsqueda ${id}`);
        }, tiempo);
    });
}

async function realizarBusquedas() {
    const promesas = [
        busqueda(1, Math.random() * 3000), // Tiempo aleatorio hasta 3s
        busqueda(2, Math.random() * 3000),
        busqueda(3, Math.random() * 3000),
    ];

    const resultados = await Promise.all(promesas);
    console.log("Resultados obtenidos:", resultados);
}

realizarBusquedas();
