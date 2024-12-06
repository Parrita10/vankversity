/*Cree una función que reciba un arreglo de cadenas de ADN (las cadenas estarán
formadas por las letras A o C o T o G referirse a taller de ADN pasado) y muestre la
cadena de ADN con mayor número de Timina (T).*/

function cadenaConMasTimina(adnCadenas) {
    let maxTiminas = 0; // Variable para almacenar el máximo número de Timinas
    let cadenaConMaxTiminas = ""; // Cadena con el mayor número de Timinas
  
    adnCadenas.forEach(function(cadena) {
      // Contamos el número de Timinas (T) en la cadena actual
      let conteoT = 0;
      for (let letra of cadena) {
        if (letra === "T") {
          conteoT++;
        }
      }
  
      // Actualizamos si encontramos una cadena con más Timinas
      if (conteoT > maxTiminas) {
        maxTiminas = conteoT;
        cadenaConMaxTiminas = cadena;
      }
    });
  
    // Mostramos el resultado
    alert("La cadena con más Timinas (T) es: " + cadenaConMaxTiminas);
    alert("Número de Timinas (T) en la cadena: " + maxTiminas);
  }
  
  // Ejemplo de uso
  let cadenasADN = ["ACTT", "TGGGTT", "AACCTT", "TTTTG"];
  cadenaConMasTimina(cadenasADN);
  