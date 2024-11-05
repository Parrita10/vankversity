/*Cree un programa que lea la edad de un usuario y muestre cuántos años tendrá el usuario
dentro de tantos años como éste indique. Por ejemplo, si el usuario tiene 20 años y quiere saber
cuántos años tendrá dentro de 15 años, el programa deberá mostrar que tendrá 35 años.*/

// Solicitar la edad actual del usuario
let edadActual = parseInt(prompt("Ingrese su edad actual: "));

// Solicitar la cantidad de años a añadir
let añosFuturos = parseInt(prompt("Ingrese la cantidad de años en el futuro que desea calcular: "));

// Calcular la edad futura
let edadFutura = edadActual + añosFuturos;

// Mostrar el resultado
console.log(`Dentro de ${añosFuturos} años, usted tendrá ${edadFutura} años.`);
alert(`Dentro de ${añosFuturos} años, usted tendrá ${edadFutura} años.`);

//---------------------------------------------------------------------------------------------------------------------------------------
 /*Cree un programa que lea dos números y muestre su producto, su módulo, su cociente, su
suma y su resta.*/

//Solicitar los números
let num1 = parseFloat(prompt("Ingresa el primer número: "));
let num2 = parseFloat(prompt("Ingresa el segundo número: "));
alert(`Producto: ${num1*num2}\nMódulo: ${num1%num2}\nCociente: ${num1/num2}\nSuma: ${num1+num2}\nResta: ${num1-num2}`);

//---------------------------------------------------------------------------------------------------------------------------------------
/*En un almacén de electrodomésticos se venden éstos a crédito y de contado. Si el cliente
compra a crédito, el valor del electrodoméstico aumenta en un 5% por cada mes que dure el
crédito. Cree un programa para un almacén donde el administrador ingrese el precio de un
electrodoméstico y el plazo en meses para pagarlo a crédito y muestre el valor fijo de las cuotas
mensuales que deberá pagar por el electrodoméstico.*/

// Solicitar el precio del electrodoméstico
let precioInicial = parseFloat(prompt("Ingrese el precio del electrodoméstico: "));

// Solicitar el plazo en meses
let mesesCredito = parseInt(prompt("Ingrese el plazo en meses para pagarlo a crédito:"));

// Calcular el aumento total (5% por cada mes)
let precioFinal = precioInicial * Math.pow(1.05, mesesCredito);

// Calcular el valor de la cuota mensual
let cuotaMensual = precioFinal / mesesCredito;

// Mostrar el valor de las cuotas mensuales
console.log(`El valor de la cuota mensual es: ${cuotaMensual.toFixed(2)}`);
alert(`El valor de la cuota mensual es: ${cuotaMensual.toFixed(2)}`);

//---------------------------------------------------------------------------------------------------------------------------------------
/*Cree un programa que tome la base y la altura de un triángulo e imprima su área.*/

//Solicitar base del Triangulo
let baseTriangulo = parseFloat(prompt("Ingrese la base del triangulo: "));

//Solicitar altura del Triangulo
let alturaTriangulo = parseFloat(prompt("Ingrese la altura del triangulo: "));

//Calcular el area del Triangulo
let areaTriangulo = (baseTriangulo * alturaTriangulo)/2;

// Mostrar el área del triángulo
console.log(`El área del triángulo es: ${areaTriangulo}`);
alert(`El área del triángulo es: ${areaTriangulo}`);

//---------------------------------------------------------------------------------------------------------------------------------------
/*Cree un programa que tome el radio de un círculo e imprima su área y perímetro.*/

//Solicitar radio del Circulo
let radioCirculo = parseFloat(prompt("Ingrese el Radio del circulo: "));

//Calcular el area del Circulo
let areaCirculo = Math.PI * Math.pow(radioCirculo, 2);

//Calcular el perimetro del Circulo
let perimetroCirculo = 2 * Math.PI * radioCirculo;

// Mostrar el area y perimetro del circulo
console.log(`El área del circulo es: ${areaCirculo.toFixed(2)}\nEl perímetro del circulo es: ${perimetroCirculo.toFixed(2)}`);
alert(`El área del circulo es: ${areaCirculo.toFixed(2)}\nEl perímetro del circulo es: ${perimetroCirculo.toFixed(2)}`);

//---------------------------------------------------------------------------------------------------------------------------------------

/*Cree un programa que tome el lado de un cubo e imprima su volumen.*/

// Solicitar el lado del cubo
let lado = parseFloat(prompt("Ingrese la longitud del lado del cubo: "));

// Calcular el volumen del cubo
let volumen = Math.pow(lado, 3);

// Mostrar el volumen del cubo
console.log(`El volumen del cubo es: ${volumen}`);
alert(`El volumen del cubo es: ${volumen}`);

//---------------------------------------------------------------------------------------------------------------------------------------
/*Cree un programa que tome el precio de un producto e imprima su precio final al consumidor
con un IVA de 19%.*/

// Solicitar valor del producto
let precioProducto = parseFloat(prompt("Ingrese el valor del producto: "));

//Calcular el valor del producto
let precioProductoIva = precioProducto * 1.19;

//Mostrar el precio final al consumidor
console.log(`El precio final al consumidor con un IVA de 19% es: ${precioProductoIva}`);
alert(`El precio final al consumidor con IVA es: ${precioProductoIva}`)

