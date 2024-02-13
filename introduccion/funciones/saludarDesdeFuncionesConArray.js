const array = ['ana', 'daniel', 'juan', 'maria']

function recorrerArray() {
    for (let index = 0; index < array.length; index++) {
  const element = array[index];
    console.log(saludar() + element)
}
    }


function saludar() {
    let saludo = "hi good nigth, "
    return saludo
}