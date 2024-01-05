const obj ={
    nombre: "maria",
    array:["fruta", "verdura", "tomate", "banano", "fresa"]
}

console.log(obj.nombre);
console.log(obj.array[0]);

for(i=0; i < obj.array.length ; i++){
    console.log(obj.array[i]);
}

const array = [
    {nombre: "m", termina: "marca"},
    {nombre: "a", termina: "azucar"},
    {nombre: "r", termina: "rosa"},
    {nombre: "y", termina: "yuca"},
    {nombre: "cambur"},
    {nombre: "fruta"},
    {nombre: "verdura"},
    {nombre: "tomate"},
    {nombre: "fresa"}
]

// for(i=0; i < array.length ; i++){
//     console.log(array[i].nombre);
// }

array.forEach(function(array1){
    console.log(array1.nombre);
})