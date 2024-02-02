let obj = { name: "juan", age: 25, city: "Bogota" };



for (let key in obj) {
  const llaves = key;
  console.log(`llaves:  ${llaves}`); // muestra las llaves del objeto
  const values = obj[key];
  console.log(`valores de las llaves: ${values}`);  //muestra los valores que tiene cada llave
//   console.log(key, obj[key]);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////

let objeto2 = { name: "juan", age: 25, city: "Bogota" };

let llaves = [];
let values = [];

Object.entries(objeto2).forEach(([key, value]) => {
  llaves.push(key);
  values.push(value);
});

console.log("Llaves:", llaves);
console.log("Valores:", values);
