const letters = ["a", "b", "c", "d"];

for (let index = 0; index < letters.length; index++) {
  const element = letters[index];
  console.log("for", element);
}

const fruits = ["guanabana", "manzana", "melon"];

fruits.forEach((result) => {
  console.log("ForEach", result);
});

// las llaves en las arrow functions son para varias lineas de codigo,  y se pueden omitir si solo hay una linea


const numbers = [5,5,5,5,5]

numbers.reduce((acumular, iteracion) => acumular + iteracion)