//toLowerCase(): Convierte una cadena a minúsculas y toUpperCase(): Convierte una cadena a mayúsculas. 
// estos dos metodos no reemplasan el valor original de la variables

let string = "Hola, mundo!";
string = string.replace(string[0], string[0].toLowerCase());
console.log(string); // "hola, mundo!"

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// replace(): Este método busca una coincidencia en la cadena y la reemplaza por otra.

const originalString = "Hola, mundo!";
const nuevaCadena = originalString.replace("mundo", "amigo");
console.log(nuevaCadena); // "Hola, amigo!"

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Utiliza el método includes() para verificar si la cadena contiene una subcadena específica. 
// o sea compara si tienes una palabra o letra dentro de la variable string que quieras buscar y esta rertornara true o false

function checkSpam(str) {
    let palabra = str.toLowerCase();

    return palabra.includes('viagra') || palabra.includes('xxx');
  }

console.log( checkSpam('compra ViAgRA ahora') );
console.log( checkSpam('xxxxx gratis') );
console.log( checkSpam("coneja inocente") );

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

