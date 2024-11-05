/*Cree un programa que lea la edad de un usuario y muestre cuántos años tendrá el usuario
dentro de tantos años como éste indique. Por ejemplo, si el usuario tiene 20 años y quiere saber
cuántos años tendrá dentro de 15 años, el programa deberá mostrar que tendrá 35 años.*/

// Solicitar la edad actual del usuario
let edadActual = parseInt(prompt("Ingrese su edad actual:"));

// Solicitar la cantidad de años a añadir
let añosFuturos = parseInt(prompt("Ingrese la cantidad de años en el futuro que desea calcular:"));

// Calcular la edad futura
let edadFutura = edadActual + añosFuturos;

// Mostrar el resultado
console.log(`Dentro de ${añosFuturos} años, usted tendrá ${edadFutura} años.`);
alert(`Dentro de ${añosFuturos} años, usted tendrá ${edadFutura} años.`);

//---------------------------------------------------------------------------------------------------------------------------------------
 /*Cree un programa que lea dos números y muestre su producto, su módulo, su cociente, su
suma y su resta.*/

//Solicitar los números
let num1 = parseFloat(prompt("Ingresa el primer número"));
let num2 = parseFloat(prompt("Ingresa el segundo número"));
alert(`Producto: ${num1*num2}\nMódulo: ${num1%num2}\nCociente: ${num1/num2}\nSuma: ${num1+num2}\nResta: ${num1-num2}`);

//---------------------------------------------------------------------------------------------------------------------------------------
/*En un almacén de electrodomésticos se venden éstos a crédito y de contado. Si el cliente
compra a crédito, el valor del electrodoméstico aumenta en un 5% por cada mes que dure el
crédito. Cree un programa para un almacén donde el administrador ingrese el precio de un
electrodoméstico y el plazo en meses para pagarlo a crédito y muestre el valor fijo de las cuotas
mensuales que deberá pagar por el electrodoméstico.*/

// Solicitar el precio del electrodoméstico
let precioInicial = parseFloat(prompt("Ingrese el precio del electrodoméstico:"));

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
let baseTriangulo = parseFloat(prompt("Ingrese la base del triangulo"));

//Solicitar altura del Triangulo
let alturaTriangulo = parseFloat(prompt("Ingrese la altura del triangulo"));

//Calcular el area del Triangulo
let areaTriangulo = (baseTriangulo * alturaTriangulo)/2;

// Mostrar el área del triángulo
console.log(`El área del triángulo es: ${areaTriangulo}`);
alert(`El área del triángulo es: ${areaTriangulo}`);

//---------------------------------------------------------------------------------------------------------------------------------------
/*Cree un programa que tome el radio de un círculo e imprima su área y perímetro.*/

//Solicitar radio del Circulo
let radioCirculo = parseFloat(prompt("Ingrese el Radio del circulo"));

//Calcular el area del Circulo
let areaCirculo = Math.PI * Math.pow(radioCirculo, 2);

//Calcular el perimetro del Circulo
let perimetroCirculo = 2 * Math.PI * radioCirculo;

// Mostrar el area y perimetro del circulo
console.log(`El área del circulo es: ${areaCirculo.toFixed(2)}\nEl perímetro del circulo es: ${perimetroCirculo.toFixed(2)}`);
alert(`El área del circulo es: ${areaCirculo.toFixed(2)}\nEl perímetro del circulo es: ${perimetroCirculo.toFixed(2)}`);

//---------------------------------------------------------------------------------------------------------------------------------------





/*Cree un programa que tome el precio de un producto e imprima su precio final al consumidor
con un IVA de 19%.*/



/*Cree un programa que tome el valor de un producto e imprima su precio final si éste tiene
siempre un descuento del 10%.*/

/*Cree un programa que lea una cantidad e imprima un porcentaje a calcular requerido sobre
esa cantidad.*/

/*Cree un programa que tome un número real e imprima su valor absoluto.*/

/*Cree un programa que simule el lanzamiento de dos dados y muestre la suma de los
resultados*/

/*Cree un programa que realice la conversión de grados Celsius a Fahrenheit*/

/*Cree un programa que calcule el factorial de 5*/

/*Cree un programa que genere un número aleatorio dentro de un rango específico.*/

/*Cree un programa que calcule horas y minutos a partir de segundos.*/

/*Cree un programa que dados a, b y c, use la fórmula general para resolver la ecuación
cuadrática correspondiente.*/












