function showMessage() {
  console.log("¡Hola a todos!");
}

showMessage();

//////////////////////////////////////////////////////////////////////////////

//Una variable declarada dentro de una función solo es visible dentro de esa función.
function showMessage() {
  let message = "Hola, ¡Soy JavaScript!"; // variable local

  console.log(message);
}

showMessage(); // Hola, ¡Soy JavaScript!

console.log(message); // <-- ¡Error! La variable es local para esta función

///////////////////////////////////////////////////////////////////////////////

let userName = "Juan";

function showMessage() {
  let message = "Hola, " + userName;
  console.log(message);
}

showMessage(); // Hola, Juan

////////////////////////////////////////////////////////////////////////////////

let usuario = "Juan"; //La función tiene acceso completo a la variable externa. Puede modificarlo también.

function showMessage() {
  usuario = "Bob"; // (1) Cambió la variable externa

  let message = "Hola, " + usuario;
  console.log(message);
}

console.log(usuario); // Juan antes de llamar la función

showMessage();

console.log(usuario); // Bob, el valor fué modificado por la función

//////////////////////////////////////////////////////////////////////////////////////

// Si una variable con el mismo nombre se declara dentro de la función, le hace sombra a la externa. Por ejemplo, en el siguiente código, la función usa la variable nombre local. La exterior se ignora:

let nombre = "John de afuera";

function showMessage() {
  let nombre = "Bob de adentro"; // declara variable local

  let message = "Hello, " + nombre; // Bob
  console.log(message);
}

// la función crea y utiliza su propia variable local nombre
showMessage();

console.log(nombre); // John, se mantiene, la función no accedió a la variable externa

//////////////////////////////////////////////////////////////////////////////////////////

// Parámetros
// Podemos pasar datos arbitrarios a funciones usando parámetros.

// tenemos una variable from y la pasamos a la función. Tenga en cuenta: la función cambia from, pero el cambio no se ve afuera, porque una función siempre obtiene una copia del valor:

function showMessage(from, text) {
  from = "*" + from + "*"; // hace que "from" se vea mejor

  console.log(from + ": " + text);
}

let nombreUser = "Ann";

showMessage(nombreUser, "Hola"); // *Ann*: Hola

// el valor de "nombreUser" es el mismo, la función modificó una copia local
console.log(nombreUser); // Ann

//////////////////////////////////////////////////////////////////////////////////////////

// Valores predeterminados
function showMessage(
  autor,
  libro = "sin nombre",
  respuesta = anotherFunction()
) {
  console.log(
    "Autor: " +
      autor +
      ", " +
      " Titulo del libro: " +
      libro +
      ", " +
      " Comentario: " +
      respuesta
  );
}

showMessage("sofi"); // sofi: sin texto

function anotherFunction() {
  return "no tenemos respuestas";
}

//////////////////////////////////////////////////////////////////////////////////////////

// Expresiones de función
let sayHi = function () {
  console.log("Hola");
};

sayHi();

//////////////////////////////////////////////////////////////////////////////////////////

// Funciones de flecha lineal

let sumar = (a, b) => a + b;
console.log(sumar(5, 3));

//////////////////////////////////////////////////////////////////////////////////////////

// Funciones de flecha multilínea

let sum = (a, b) => {
  // la llave abre una función multilínea
  let result = a + b;
  return result; // si usamos llaves, entonces necesitamos un "return" explícito
};

console.log(sum(1, 2)); // 3

// ///////////////////////////////////  Parámetros predeterminados  /////////////////////////////////

// Parámetros predeterminados de función permiten que los parámetros con nombre se inicien con valores predeterminados si no se pasa ningún valor o undefined.
function ingresarDatos(nombre = 'pedro', annio = 50){
  return nombre + annio
}

console.log(ingresarDatos('maria', 20));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Escribe una función checkSpam(str) que devuelva true si str contiene ‘viagra’ o ‘XXX’, de lo contrario false.

function checkSpam(str) {
  let lowerStr = str.toLowerCase();

  return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

console.log( checkSpam('compra ViAgRA ahora') );
console.log( checkSpam('xxxxx gratis') );
console.log( checkSpam("coneja inocente") );