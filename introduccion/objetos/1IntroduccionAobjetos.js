let username = { name: "Maria", age: 20 }; // sintaxis de "objeto literal"

// podemos agregar propiedades al objeto de esta forma
username.fruta = "Manzana";
username.fruta2 = "uva";
console.log(username);

// podemos buscar una propiedad  del usuario con el punto (.)
console.log(username.fruta);

// para eliminar una propiedad se utiliza la palabra reservada delete
delete username.age;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// También podemos nombrar las claves con más de una palabra.
// Pero, de ser así, debemos colocar la clave entre comillas "...":
let user = {
  name: "John",
  age: 30,
  "likes birds": true, // Las claves con más de una palabra deben ir entre comillas
};

//es importante recordar que para buscar las claves que tienen espacios tiene que ir entre corchetes y comillas
console.log(user["likes birds"]);
console.log(user["name"]); // no importa si no tiene mas de una palabra podemos llamarla como lo hicimos antes, con corchetes

// asignando una clave con espacios
user["likes food"] = "hamburguesa";
console.log(user);

//eliminando una clave con espacios
delete user["likes food"];
console.log(user);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let alumno = {
  nombre: "John",
  age: 30,
};

//   let key = prompt("¿Qué te gustaría saber acerca del usuario?", "nombre");
let key = "nombre";

// acceso por medio de una variable
console.log(alumno[key]); // John (si se ingresara "nombre")

//La notación de punto no puede ser usada de manera similar:
console.log(alumno.key); // undefined

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Podemos usar corchetes en un objeto literal al crear un objeto. A esto se le llama propiedades calculadas.
let fruit = "manzana"; //prompt("¿Qué fruta comprar?", "Manzana");

let bag = {
  [fruit]: 5, // El nombre de la propiedad se obtiene de la variable fruit
};
console.log(bag.manzana); // 5 si fruit es="Manzana"

// esto funciona igual que:
let fruit2 = "pera";
bag[fruit2] = 2;
console.log(bag.pera); // 2 si fruit2 es="pera"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Podemos usar expresiones más complejas dentro de los corchetes:

let fruta = "apple";
let bag = {
  [fruta + "Computers"]: 5, // bag.appleComputers = 5
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Atajo para valores de propiedad
function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ...otras propiedades
    materia, // igual que name:name
  };
}

let user = makeUser("John", 30, "matematica");
console.log(user.name); // John

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Limitaciones de nombres de propiedad
// Como sabemos, una variable no puede tener un nombre igual a una de las palabras reservadas del lenguaje,
// como “for”, “let”, “return”, etc.

// Pero para una propiedad de objeto no existe tal restricción:

let obj = {
  for: 1,
  let: 2,
  return: 3,
};

console.log(obj.for + obj.let + obj.return); // 6

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// También existe un operador especial para los objetos: "in".
// La sintaxis es: "key" in object

// Por ejemplo:
let user = { name: "John", age: 30 };

console.log("age" in user); // mostrará "true", porque user.age sí existe
console.log("blabla" in user); // mostrará false, porque user.blabla no existe

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let user = {
  name: "John",
  age: 30,
  isAdmin: true,
};

for (let key in user) {
  // claves
  console.log(key); // name, age, isAdmin
  // valores de las claves
  console.log(user[key]); // John, 30, true
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let objetos = {
  one: 2,
  two: 2,
  three: 2,
  four: 2,
  five: 2,
};

let totalSum = Object.values(objetos).reduce((acc, curr) => acc + curr, 0);

console.log("La suma total es:", totalSum); // Debería dar 10

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}

alert(sum); // 390

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Verificar los objetos vacíos
// Escribe la función isEmpty(obj) que devuelva el valor true si el objeto no tiene propiedades, en caso contrario false.

function isEmpty(obj) {
  for (let key in obj) {
    //  Si el bucle ha comenzado quiere decir que sí hay al menos una propiedad
    return false;
  }
  return true;
}

let schedule = {};

console.log(isEmpty(schedule) + ", No hay ninguna propiedad en el objeto"); // true

schedule["8:30"] = "Hora de levantarse";

console.log(isEmpty(schedule) + ", Si hay propiedades en el objeto"); // false

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let menu = {
  width: 200,
  height: 300,
  title: "Mi menú",
};

function multiplyNumeric() {
  for (let key in menu) {
    if (typeof(menu[key]) !== typeof("hola")){
      menu[key] *= 2;
    }
  }
}
multiplyNumeric();
console.log(menu);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//COPIA DEL OBJETO
let persona = { name: 'John' };

let admin = persona; // copiamos el objeto a la  variable admin

admin.name = 'Pete'; // cambiado por la referencia "admin"

alert(persona.name); // 'Pete', los cambios se ven desde la referencia "user"

//Podemos usar cualquiera de las variables para acceder al objeto y modificar su contenido:
// Es como si tuviéramos un gabinete con dos llaves y usáramos una de ellas (admin) para acceder a él y hacer cambios.
// Si más tarde usamos la llave (user), estaríamos abriendo el mismo gabinete y accediendo al contenido cambiado.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//clonacion de objeto sin afectar al objeto principal
let userPersona = {
  name: "John",
  age: 30
};

let clone = {}; // el nuevo objeto vacío

// copiemos todas las propiedades de userPersona en él
for (let key in userPersona) {
  clone[key] = userPersona[key];
}

// ahora clone es un objeto totalmente independiente con el mismo contenido
clone.name = "Pete"; // cambiamos datos en él

alert( userPersona.name ); // John aún está en el objeto original

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let userObjeto = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copia todas las propiedades desde permissions1 y permissions2 en user
Object.assign(userObjeto, permissions1, permissions2);

// ahora es user = { name: "John", canView: true, canEdit: true }
alert(userObjeto.name); // John
alert(userObjeto.canView); // true
alert(userObjeto.canEdit); // true

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//También podemos usar Object.assign para hacer una clonación simple:
let info = {
  name: "John",
  age: 30
};

let clone = Object.assign({}, info);

alert(clone.name); // John
alert(clone.age); // 30