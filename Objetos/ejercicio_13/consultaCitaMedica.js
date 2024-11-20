/*Cree un programa que cumpla con los siguientes requerimientos: En una clínica, se
requiere un programa donde el usuario pueda consultar el día de su cita mediante su
documento. La cita debe tener día y fecha. Si el usuario consulta, el programa debe
mostrarle sus nombres, seguidos del día y hora de su cita. Una vez hecha la consulta, el
programa le debe mostrar al usuario un mensaje preguntándole si desea cambiar el día ó
fecha de su cita, de ser así el programa debe realizar tal cambio y mostrarle al usuario que
el cambio solicitado ha sido exitoso.*/

// Objeto que gestiona las citas médicas
const gestionCitas = {
    citas: [
        {
            documento: "12345678",
            nombres: "Juan Pérez",
            dia: "Lunes",
            hora: "10:00 AM"
        },
        {
            documento: "87654321",
            nombres: "María López",
            dia: "Miércoles",
            hora: "2:00 PM"
        },
        {
            documento: "11223344",
            nombres: "Carlos Gómez",
            dia: "Viernes",
            hora: "9:00 AM"
        }
    ],

    // Método para consultar cita por documento
    consultarCita: function (documento) {
        const cita = this.citas.find(c => c.documento === documento);

        if (!cita) {
            alert("No se encontró una cita con ese documento.");
            console.log("No se encontró una cita con ese documento.");
            return;
        }

        // Mostrar información de la cita
        const mensajeCita = `Hola ${cita.nombres}, tu cita es el ${cita.dia} a las ${cita.hora}.`;
        alert(mensajeCita);
        console.log(mensajeCita);

        // Preguntar si desea cambiar el día u hora
        const deseaCambiar = confirm("¿Deseas cambiar el día u hora de tu cita?");
        if (deseaCambiar) {
            const nuevoDia = prompt("Ingresa el nuevo día para tu cita:");
            const nuevaHora = prompt("Ingresa la nueva hora para tu cita:");

            // Actualizar los datos de la cita
            cita.dia = nuevoDia;
            cita.hora = nuevaHora;

            const mensajeCambio = `El cambio de cita fue exitoso. Tu nueva cita es el ${cita.dia} a las ${cita.hora}.`;
            alert(mensajeCambio);
            console.log(mensajeCambio);
        } else {
            alert("No se realizaron cambios en tu cita.");
            console.log("No se realizaron cambios en tu cita.");
        }
    }
};

// Ejecutamos
const documentoUsuario = prompt("Ingresa tu documento para consultar la cita:");
console.log(`Documento ingresado: ${documentoUsuario}`);
gestionCitas.consultarCita(documentoUsuario);
