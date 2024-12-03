/*
Aplicación de Educación Financiera para Jóvenes
*/

//Mensaje de Bienvenida
function mostrarPantallaDeBienvenida(){
    alert(
        "✨ Bienvenido a VankMoney ✨\n\n" +
        "Descubre el poder de tus finanzas: aprende a ahorrar, invertir y gestionar tu dinero como un profesional. 🚀\n\n" +
        "¡Es momento de tomar el control y construir un futuro financiero brillante! 💡"
    );
}


/**
 * Función que muestra el menú principal, y retorna la respueta del usuario
 * @returns 
 */
function MostrarMenu() {
    let menu = "Selecciona una de las siguientes opciones: \n" + 
        "1) Introducción a las finanzas \n" +
        "2) Presupuesto y ahorro\n" +
        "3) Conceptos básicos de inversión\n" +
        "4) Salir";

    let respuesta = prompt(menu);
    while (isNaN(respuesta) || respuesta < 1 || respuesta > 4) {
        alert("Respuesta no válida. Por favor, ingresa un número entre 1 y 4.");
        respuesta = prompt(menu);
    }
    return parseInt(respuesta); // Convertir la respuesta a número
}

//Modulo 1: Introduccion a las finanzas personales
function moduloIntroduccionFinanzas() {
    alert(
        "📘 Introducción a las Finanzas Personales:\n\n" +
        "Las finanzas personales son la administración de tus ingresos, gastos, ahorros e inversiones. \n\n" +
        "⚡ Conceptos básicos clave:\n" +
        "1️⃣ **Ingresos**: Es el dinero que recibes, ya sea por tu trabajo, negocios, inversiones u otras fuentes. \n" +
        "   ➡️ Ejemplo: Tu salario, ingresos por alquiler o ventas.\n\n" +
        "2️⃣ **Egresos**: Son todos los gastos que realizas, desde tus necesidades básicas hasta tus deseos. \n" +
        "   ➡️ Ejemplo: Renta, comida, servicios públicos, entretenimiento.\n\n" +
        "3️⃣ **Ahorro**: Es la parte de tus ingresos que no gastas y reservas para el futuro. \n" +
        "   ➡️ Regla sugerida: Ahorra al menos el 15-20% de tus ingresos mensuales.\n\n" +
        "4️⃣ **Deuda**: Es el dinero que debes a otros, como préstamos bancarios o tarjetas de crédito.\n" +
        "   ➡️ Consejo: Prioriza pagar las deudas con mayores tasas de interés primero.\n\n" +
        "💡 **Tips para manejar tus finanzas personales**:\n" +
        "- Elabora un presupuesto mensual para controlar tus ingresos y gastos.\n" +
        "- Define metas financieras específicas (ej. ahorrar para un viaje, comprar una casa).\n" +
        "- Crea un fondo de emergencia que cubra al menos 3-6 meses de tus gastos esenciales.\n" +
        "- Evita gastar más de lo que ganas y ten cuidado con las compras impulsivas.\n\n" +
        "💭 **Reflexión**: Las finanzas personales no se tratan solo de dinero, sino de construir una vida estable y segura para ti y tu futuro.\n\n" +
        "¡Empieza a tomar el control de tus finanzas hoy!"
    );
}
    
