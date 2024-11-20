// Lista de habitaciones
const habitaciones = [
    { numero: 101, tipo: "Suite", disponible: true, reservas: [] },
    { numero: 102, tipo: "Doble", disponible: true, reservas: [] },
    { numero: 103, tipo: "Normal", disponible: true, reservas: [] },
    { numero: 104, tipo: "Suite", disponible: true, reservas: [] },
    { numero: 105, tipo: "Doble", disponible: false, reservas: [{ cliente: "Juan Pérez", diasReservados: 3 }] },
    { numero: 106, tipo: "Normal", disponible: false, reservas: [{ cliente: "Ana López", diasReservados: 2 }] }
];

// Función para reservar una habitación
function reservarHabitacion(cliente, dias, tipoHabitacion) {
    const habitacion = habitaciones.find(h => h.tipo === tipoHabitacion && h.disponible);
    if (!habitacion) {
        alert(`❌ No hay habitaciones disponibles de tipo ${tipoHabitacion}.`);
        console.log(`Error: No hay habitaciones disponibles de tipo ${tipoHabitacion}.`);
        return;
    }

    habitacion.reservas.push({ cliente, diasReservados: dias });
    habitacion.disponible = false;
    alert(`✅ Habitación ${habitacion.numero} de tipo ${tipoHabitacion} reservada por ${dias} días a nombre de ${cliente}.`);
    console.log(`Habitación reservada: Número: ${habitacion.numero}, Tipo: ${tipoHabitacion}, Cliente: ${cliente}, Días: ${dias}`);
}

// Función para cancelar una reserva
function cancelarReserva(cliente) {
    const habitacion = habitaciones.find(h => h.reservas.some(r => r.cliente === cliente));
    if (!habitacion) {
        alert(`❌ No se encontró una reserva a nombre de ${cliente}.`);
        console.log(`Error: Reserva no encontrada para el cliente ${cliente}.`);
        return;
    }

    habitacion.reservas = habitacion.reservas.filter(r => r.cliente !== cliente);
    if (habitacion.reservas.length === 0) {
        habitacion.disponible = true; // Si no quedan reservas, la habitación vuelve a estar disponible
    }

    alert(`✅ Reserva a nombre de ${cliente} cancelada para la habitación ${habitacion.numero}.`);
    console.log(`Reserva cancelada: Cliente: ${cliente}, Habitación: ${habitacion.numero}`);
}

// Función para listar habitaciones disponibles por tipo
function habitacionesDisponibles(tipoHabitacion) {
    const disponibles = habitaciones.filter(h => h.disponible && h.tipo === tipoHabitacion);
    if (disponibles.length === 0) {
        alert(`❌ No hay habitaciones disponibles de tipo ${tipoHabitacion}.`);
        console.log(`No hay habitaciones disponibles de tipo ${tipoHabitacion}.`);
        return;
    }

    console.log(`Habitaciones disponibles de tipo ${tipoHabitacion}:`);
    disponibles.forEach(h => console.log(`Número: ${h.numero}`));
    alert(`Consulta la consola para ver las habitaciones disponibles de tipo ${tipoHabitacion}.`);
}

// Función para mostrar todas las habitaciones y su estado
function mostrarHabitaciones() {
    console.log("Estado actual de las habitaciones:");
    habitaciones.forEach(h => {
        console.log(
            `Número: ${h.numero}, Tipo: ${h.tipo}, Disponible: ${h.disponible ? "Sí" : "No"}, Reservas: ${h.reservas.length}`
        );
    });
    alert("Consulta la consola para ver el estado de todas las habitaciones.");
}

// Menú interactivo
function menuHotel() {
    let continuar = true;

    while (continuar) {
        const opcion = prompt(
            "Seleccione una opción:\n" +
            "1. Reservar habitación\n" +
            "2. Cancelar reserva\n" +
            "3. Listar habitaciones disponibles por tipo\n" +
            "4. Mostrar todas las habitaciones\n" +
            "5. Salir"
        );

        switch (opcion) {
            case "1":
                const cliente = prompt("Ingrese el nombre del cliente:");
                const dias = parseInt(prompt("Ingrese la cantidad de días a reservar:"), 10);
                const tipo = prompt("Ingrese el tipo de habitación (Suite, Doble, Normal):");
                reservarHabitacion(cliente, dias, tipo);
                break;
            case "2":
                const clienteCancelar = prompt("Ingrese el nombre del cliente para cancelar la reserva:");
                cancelarReserva(clienteCancelar);
                break;
            case "3":
                const tipoConsulta = prompt("Ingrese el tipo de habitación a consultar (Suite, Doble, Normal):");
                habitacionesDisponibles(tipoConsulta);
                break;
            case "4":
                mostrarHabitaciones();
                break;
            case "5":
                continuar = false;
                alert("Saliendo del sistema de reservas del hotel.");
                break;
            default:
                alert("Opción no válida. Intente nuevamente.");
        }
    }
}

// Ejecutar el menú principal
menuHotel();
