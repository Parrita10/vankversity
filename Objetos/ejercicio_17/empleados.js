// Lista de empleados
const empleados = [
    { id: 1, nombre: "Juan Pérez", horasTrabajadas: [] },
    { id: 2, nombre: "Ana López", horasTrabajadas: [] },
    { id: 3, nombre: "Carlos García", horasTrabajadas: [] }
];

// Función para agregar horas trabajadas a un empleado
function agregarHoras(idEmpleado, horas) {
    const empleado = empleados.find(emp => emp.id === idEmpleado);
    if (!empleado) {
        alert(`❌ No se encontró al empleado con ID ${idEmpleado}.`);
        console.log("Error: Empleado no encontrado.");
        return;
    }

    empleado.horasTrabajadas.push(horas);
    alert(`✅ Se agregaron ${horas} horas al empleado ${empleado.nombre}.`);
    console.log(`Horas agregadas: Empleado: ${empleado.nombre}, Horas: ${horas}`);
}

// Función para calcular el salario semanal
function calcularPago(idEmpleado, tarifaHora) {
    const empleado = empleados.find(emp => emp.id === idEmpleado);
    if (!empleado) {
        alert(`❌ No se encontró al empleado con ID ${idEmpleado}.`);
        console.log("Error: Empleado no encontrado.");
        return;
    }

    const totalHoras = empleado.horasTrabajadas.reduce((total, horas) => total + horas, 0);
    const pago = totalHoras * tarifaHora;

    alert(`✅ El salario semanal de ${empleado.nombre} es $${pago}.`);
    console.log(`Salario calculado: Empleado: ${empleado.nombre}, Total horas: ${totalHoras}, Pago: $${pago}`);
}

// Función para obtener empleados con horas extras
function empleadosConHorasExtras() {
    const empleadosExtras = empleados.filter(emp => {
        const totalHoras = emp.horasTrabajadas.reduce((total, horas) => total + horas, 0);
        return totalHoras > 40;
    });

    if (empleadosExtras.length === 0) {
        alert("Ningún empleado trabajó más de 40 horas esta semana.");
        console.log("No se encontraron empleados con horas extras.");
    } else {
        console.log("Empleados con horas extras:");
        empleadosExtras.forEach(emp => {
            const totalHoras = emp.horasTrabajadas.reduce((total, horas) => total + horas, 0);
            console.log(`Empleado: ${emp.nombre}, Total horas: ${totalHoras}`);
        });
        alert("Consulta la consola para ver los empleados con horas extras.");
    }
}

// Función para mostrar todos los empleados y sus horas trabajadas
function mostrarEmpleados() {
    console.log("Lista de empleados y sus horas trabajadas:");
    empleados.forEach(emp => {
        const totalHoras = emp.horasTrabajadas.reduce((total, horas) => total + horas, 0);
        console.log(`ID: ${emp.id}, Nombre: ${emp.nombre}, Horas trabajadas: ${totalHoras}`);
    });
    alert("Consulta la consola para ver los empleados y sus horas trabajadas.");
}

// Menú interactivo
function menuEmpleados() {
    let continuar = true;

    while (continuar) {
        const opcion = prompt(
            "Seleccione una opción:\n" +
            "1. Agregar horas trabajadas\n" +
            "2. Calcular pago semanal\n" +
            "3. Mostrar empleados con horas extras\n" +
            "4. Mostrar empleados y sus horas trabajadas\n" +
            "5. Salir"
        );

        switch (opcion) {
            case "1":
                const idEmpleado = parseInt(prompt("Ingrese el ID del empleado:"));
                const horas = parseFloat(prompt("Ingrese las horas trabajadas:"));
                agregarHoras(idEmpleado, horas);
                break;
            case "2":
                const idCalculo = parseInt(prompt("Ingrese el ID del empleado:"));
                const tarifa = parseFloat(prompt("Ingrese la tarifa por hora:"));
                calcularPago(idCalculo, tarifa);
                break;
            case "3":
                empleadosConHorasExtras();
                break;
            case "4":
                mostrarEmpleados();
                break;
            case "5":
                continuar = false;
                alert("Saliendo del sistema de administración de empleados.");
                break;
            default:
                alert("Opción no válida. Intente nuevamente.");
        }
    }
}

// Ejecutar el menú principal
menuEmpleados();
