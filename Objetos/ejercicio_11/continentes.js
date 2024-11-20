// Objeto que contiene continentes como claves y sus países como arreglos
const continentes = {
    América: ["Estados Unidos", "México", "Brasil", "Argentina", "Colombia"],
    Europa: ["España", "Francia", "Alemania", "Italia", "Reino Unido"],
    Asia: ["China", "Japón", "India", "Corea del Sur", "Tailandia"],
    África: ["Egipto", "Sudáfrica", "Nigeria", "Kenia", "Marruecos"],
    Oceanía: ["Australia", "Nueva Zelanda", "Fiyi", "Papúa Nueva Guinea", "Samoa"]
};

// Solicitar al usuario el nombre de un continente
const nombreContinente = prompt(
    "Ingrese el nombre de uno de los siguientes continentes:\nAmérica, Europa, Asia, África, Oceanía"
);

// Verificar si el continente existe en el objeto
if (continentes[nombreContinente]) {
    // Mostrar los países del continente seleccionado
    const paises = continentes[nombreContinente];
    alert(`Los países de ${nombreContinente} son:\n${paises.join(", ")}`);
    console.log(`Los países de ${nombreContinente} son:`, paises);
} else {
    // Mostrar un mensaje de error si el continente no existe
    alert("El continente ingresado no es válido.");
    console.log("Error: Continente no encontrado.");
}