//---------------------------------------------------------------------------------------------------------------------------------------
/*Cree un programa que tome el valor de un producto e imprima su precio final si éste tiene
siempre un descuento del 10%.*/

//Solicitamos el valor del producto
let valorProducto = parseFloat(prompt("Ingrese el valor del producto: "));

//Calcular el precio final con el descuento
let valorFinal = valorProducto * 0.90;

// Mostrar el precio final al consumidor
console.log(`El valor final del producto con el 10% de descuento es ${valorProducto}`);
alert(`El valor final del producto con el 10% de descuento es ${valorProducto}`)

//---------------------------------------------------------------------------------------------------------------------------------------
/*Cree un programa que lea una cantidad e imprima un porcentaje a calcular requerido sobre
esa cantidad.*/

//Solicitamos la cantidad deseada
let cantidad = parseFloat(prompt("Ingrese la cantidad: "));

//Solicitamos el porcentaje que desea calcular
let porcentaje = parseFloat(prompt("Ingrese el porcentaje a calcular (SIN EL SIMBOLO %: "));

//Calculamos el porcentaje
let resultado = (cantidad * porcentaje) / 100 ;

//Mostrar el porcentaje requerido
console.log(`El ${porcentaje}% de ${cantidad} es ${resultado}`);
alert(`El ${porcentaje}% de ${cantidad} es ${resultado}`);

//---------------------------------------------------------------------------------------------------------------------------------------
/*Cree un programa que tome un número real e imprima su valor absoluto.*/

// Solicitar el número real
let numero = parseFloat(prompt("Ingrese un número real:"));

// Calcular el valor absoluto
let valorAbsoluto = Math.abs(numero);

// Mostrar el valor absoluto
console.log(`El valor absoluto de ${numero} es: ${valorAbsoluto}`);
alert(`El valor absoluto de ${numero} es: ${valorAbsoluto}`);

//---------------------------------------------------------------------------------------------------------------------------------------
/*Cree un programa que simule el lanzamiento de dos dados y muestre la suma de los
resultados*/

// Generar números aleatorios entre 1 y 6 para cada dado
let dado1 = Math.floor(Math.random() * 6) + 1;
let dado2 = Math.floor(Math.random() * 6) + 1;

// Calcular la suma de los resultados
let suma = dado1 + dado2;

// Mostrar los resultados
console.log(`Resultado del dado 1: ${dado1}`);
console.log(`Resultado del dado 2: ${dado2}`);
console.log(`La suma de los dos dados es: ${suma}`);
alert(`Resultado del dado 1: ${dado1}\nResultado del dado 2: ${dado2}\nLa suma de los dos dados es: ${suma}`);

//---------------------------------------------------------------------------------------------------------------------------------------
/*Cree un programa que realice la conversión de grados Celsius a Fahrenheit*/

// Solicitar la temperatura en grados Celsius
let celsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius:"));

// Convertir a Fahrenheit
let fahrenheit = (celsius * 9/5) + 32;

// Mostrar el resultado
console.log(`La temperatura en Fahrenheit es: ${fahrenheit.toFixed(2)}`);
alert(`La temperatura en Fahrenheit es: ${fahrenheit.toFixed(2)}`);

//---------------------------------------------------------------------------------------------------------------------------------------
/*Cree un programa que calcule el factorial de 5*/

// Inicializar el resultado del factorial
let factorial = 1;

// Calcular el factorial de 5
for (let i = 1; i <= 5; i++) {
    factorial *= i;
}

// Mostrar el resultado
console.log(`El factorial de 5 es: ${factorial}`);
alert(`El factorial de 5 es: ${factorial}`);

//---------------------------------------------------------------------------------------------------------------------------------------
/*Cree un programa que genere un número aleatorio dentro de un rango específico.*/

// Solicitar el límite inferior del rango
let minimo = parseInt(prompt("Ingrese el límite inferior del rango:"));

// Solicitar el límite superior del rango
let maximo = parseInt(prompt("Ingrese el límite superior del rango:"));

// Generar un número aleatorio en el rango especificado
let numeroAleatorio = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;

// Mostrar el número aleatorio generado
console.log(`El número aleatorio generado entre ${minimo} y ${maximo} es: ${numeroAleatorio}`);
alert(`El número aleatorio generado entre ${minimo} y ${maximo} es: ${numeroAleatorio}`);

//---------------------------------------------------------------------------------------------------------------------------------------
/*Cree un programa que calcule horas y minutos a partir de segundos.*/

// Solicitar la cantidad de segundos
let segundos = parseInt(prompt("Ingrese la cantidad de segundos:"));

// Calcular las horas y los minutos
let horas = Math.floor(segundos / 3600);
let minutos = Math.floor((segundos % 3600) / 60);
let segundosRestantes = segundos % 60;

// Mostrar el resultado
console.log(`Horas: ${horas}, Minutos: ${minutos}, Segundos: ${segundosRestantes}`);
alert(`Horas: ${horas}, Minutos: ${minutos}, Segundos: ${segundosRestantes}`);

//---------------------------------------------------------------------------------------------------------------------------------------
/*Cree un programa que dados a, b y c, use la fórmula general para resolver la ecuación
cuadrática correspondiente.*/












