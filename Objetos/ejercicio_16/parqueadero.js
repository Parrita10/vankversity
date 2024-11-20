class Vehiculo {
    constructor(marca, placa, horaEntrada) {
        this.marca = marca;
        this.placa = placa;
        this.horaEntrada = horaEntrada;
    }
}

class Parqueadero {
    constructor() {
        this.vehiculos = [];
        this.costoPorHora = 2500;
    }

    // Agregar un vehículo al parqueadero
    ingresarVehiculo() {
        const marca = prompt("Ingrese la marca del vehículo:");
        const placa = prompt("Ingrese la placa del vehículo:");
        const horaEntrada = new Date();

        if (this.vehiculos.some(vehiculo => vehiculo.placa === placa)) {
            alert("❌ Un vehículo con esta placa ya está registrado en el parqueadero.");
            console.log("Error: Placa duplicada.");
            return;
        }

        const nuevoVehiculo = new Vehiculo(marca, placa, horaEntrada);
        this.vehiculos.push(nuevoVehiculo);
        alert(`✅ Vehículo ${marca} con placa ${placa} ingresado a las ${horaEntrada.toLocaleTimeString()}.`);
        console.log(`Vehículo ingresado: Marca: ${marca}, Placa: ${placa}, Hora de entrada: ${horaEntrada.toLocaleTimeString()}`);
    }

    // Retirar un vehículo y calcular el costo
    retirarVehiculo() {
        const placa = prompt("Ingrese la placa del vehículo que desea retirar:");
        const indice = this.vehiculos.findIndex(vehiculo => vehiculo.placa === placa);

        if (indice !== -1) {
            const vehiculo = this.vehiculos[indice];
            const horaSalida = new Date();
            const tiempoEstacionado = Math.floor((horaSalida - vehiculo.horaEntrada) / (1000 * 60 * 60));
            const minutosEstacionados = Math.floor(((horaSalida - vehiculo.horaEntrada) % (1000 * 60 * 60)) / (1000 * 60));
            const costo = tiempoEstacionado * this.costoPorHora;

            this.vehiculos.splice(indice, 1); // Eliminar el vehículo del parqueadero

            alert(
                `✅ Vehículo retirado:\n` +
                `Marca: ${vehiculo.marca}\n` +
                `Placa: ${vehiculo.placa}\n` +
                `Tiempo estacionado: ${tiempoEstacionado} horas y ${minutosEstacionados} minutos\n` +
                `Total a pagar: $${costo}`
            );

            console.log(
                `Vehículo retirado: Marca: ${vehiculo.marca}, Placa: ${vehiculo.placa}, ` +
                `Tiempo estacionado: ${tiempoEstacionado} horas y ${minutosEstacionados} minutos, Total a pagar: $${costo}`
            );
        } else {
            alert("❌ No se encontró un vehículo con la placa ingresada.");
            console.log("Error: Vehículo no encontrado.");
        }
    }

    // Mostrar todos los vehículos en el parqueadero
    mostrarVehiculos() {
        if (this.vehiculos.length === 0) {
            alert("El parqueadero está vacío.");
            console.log("El parqueadero está vacío.");
        } else {
            console.log("Vehículos en el parqueadero:");
            this.vehiculos.forEach((vehiculo, index) => {
                console.log(
                    `(${index + 1}) Marca: ${vehiculo.marca}, Placa: ${vehiculo.placa}, Hora de entrada: ${vehiculo.horaEntrada.toLocaleTimeString()}`
                );
            });
            alert("Consulta la consola para ver los vehículos registrados.");
        }
    }

    // Menú interactivo
    mostrarMenu() {
        let continuar = true;

        while (continuar) {
            const opcion = prompt(
                "Seleccione una opción:\n" +
                "1. Ingresar vehículo\n" +
                "2. Retirar vehículo\n" +
                "3. Mostrar vehículos\n" +
                "4. Salir"
            );

            switch (opcion) {
                case "1":
                    this.ingresarVehiculo();
                    break;
                case "2":
                    this.retirarVehiculo();
                    break;
                case "3":
                    this.mostrarVehiculos();
                    break;
                case "4":
                    continuar = false;
                    alert("Saliendo del sistema del parqueadero.");
                    break;
                default:
                    alert("Opción no válida. Intente nuevamente.");
            }
        }
    }
}

// Crear instancia del parqueadero y mostrar el menú
const miParqueadero = new Parqueadero();
miParqueadero.mostrarMenu();
