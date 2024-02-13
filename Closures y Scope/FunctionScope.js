function greeting() {
  let userName = "Ana";
  console.log(userName);

  if (userName === "Ana") {
    console.log(`Hello  ${UserName}!`);
  }
}

greeting();
console.log(userName); // no esta asignada como global por eso no se muestra

function saludo() {
  let nombre = "Andres";
  console.log(nombre);
}

saludo(); // "Andres"
console.log(nombre); // ReferenceError: nombre is not defined
