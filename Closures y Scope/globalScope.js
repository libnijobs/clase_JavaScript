var a; // declarando
let b = "b"; // declaramos y asignamos
b = "bb"; // reasignamos
var a = "aa"; // redeclaramos y asignamos

// Global Scope
var fruit = "Apple"; // global
console.log(fruit, "from console.log GLOBAL -   SCOPE");

function bestFruit() {
  console.log(fruit, "from console.log of the function");
}
bestFruit();

//Otra forma de crear una variable global
function countries() {
  country = "Colombia";
  capital = "Bogota";
  //No declaramos la variable, por lo tanto sera (por defecto) global
}
countries();
console.log(country + " and " + capital + ", from outside the function");

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  
}