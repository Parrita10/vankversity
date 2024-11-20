/*Cree un programa el cual cumpla con los siguientes requerimientos, muestre la lista de
inscritos y permita actualizar sus calificaciones.
● Crear un arreglo estudiantes donde cada elemento sea un objeto con
nombre, edad, matrícula y calificaciones (un arreglo de números).
● Crear una función calcularPromedio que reciba una matrícula y devuelva el
promedio de calificaciones de ese estudiante.
● Crear una función actualizarCalificaciones que reciba la matrícula y un nuevo
arreglo de calificaciones, y actualice la información del estudiante
correspondiente.*/

// Objeto que gestiona la información de estudiantes y operaciones
const gestionEstudiantes = {
    estudiantes: [
        {
            nombre: "Juan Pérez",
            edad: 20,
            matricula: "MAT001",
            calificaciones: [90, 85, 88]
        },
        {
            nombre: "María López",
            edad: 22,
            matricula: "MAT002",
            calificaciones: [78, 82, 91]
        },
        {
            nombre: "Carlos Gómez",
            edad: 21,
            matricula: "MAT003",
            calificaciones: [95, 89, 92]
        }
    ],

    // Método para calcular el promedio de un estudiante por su matrícula
    calcularPromedio: function (matricula) {
        const estudiante = this.estudiantes.find(e => e.matricula === matricula);

        if (!estudiante) {
            alert("No se encontró al estudiante con esa matrícula.");
            console.log("No se encontró al estudiante con esa matrícula.");
            return null;
        }

        const total = estudiante.calificaciones.reduce((acc, calificacion) => acc + calificacion, 0);
        const promedio = total / estudiante.calificaciones.length;

        const mensaje = `El promedio de ${estudiante.nombre} es: ${promedio.toFixed(2)}`;
        alert(mensaje);
        console.log(mensaje);

        return promedio;
    },

    // Método para actualizar las calificaciones de un estudiante
    actualizarCalificaciones: function (matricula, nuevasCalificaciones) {
        const estudiante = this.estudiantes.find(e => e.matricula === matricula);

        if (!estudiante) {
            alert("No se encontró al estudiante con esa matrícula.");
            console.log("No se encontró al estudiante con esa matrícula.");
            return;
        }

        estudiante.calificaciones = nuevasCalificaciones;

        const mensaje = `Calificaciones actualizadas para ${estudiante.nombre}. Nuevas calificaciones: ${nuevasCalificaciones.join(", ")}`;
        alert(mensaje);
        console.log(mensaje);
    },

    // Método para mostrar la lista de estudiantes
    mostrarEstudiantes: function () {
        const mensaje = "Lista de estudiantes:\n" + this.estudiantes
            .map(e => `Nombre: ${e.nombre}, Edad: ${e.edad}, Matrícula: ${e.matricula}, Calificaciones: ${e.calificaciones.join(", ")}`)
            .join("\n");

        alert(mensaje);
        console.log(mensaje);
    }
};

// Simulación del programa
gestionEstudiantes.mostrarEstudiantes();

const matriculaConsulta = prompt("Ingresa la matrícula del estudiante para calcular su promedio:");
gestionEstudiantes.calcularPromedio(matriculaConsulta);

const matriculaActualizacion = prompt("Ingresa la matrícula del estudiante para actualizar sus calificaciones:");
const nuevasCalificaciones = prompt("Ingresa las nuevas calificaciones separadas por comas (ejemplo: 85,90,88):")
    .split(",")
    .map(num => parseFloat(num.trim())); // Convertir las calificaciones a números
gestionEstudiantes.actualizarCalificaciones(matriculaActualizacion, nuevasCalificaciones);

gestionEstudiantes.mostrarEstudiantes();