//Módulo 2: Calculadora de Presupuesto Personal
function calcularPresupuestoPersonal() {
    let puntos = 0;
    let consejos = "";

    // Pregunta 1: Porcentaje de ahorro
    let porcentajeAhorro = parseInt(prompt("¿Cuánto porcentaje de tus ingresos destinas al ahorro? (0-100%)"));
    while (isNaN(porcentajeAhorro) || porcentajeAhorro < 0 || porcentajeAhorro > 100) {
        alert("Por favor, ingresa un número válido entre 0 y 100.");
        porcentajeAhorro = prompt("¿Cuánto porcentaje de tus ingresos destinas al ahorro? (0-100%)");
    }
    if (porcentajeAhorro >= 15) {
        puntos += 2;
    } else {
        consejos += "- Intenta ahorrar al menos el 15% de tus ingresos. Automatiza tus ahorros para mayor consistencia.\n";
    }

    // Pregunta 2: ¿Tienes deudas actualmente?
    let tieneDeudas = confirm("¿Tienes deudas actualmente? (Aceptar para 'Sí', Cancelar para 'No')");
    if (!tieneDeudas) {
        puntos += 2;
    } else {
        consejos += "- Prioriza pagar tus deudas, comenzando por las de mayor interés.\n";
    }

    // Pregunta 3: ¿Haces un presupuesto mensual?
    let hacePresupuesto = confirm("¿Realizas un presupuesto mensual para controlar tus gastos?");
    if (hacePresupuesto) {
        puntos += 2;
    } else {
        consejos += "- Comienza a crear un presupuesto mensual para tener un mejor control de tus finanzas.\n";
    }

    // Pregunta 4: ¿Tienes un fondo de emergencia?
    let fondoEmergencia = confirm("¿Tienes un fondo de emergencia para gastos imprevistos?");
    if (fondoEmergencia) {
        puntos += 2;
    } else {
        consejos += "- Crea un fondo de emergencia con al menos 3 meses de tus gastos básicos.\n";
    }

    // Pregunta 5: ¿Realizas inversiones regularmente?
    let haceInversiones = confirm("¿Realizas inversiones regularmente para hacer crecer tu dinero?");
    if (haceInversiones) {
        puntos += 2;
    } else {
        consejos += "- Considera invertir una parte de tus ahorros para obtener mejores rendimientos a largo plazo.\n";
    }

    // Resultado Final
    let estadoFinanciero = "";
    if (puntos>=8){
        estadoFinanciero = "EXCELENTE";
        consejos += "- ¡ Sigue así! Estás en el camino correcto para alcanzar tus metas financieras.\n";
    } else if (puntos >= 5) {
        estadoFinanciero = "BUENO";
        consejos += "- Estás en buen camino, pero hay áreas que puedes mejorar. Revisa tus hábitos financieros.\n";
    } else {
        estadoFinanciero = "DEFICIENTE";
        consejos += "- Es importante que trabajes en tus hábitos financieros. Empieza con pasos pequeños y constantes.\n";
    }

    alert(`Tu nivel de salud financiera es: ${estadoFinanciero}\n\nConsejos:\n${consejos}`);
}

//Modulo 3: Conceptos Basicos de Inversion
function moduloConceptosInversion(){
    alert(
        "💡 Conceptos Básicos de Inversión:\n\n" +
        "Invertir es hacer que tu dinero trabaje para ti. Algunos conceptos clave son:\n" +
        "• Rentabilidad: Cuánto puedes ganar con una inversión.\n" +
        "• Riesgo: La probabilidad de perder dinero en una inversión.\n" +
        "• Diversificación: No pongas todos tus huevos en una sola canasta.\n" +
        "• Interés Compuesto: Haz que tus ganancias trabajen para ti.\n" +
        "• ETF: Una forma sencilla de invertir en múltiples activos.\n\n" +
        "¡Aprender a invertir es un paso importante hacia tu libertad financiera!"
    );
}

//FLUJO DEL PROGRAMA
mostrarPantallaDeBienvenida(); //Llamamos la funcion para mostrar el mensaje al cargar la aplicación
let continuar = true;

while (continuar) {
    let respuesta = MostrarMenu();
    switch (respuesta) {
        case 1:
            moduloIntroduccionFinanzas();
            break;
        case 2:
            calcularPresupuestoPersonal();
            break;
        case 3:
            moduloConceptosInversion();
            break;
        case 4:
            continuar = false;
            alert("Gracias por usar VankMoney. ¡Hasta luego!");
            break;
        default:
            alert("Opción no válida.");
            break;
    }
}