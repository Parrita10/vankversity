/*Escriba una función la cual permita o no la entrada a un parque de atracciones, 
dicha función recibe la edad, estatura y permiso parental como parámetros. 
Para permitir el acceso el usuario deberá de ser mayor de edad y medir más de 150 cm, 
en caso de ser menor de edad debe contar con un permiso parental para que sea concedido el acceso.*/

// Función para determinar si una persona puede ingresar al parque
function permitirAcceso(edad, estatura, permisoParental) {
    if (edad >= 18 && estatura > 150) {
        return "Acceso permitido: eres mayor de edad y cumples con la estatura requerida.";
    } else if (edad < 18 && estatura > 150 && permisoParental) {
        return "Acceso permitido: eres menor de edad, pero cuentas con el permiso parental y la estatura requerida.";
    } else {
        return "Acceso denegado: no cumples con los requisitos para ingresar.";
    }
}

// Solicitar datos al usuario
let edad = parseInt(prompt("Ingrese su edad:"));
let estatura = parseFloat(prompt("Ingrese su estatura en centímetros:"));
let permisoParental = confirm("¿Tienes permiso parental? (Aceptar para Sí, Cancelar para No)");

// Llamar a la función y mostrar el resultado
let mensaje = permitirAcceso(edad, estatura, permisoParental);
alert(mensaje);

