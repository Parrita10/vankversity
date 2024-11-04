//Escriba una función la cual reciba una cadena como parámetro y ésta retorne la misma cadena pero sin sus vocales.

function eliminarVocales(cadena) {
    return cadena.replace(/[aeiouAEIOU]/g, '');
}

// Solicitamos al usuario que ingrese una cadena
let cadenaUsuario = prompt("Ingresa una cadena:");
let resultado = eliminarVocales(cadenaUsuario);

// Mostrar el resultado
alert("La cadena sin vocales es: " + resultado);


//Escriba una función que al llamarla retorne un número entero aleatorio entre 1 y 20.

function numeroAleatorioEntre1y20() {
    return Math.floor(Math.random() * 20) + 1;
}
// Esto imprimirá un número aleatorio entre 1 y 20 cada vez que se ejecute.
console.log(numeroAleatorioEntre1y20()); 

//Escriba una función la cual reciba 5 notas de un estudiante y genere un mensaje
//informando si el estudiante aprobó o no la materia, para que la materia se de como
//aprobada el promedio del estudiante debe ser mayor o igual a 3,0.

function verificarAprobacion(nota1, nota2, nota3, nota4, nota5) {
    // Calculamos el promedio de las 5 notas
    const promedio = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;
    
    // Verificamos si el promedio es mayor o igual a 3.0
    if (promedio >= 3.0) {
        return `El estudiante aprobó con un promedio de ${promedio.toFixed(2)}.`;
    } else {
        return `El estudiante no aprobó, su promedio es ${promedio.toFixed(2)}.`;
    }
}

// Ejemplo de uso
console.log(verificarAprobacion(3.5, 4.0, 2.8, 3.0, 3.2));
