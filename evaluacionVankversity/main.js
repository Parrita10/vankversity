/*Cree un programa que genera las tablas de multiplicar  de 1 a 10 de los primeros 5 numeros naturales
Ejemplo:
1x1 =1     1x2=2     1x...    1x10 = 10
2x1 = 2    2x2 = 4     2x...     2x10 = 20
3x1...etc etc*/

//Creamos la funcion 

function generarTablas(){
    for( let i = 1; i <= 5; i++){
        console.log(`Tabla del ${i}: `);
        for ( let j = 1; j <= 10; j++){
            console.log(`${i} x ${j} = ${i * j}`);
        }
        console.log(' ');
    }
}

// generarTablas();

//-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

/*Escriba un programa que reciba una cadena de caracteres. La función debe crear y mostrar una tabla donde
cada celda (i,j) contienen la concatenación de los caracteres en la posición i,j de la cadera*/

//Creamos la funcion 

function miFuncion(cadena){
    for (let i = 0; i < cadena.length; i++){
        let fila = '';
        for (let j = 0; j < cadena.length; j++){
            fila += cadena[i] + cadena[j] + ' ';
        }
        console.log(fila.trim());
    }
}
miFuncion("xyz");

//-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

/*Realiza un programa el cual muestre un menú al usuario el cual dependiendo de la letra que el usuario ingrese realice determinada acción:

"s" para sumar
"r" para restar
"m" para multiplicar
"d" para dividir
"c" para realizar una cuenta regresiva de n hasta 0 (n debe ser ingresado por el usuario)
"p" para verificar si es divisible por 2 y 3
"x" para salir


Las funciones básicas (suma, resta, multiplicación, división) deberán ser funciones las cuales se invoquen en el momento que 
el cliente ingrese la letra correspondiente, antes de ser invocadas se deben de pedir 2 valores los cuales serán los operados 
según la operación elegida, estos 2 valores serán pasados como parámetros dependiendo a la función que sea solicitada, 
Dicha función debe retornar el valor de los dos números operados.

(NOTA: En caso de que se realiza una división por 0 debe de hacerse control del error indicando que no es posible la división, 
así evitando que el programa colapse")

Para la opción de cuenta regresiva se pedirá un numero n al cliente y se realizará una cuenta regresiva de dicho número hasta 0, 
el valor n debe ser pasado como parámetro al momento invocar la función de cuenta regresiva.

Para la opción "p" divisible por 2 y 3, se pedirá un numero n al cliente y se enviara como parámetro a una función la cual se 
encargará de validar si el número que ingreso el usuario es divisible por 2 y 3, En caso de que sea divisible por ambos números 
la función debe imprimir en consola un mensaje indicándonos que el numero cumple con las condiciones, del caso contrario imprimir 
un mensaje en consola indicando que el número no cumple con las condiciones.  

Para la opción "x" se dará por finalizado el programa dando un mensaje al usuario indicando que el programa ha acabado.

*Requerimientos adicionales: El programa debe contar con al menos 2 funciones las cuales sean realizadas por medio de funciones flecha. */


// Funciones basicas de operacion

const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;

function dividir(a, b){
    if (b === 0){
        console.log("Error: No es posible dividir entre 0.");
        return null;
    }
    return a / b;
}

// Funcion para cuenta regresiva 

function cuentaRegresiva(n){
    for (let i = n; i >= 0; i--){
        console.log(i);
    }
}

// Funcion para verificar si un numero es divisible por 2 y 3

const esDivisiblePor2y3 = (num) => {
    if (num % 2 === 0 && num % 3 === 0){
        console.log("El numero es divisible por 2 y 3.");
    }else{
        console.log("El numero no es divisible por 2 y 3.")
    }
};

//Funcion principal que muestra el menu y realiza las acciones

function menu(){
    let opcion;
    do {
        opcion = prompt(`Seleccione una opcion:
            s - Sumar
            r - Restar
            m - Multiplicar
            d - Dividir
            c - Cuenta regresiva
            p - Verificar si es divisible por 2 y 3
            x - Salir
            `);

            switch (opcion) {
                case "s":
                    const aSuma = parseFloat(prompt(`Ingrese el primer número para sumar: `));
                    const bSuma = parseFloat(prompt(`Ingrese el segundo número para sumar: `));
                    console.log("Resultado de la suma: ", sumar(aSuma, bSuma));
                    break;

                case "r":
                    const aResta = parseFloat(prompt(`Ingrese el primer número para restar: `));
                    const bResta = parseFloat(prompt(`Ingrese el segundo número para restar: `));
                    console.log("Resultado de la resta: ", restar(aResta, bResta));
                    break;

                case "m":
                    const aMulti = parseFloat(prompt(`Ingrese el primer número para multiplicar: `));
                    const bMulti = parseFloat(prompt(`Ingrese el segundo número para multiplicar: `));
                    console.log("Resultado de la multiplicacion: ", multiplicar(aMulti, bMulti));
                    break;

                case "d":
                    const aDiv = parseFloat(prompt(`Ingrese el primer número para dividir: `));
                    const bDiv = parseFloat(prompt(`Ingrese el segundo número para dividir: `));
                    console.log("Resultado de la division: ", dividir(aDiv, bDiv));
                    break;

                case "c":
                    const nCuenta = parseInt(prompt("Ingrese un número para la cuenta regresiva: "));
                    cuentaRegresiva(nCuenta);
                    break;

                case "p":
                    const num = parseInt(prompt("Ingrese un número para verificar divisibilidad por 2 y 3: "));
                    esDivisiblePor2y3(num);
                    break;

                case "x":
                    console.log("El programa ha finalizado. ");
                    break;
                default:
                    console.log("Opcion no valida. Por favor, intente de nuevo. ");
            }
           } while (opcion !== "x");
}

//Ejecutamos el programa
menu();


//Respuesta ejercicio
/*1). La función utiliza Math.random y Math.floor para generar un numero aleatorio entre 1 y 10. Este valor se almacena en la variable num.

2). La función entra en un bucle while (true), lo que significa que el bucle se va repetir indefinidamente hasta que encuentre un break.

3). Dentro del bucle, se solicita al usuario que ingrese un numero entre 1 y 10 y este valor se convierte en un numero entero mediante parseInt y se almacena en la variable r

4). Se compara el numero igresado (r) con el numero aleatorio que fue generado al inicio (num).

Si el numero ingresado r es igual al numero aleatorio num, se ejecuta el break y termina el bucle.

si r es diferente de num, el ciclo continua y el usuario tiene otra oportunidad para adivinar el numero

5). Cuando el usuario acierta el numero (r==num), el bucle se rompe y muestra el mensaje " Fin" en la consola.*/

//Respuesta ejercicio