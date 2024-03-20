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

console.log(sum); // 390

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

console.log(persona.name); // 'Pete', los cambios se ven desde la referencia "user"

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

console.log( userPersona.name ); // John aún está en el objeto original

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let userObjeto = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copia todas las propiedades desde permissions1 y permissions2 en user
Object.assign(userObjeto, permissions1, permissions2);

// ahora es user = { name: "John", canView: true, canEdit: true }
console.log(userObjeto.name); // John
console.log(userObjeto.canView); // true
console.log(userObjeto.canEdit); // true

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//También podemos usar Object.assign para hacer una clonación simple:
let info = {
  name: "John",
  age: 30
};

let clone = Object.assign({}, info);

console.log(clone.name); // John
console.log(clone.age); // 30

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Clonación anidada
// Hasta ahora supusimos que todas las propiedades de user eran primitivas. Pero las propiedades pueden ser referencias a otros objetos.

// Para clonar profundamente un objeto sin editar las propiedades del objeto principal ni los objetos anidados usa structuredClone(object)


let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let clone = structuredClone(user);

clone.sizes.height = 100;
console.log( clone.sizes.height ); // 100

console.log( user.sizes.height ); // 182

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Métodos de objeto, "this"

// Los objetos son creados usualmente para representar entidades del mundo real, como usuarios, órdenes, etc.:
// Y en el mundo real un usuario puede actuar: seleccionar algo del carrito de compras, hacer login, logout, etc.

// Estas acciones se implementan asignando funciones a las propiedades del objeto.

let user = {
  // ...
};

// primero, declara
function sayHi() {
  console.log("¡Hola!");
};

// entonces la agrega como un método
user.sayHi = sayHi;

user.sayHi(); // ¡Hola!

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Formas abreviadas para los métodos
// Existe una sintaxis más corta para los métodos en objetos literales:

// estos objetos hacen lo mismo

userr = {
  sayHi: function() {
    console.log("Hello1");
  }
};
userr.sayHi()

// la forma abreviada se ve mejor, ¿verdad?
userrs = {
  sayHi() {   // igual que "sayHi: function(){...}"
    console.log("Hello2");
  }
};

userrs.sayHi()

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// “this” en métodos
// Es común que un método de objeto necesite acceder a la información almacenada en el objeto para cumplir su tarea.

// Por ejemplo, el código dentro de user.sayHi() puede necesitar el nombre del usuario user.

// Para acceder al objeto, un método puede usar la palabra clave this.

// El valor de this es el objeto “antes del punto”, el usado para llamar al método.

let userobj = {
  name: "John",
  age: 30,
  sayHi() {
    // "this" es el "objeto actual"
    console.log(this.name);
  }
};

userobj.sayHi(); // John

// Técnicamente, también es posible acceder al objeto sin this, haciendo referencia a él por medio de la variable externa:
// alert(user.name); // "user" en vez de "this" …Pero tal código no es confiable. Si decidimos copiar user a otra variable, 
// por ejemplo admin = user y sobrescribir user con otra cosa, entonces accederá al objeto incorrecto.

let objusers = {
  name: "John",
  sayHi() {
    console.log(objusers.name);
  }
};

let admin = objusers;
objusers = null;   // sobrescribimos para hacer las cosas evidentes

admin.sayHi();   // TypeError: No se puede leer la propiedad 'name' de null

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
  console.log( this.name );
}

// usa la misma función en dos objetos
user.saludo = sayHi;
admin.saludo = sayHi;// añadimos la unfion sayHi al objeto como: llave:saludo y valor: función llamada = sayHi 

// estos llamados tienen diferente "this"
// "this" dentro de la función es el objeto "antes del punto"
user.saludo(); // John  (this == user)
admin.saludo(); // Admin  (this == admin)

admin['saludo'](); // Admin (punto o corchetes para acceder al método, no importa)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const coche = {
  marca: "Toyota",
  obtenerMarca: () => {
    // ¡Cuidado! La función de flecha no tiene su propio "this".
    // En este contexto, "this" se refiere al objeto global (window).
    return this.marca;
  }
};

console.log(coche.obtenerMarca()); // Imprimirá "undefined"

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let calculator = {
  sum(){
    return this.num1 + this.sum2;
  },
  mul(){
    return  this.num1 * this.sum2;
  },
  read() {
    this.num1 = +prompt('a?');
    this.sum2 = +prompt('b?');
  }
};

calculator.read();
console.log( calculator.sum() );
console.log( calculator.mul() );

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ¿Cuál es la ventaja de usar Symbol("id") y no un string "id"?

// los objetos pueden cambiar cualquier llave a string...


let user = { // pertenece a otro código
  name: "John"
};

let id = Symbol("id");

user[id] = 1;

console.log( user[id] ); // podemos accesar a la información utilizando el symbol como nombre de clave pero con corchetes

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Si queremos usar un Symbol en un objeto literal, debemos usar corchetes.

let Id = Symbol("id");

let user = {
  name: "John",
  [Id]: 1235 // no "id": 1235
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Los Symbols son omitidos en for…in
// Las claves de Symbol no participan dentro de los ciclos for..in.


let ID = Symbol("id");
let user = {
  name: "John",
  age: 30,
  [ID]: 123
};

for (let key in user) console.log(key); // nombre, edad (no aparecen symbols)

// el acceso directo por medio de symbol funciona
console.log( "Direct: " + user[ID] ); // Direct: 123

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Object.assign copia tanto las claves string como symbol:

let IDS = Symbol("id");
let user = {
  [IDS]: 123
};

let clone = Object.assign({}, user);

console.log( clone[IDS] ); // 123

// No hay paradoja aquí. Es así por diseño. La idea es que cuando clonamos un objeto o cuando fusionamos objetos, 
// generalmente queremos que se copien todas las claves (incluidos los Symbol como id).

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

