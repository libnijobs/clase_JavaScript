// para crear un array vacio podemos hacerlo de estas dos maneras, la mas comun es la segunda
let arr = new Array();
let arra = [];

fruits = ["Apple"]

// para reemplazar un elemento  en el array debemos saber su indice
fruits[1] = "mango"
//para insertar elementos tenemos esta opcion
fruits[2] = "limon"

console.log(fruits);

// para saber la longitud de un array
console.log( fruits.length ); // 3

// para acceder desde el ultimo elemento hasta el primero usa: fruits[fruits.length-1] o: fruits.at(-1)
console.log( fruits.at(-1) ); // limon

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// insertar un elemento en el array

let frutas = ["manzana" , "pera" , "naranja" , "fresa" , "banana"]

let InsertEnd = prompt("Ingrese una fruta para agregarla al final del array")
frutas.push(InsertEnd)

let DeleteEnd = prompt("Ingrese una señal para eliminar el ultimo elemento del array")
frutas.pop(DeleteEnd)

let InsertFirst = prompt("Ingrese una fruta para agregarla al principio del array")
frutas.unshift(InsertFirst)

let DeleteFirst = prompt("Ingrese una señal para eliminar el primer elemento del array")
frutas.shift(DeleteFirst)

let moreFruits = prompt("buscar una fruta del array")
frutas.indexOf(moreFruits) // busca el indice de la palabra que se ingreso por ejemplo: manzana = indice 0

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// bucle for es mejor y mas utilizada para iterar sobre arrays

let nombres = ["Daniel", "Maria", "Flor"];

for (let i = 0; i < nombres.length; i++) {
  console.log( nombres[i] );
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// bucle for of, no da acceso al número del elemento en curso, solamente a su valor, pero en la mayoría de los casos eso es suficiente. Y es más corto.

let apellidos = ["fernandez", "morales", "belandria"];

// itera sobre los elementos del array
for (let fruit of apellidos) {
  console.log( fruit );
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// bucle for in, está optimizado para objetos genéricos, no para arrays, y es de 10 a 100 veces más lento.

let lista = ["Apple", "Orange", "Pear"];

for (let key in lista) {
  console.log( lista[key] ); // Apple, Orange, Pear
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// copia los valores de uno a otro array... igual van a tener los mismos datos que el array original

let materiales = ["tijera"]

let arrayy = materiales; // copiado por referencia (dos variables referencian al mismo array)

console.log( arrayy === materiales ); // true

arr.push("papel"); // añade una fruta al array

console.log( materiales ); // tijera, papel - ahora con 2 items

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Dada la lista de frutas
const frutass = ["manzanas", "peras", "naranjas", "fresas", "bananas"];

// Obtén la entrada del usuario para la fruta a eliminar
const moreFrutas = prompt("Buscar una fruta del array: ");

// Verifica si la fruta existe en la lista
const index = frutass.indexOf(moreFrutas);
if (index !== -1) {
    // Elimina la fruta de la lista
    frutass.splice(index, 1);
    console.log(`${moreFrutas} ha sido eliminada del array.`);
} else {
    console.log(`${moreFrutas} no se encuentra en el array.`);
}

// Imprime la lista actualizada de frutas
console.log("Frutas restantes en el array:", frutass);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Ingresar numeros al array y Sumar los números del array

let array = [];

function sumInput() {
  while (true) {
    let ingresarValor = prompt("Ingresa un número");

    // Debemos cancelar y salir si el usuario escribe un string vacio o con letras en ves de numeros
    if (ingresarValor === "" || ingresarValor === null || !isFinite(ingresarValor)) {
      break;
    }
    //'    !isNaN('hola');   // false, 'hola' no es un número    '
    if (!isNaN(ingresarValor)) {
      array.push(Number(ingresarValor));
    }
  }

  let element = 0
  for (let i = 0; i < array.length; i++) {
    element += array[i];
  }
  return element
}

sumInput();