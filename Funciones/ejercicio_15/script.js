/*Escriba una función generarContraseña la cual reciba n como parámetro y esta 
cree una contraseña de n caracteres aleatorios.(Los caracteres pueden ser números, letras o signos).*/

// Función para generar una contraseña aleatoria
function generarContraseña(n) {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?"; // Caracteres disponibles
    let contraseña = "";

    for (let i = 0; i < n; i++) {
        // Seleccionar un carácter aleatorio de la lista de caracteres
        let indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        contraseña += caracteres.charAt(indiceAleatorio);
    }

    return contraseña; // Retornar la contraseña generada
}

// Pedir al usuario el número de caracteres para la contraseña
let n = parseInt(prompt("Ingrese el número de caracteres para la contraseña:"));

// Validar que el usuario ingrese un número válido
if (n > 0) {
    let contraseñaGenerada = generarContraseña(n);
    alert(`Tu contraseña generada es: ${contraseñaGenerada}`);
} else {
    alert("Por favor, ingrese un número válido mayor a 0.");
}
