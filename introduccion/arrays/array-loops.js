const estudiantes = ["María", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante) {
  console.log(`Hola, ${estudiante}`);
}

// estudiantes.forEach(hola => {
//     console.log(hola);
// });

estudiantes.forEach(saludarEstudiantes) 

////////////////////////// forEach /////////////////////////////////////

const materiales = ['cuaderno', 'lapiz', 'borrador'];

function mostrarMateriales(material){
    console.log(`El material es: ${material}`);
}

for (let i = 0; i < materiales.length; i++) {
  mostrarMateriales(materiales[i])
}

////////////////////////// for /////////////////////////////////////

const materialesCostruccion = ['pala', 'cemento', 'martillo'];

function mostrarMaterialesCostruccion(material){
    console.log(`El material que se necesita es: ${material}`);
}

for(let cualquierVariable of materialesCostruccion){
  mostrarMaterialesCostruccion(cualquierVariable)
  // console.log(materialCostruccion)
}

////////////////////////// for-of /////////////////////////////////////

const notas = [3, 5, 7, 9, 10, 12, 15, 18, 20];

function mostrarNotas(nota){
    console.log(`La nota es: ${nota}`);
}

while(notas.length > 0){
  // console.log(notas);
  
  let nota = notas.shift()
  /// mientras while sea verdadero, se ejecuta el codigo
  //creamos una variable nota y le asignamos el valor de notas.shift()
  //shift() elimina el primer elemento de un array y lo devuelve
  //por lo tanto, en cada iteracion, la variable nota tendra el valor del primer elemento del array notas
  //y el array notas se ira reduciendo en un elemento
  //cuando el array notas este vacio, la condicion del while sera falsa y el bucle se detendra
  mostrarNotas(nota)
}

//////////////////////////// while //////////////////////////////////////