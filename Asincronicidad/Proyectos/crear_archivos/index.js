const fs = require('fs').promises;
const readline = require('readline');

// Configuración de entrada de usuario en la terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout  
});

// Función para crear un archivo
async function crearArchivo(nombre, contenido) {
    try {
        await fs.writeFile(`${nombre}.txt`, contenido);
        console.log(`✅ Archivo ${nombre}.txt creado correctamente.`);
    } catch (error) {
        console.error(`❌ Error al crear ${nombre}.txt:`, error);
    }
}

// Función principal para generar los archivos
async function generarArchivos() {
    rl.question("¿Cuántos archivos deseas crear? ", async (cantidad) => {
        cantidad = parseInt(cantidad);
        
        if (isNaN(cantidad) || cantidad <= 0) {
            console.error("⚠️ Ingresa un número válido mayor que 0.");
            rl.close();
            return;
        }

        console.log(`⏳ Creando ${cantidad} archivos de texto...`);

        let arregloPromesas = [];
        for (let index = 1; index <= cantidad; index++) {
            arregloPromesas.push(crearArchivo(String(index), "Hola VankVersity"));
        }

        try {
            await Promise.all(arregloPromesas);
            console.log("🎉 ¡Todos los archivos fueron creados exitosamente!");
        } catch (error) {
            console.error("❌ Ocurrió un error al generar los archivos:", error);
        }

        rl.close();
    });
}

// Ejecutar la función
generarArchivos();
