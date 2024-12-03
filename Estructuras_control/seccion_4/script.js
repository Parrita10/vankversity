// Ejercicio 1: Determinar si un número es primo
alert("Ejercicio 1: Este programa determina si un número es primo.");
const numeroPrimo = Number(prompt("Ingrese un número para verificar si es primo:"));
alert(esPrimo(numeroPrimo));
function esPrimo(numero) {
    if (numero < 2) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) return false;
    }
    return true;
}

// Ejercicio 2: Determinar si un número es reversible
alert("Ejercicio 2: Este programa determina si un número es reversible.");
const numeroReversible = Number(prompt("Ingrese un número entre 0 y 999 para verificar si es reversible:"));
alert(esReversible(numeroReversible));
function esReversible(numero) {
    if (numero < 0 || numero > 999) return false;
    const invertido = parseInt(numero.toString().split('').reverse().join(''));
    const suma = numero + invertido;
    return suma.toString().split('').every(digito => parseInt(digito) % 2 !== 0);
}

// Ejercicio 3: Cantidad de ocurrencias del dígito que más se repite
alert("Ejercicio 3: Este programa determina la cantidad de ocurrencias del dígito que más se repite en un número.");
const numeroOcurrencias = Number(prompt("Ingrese un número para verificar las ocurrencias del dígito más repetido:"));
alert(digitoMasRepetido(numeroOcurrencias));
function digitoMasRepetido(numero) {
    const conteo = {};
    numero.toString().split('').forEach(digito => {
        conteo[digito] = (conteo[digito] || 0) + 1;
    });
    return Math.max(...Object.values(conteo));
}

// Ejercicio 4: Generar números pares con tres dígitos
alert("Ejercicio 4: Este programa genera todos los números pares que se pueden formar con tres dígitos proporcionados.");
const digito1 = Number(prompt("Ingrese el primer dígito:"));
const digito2 = Number(prompt("Ingrese el segundo dígito:"));
const digito3 = Number(prompt("Ingrese el tercer dígito:"));
alert(numerosPares(digito1, digito2, digito3));
function numerosPares(digito1, digito2, digito3) {
    const digitos = [digito1, digito2, digito3];
    const pares = new Set();
    digitos.forEach(a => {
        digitos.forEach(b => {
            digitos.forEach(c => {
                const numero = parseInt(`${a}${b}${c}`);
                if (numero % 2 === 0) pares.add(numero);
            });
        });
    });
    return Array.from(pares);
}

// Ejercicio 5: Cálculo de una serie (sin detalle de fórmula exacta)
alert("Ejercicio 5: Este programa calcula el resultado de una serie.");


// Ejercicio 6: Cociente mediante restas sucesivas
alert("Ejercicio 6: Este programa calcula el cociente de dos números mediante restas sucesivas.");
const dividendo = Number(prompt("Ingrese el dividendo:"));
const divisor = Number(prompt("Ingrese el divisor:"));
alert(cocienteRestas(dividendo, divisor));
function cocienteRestas(dividendo, divisor) {
    if (divisor === 0) return "División por cero no permitida";
    let cociente = 0;
    while (dividendo >= divisor) {
        dividendo -= divisor;
        cociente++;
    }
    return cociente;
}

// Ejercicio 7: Potencia mediante multiplicaciones
alert("Ejercicio 7: Este programa calcula la potencia de un número mediante multiplicaciones sucesivas.");
const base = Number(prompt("Ingrese la base:"));
const exponente = Number(prompt("Ingrese el exponente:"));
alert(potencia(base, exponente));
function potencia(a, b) {
    if (b === 0) return 1;
    let resultado = 1;
    for (let i = 0; i < b; i++) {
        resultado *= a;
    }
    return resultado;
}

// Ejercicio 8: Serie -2, 6, -8, 12, -14...
alert("Ejercicio 8: Este programa genera la serie -2, 6, -8, 12, ... hasta n términos.");
const nTerminos = Number(prompt("Ingrese el número de términos de la serie:"));
alert(generarSerie(nTerminos));
function generarSerie(n) {
    const serie = [];
    let valor = -2;
    for (let i = 1; i <= n; i++) {
        serie.push(valor);
        valor = (valor > 0 ? -valor : -valor + 2);
    }
    return serie;
}

// Ejercicio 9: Descomponer en factores primos
alert("Ejercicio 9: Este programa descompone un número en sus factores primos.");
const numeroFactores = Number(prompt("Ingrese un número para descomponer en factores primos:"));
alert(factoresPrimos(numeroFactores));
function factoresPrimos(numero) {
    const factores = [];
    let divisor = 2;
    while (numero > 1) {
        while (numero % divisor === 0) {
            factores.push(divisor);
            numero /= divisor;
        }
        divisor++;
    }
    return factores.join(' x ');
}

// Ejercicio 10: Número perfecto
alert("Ejercicio 10: Este programa verifica si un número es perfecto.");
const numeroPerfecto = Number(prompt("Ingrese un número para verificar si es perfecto:"));
alert(esPerfecto(numeroPerfecto));
function esPerfecto(numero) {
    let suma = 0;
    for (let i = 1; i <= numero / 2; i++) {
        if (numero % i === 0) suma += i;
    }
    return suma === numero;
}

// Ejercicio 11: Calcular MCD
alert("Ejercicio 11: Este programa calcula el máximo común divisor de dos números.");
const numero1MCD = Number(prompt("Ingrese el primer número:"));
const numero2MCD = Number(prompt("Ingrese el segundo número:"));
alert(mcd(numero1MCD, numero2MCD));
function mcd(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Ejercicio 12: Calcular MCM
alert("Ejercicio 12: Este programa calcula el mínimo común múltiplo de dos números.");
const numero1MCM = Number(prompt("Ingrese el primer número:"));
const numero2MCM = Number(prompt("Ingrese el segundo número:"));
alert(mcm(numero1MCM, numero2MCM));
function mcm(a, b) {
    return (a * b) / mcd(a, b);
}

// Ejercicio 13: Generar triángulo
alert("Ejercicio 13: Este programa genera un triángulo con un patrón específico basado en un número dado.");
const nTriangulo = Number(prompt("Ingrese el tamaño del triángulo:"));
alert(generarTriangulo(nTriangulo));
function generarTriangulo(n) {
    let triangulo = "";
    for (let i = 1; i <= n; i++) {
        triangulo += "* ".repeat(i).trim() + "\n";
    }
    for (let i = n - 1; i >= 1; i--) {
        triangulo += "* ".repeat(i).trim() + "\n";
    }
    return triangulo.trim();
}

// Ejercicio 14: Números amigos
alert("Ejercicio 14: Este programa determina si dos números son amigos.");
const numero1Amigo = Number
