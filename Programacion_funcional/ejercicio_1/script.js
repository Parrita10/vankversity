/*Escribe una función sumar que reciba dos números y un callback. El callback debe
ser ejecutado con el resultado de la suma.*/

function sumar(a, b, callback){
    const resultado = a+b;
    callback(resultado);
}

//Modo de uso
sumar(3, 5, (resultado) =>{
    console.log(`El resultado de la suma es: ${resultado}`);
});