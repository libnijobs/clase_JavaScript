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
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// insertar un elemento en el array

let frutas = ["manzana" , "pera" , "naranja" , "fresa" , "banana"]

// let masfrutas = prompt("Ingrese una fruta para agregarla al final del array")
// frutas.push(masfrutas)

// let masfrutas = prompt("Ingrese una señal para eliminar el ultimo elemento del array")
// frutas.pop(masfrutas)

// let masfrutas = prompt("Ingrese una fruta para agregarla al principio del array")
// frutas.unshift(masfrutas)

// let masfrutas = prompt("Ingrese una señal para eliminar el primer elemento del array")
// frutas.shift(masfrutas)

let moreFruits = prompt("buscar una fruta del array")
frutas.indexOf(moreFruits) // busca el indice de la palabra que se ingreso por ejemplo: manzana = indice 0

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

