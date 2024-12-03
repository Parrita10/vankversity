alert("Iniciando el Programa 1a: Este programa genera una cadena formada únicamente por la base indicada.");
// Programa 1a: Cadena formada por una única base
function generarCadenaUnica(base, longitud) {
    return base.repeat(longitud);
}

alert(generarCadenaUnica("A", 10)); // Ejemplo de uso

alert("Iniciando el Programa 1b: Este programa genera una cadena con dos bases seleccionadas aleatoriamente.");
// Programa 1b: Cadena formada por dos bases seleccionadas aleatoriamente
function generarCadenaDosBases(longitud) {
    const bases = ["A", "T", "C", "G"];
  const base1 = bases[Math.floor(Math.random() * 4)];
  let base2;
  do {
    base2 = bases[Math.floor(Math.random() * 4)];
  } while (base1 === base2);

  let cadena = "";
  for (let i = 0; i < longitud; i++) {
    cadena += Math.random() < 0.5 ? base1 : base2;
  }
  return cadena;
}

alert(generarCadenaDosBases(10)); // Ejemplo de uso

alert("Iniciando el Programa 1c: Este programa genera una cadena con distribución específica de bases y longitud múltiplo de 10.");
// Programa 1c: Cadena con distribución específica y longitud múltiplo de 10
function generarCadenaDistribuida(longitud) {
    if (longitud % 10 !== 0) {
    return "La longitud debe ser múltiplo de 10.";
  }

  const cantidadG = longitud / 10;
  const cantidadC = cantidadG * 4;
  const cantidadT = cantidadG * 2;
  const cantidadA = cantidadG * 3;
  const bases = "G".repeat(cantidadG) + "C".repeat(cantidadC) + "T".repeat(cantidadT) + "A".repeat(cantidadA);

  return bases.split("").sort(() => Math.random() - 0.5).join(""); // Mezclar aleatoriamente
}

alert(generarCadenaDistribuida(20)); // Ejemplo de uso

alert("Iniciando el Programa 1d: Este programa genera una cadena con dos bases seleccionadas aleatoriamente, respetando un porcentaje específico.");
// Programa 1d: Cadena con dos bases y distribución porcentual
function generarCadenaConPorcentaje(longitud, porcentajeBase1) {
    if (porcentajeBase1 < 1 || porcentajeBase1 > 99) {
    return "El porcentaje debe estar entre 1% y 99%.";
  }

  const bases = ["A", "T", "C", "G"];
  const base1 = bases[Math.floor(Math.random() * 4)];
  let base2;
  do {
    base2 = bases[Math.floor(Math.random() * 4)];
  } while (base1 === base2);

  const cantidadBase1 = Math.round((porcentajeBase1 / 100) * longitud);
  const cantidadBase2 = longitud - cantidadBase1;
  const cadena = base1.repeat(cantidadBase1) + base2.repeat(cantidadBase2);

  return cadena.split("").sort(() => Math.random() - 0.5).join("");
}

alert(generarCadenaConPorcentaje(10, 70)); // Ejemplo de uso

alert("Iniciando el Programa 2a: Este programa encuentra la primera posición de la segunda cadena en la primera.");
// Programa 2a: Encontrar la primera posición de la segunda cadena en la primera
function encontrarPrimeraPosicion(secuencia1, secuencia2) {
    return secuencia1.indexOf(secuencia2);
}

alert(encontrarPrimeraPosicion("AAAGTCCAGGTTTT", "TCC")); // Ejemplo de uso

alert("Iniciando el Programa 2b: Este programa cuenta cuántas veces aparece la segunda cadena en la primera.");
// Programa 2b: Contar cuántas veces aparece la segunda cadena en la primera
function contarApariciones(secuencia1, secuencia2) {
    let contador = 0;
  let posicion = secuencia1.indexOf(secuencia2);
  while (posicion !== -1) {
    contador++;
    posicion = secuencia1.indexOf(secuencia2, posicion + 1);
  }
  return contador;
}

alert(contarApariciones("AAAGTCCAGGTTTT", "TCC")); // Ejemplo de uso

alert("Iniciando el Programa 3a: Este programa muestra la frecuencia de bases consecutivas en una cadena de ADN.");
// Programa 3a: Formato de frecuencia de bases consecutivas
function formatoFrecuencia(cadena) {
    let resultado = "";
  let contador = 1;

  for (let i = 1; i < cadena.length; i++) {
    if (cadena[i] === cadena[i - 1]) {
      contador++;
    } else {
      resultado += cadena[i - 1] + contador + ",";
      contador = 1;
    }
  }

  resultado += cadena[cadena.length - 1] + contador;
  return resultado;
}

alert(formatoFrecuencia("AAAGTCCAGGTTTT")); // Ejemplo de uso
