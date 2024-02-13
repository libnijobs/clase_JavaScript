function alcancia(cantidadInicial) {
  let contenido = cantidadInicial;
  return function guardar(monedas) {
    contenido = contenido + monedas;
    return contenido;
  };
}

const miAlcancia = alcancia(2);
miAlcancia(5); // 7
miAlcancia(4); // 11

const otraAlcancia = alcancia(5);
otraAlcancia(30); // 35
otraAlcancia(20); // 55

//////////////////////////////////////////////////////////////////////////////////////
function introducirName(){
    return function saludarName(name){
        return "Hi good night, " + name;
    }
}

let saludar = introducirName();
console.log(saludar('Sofia'));
console.log(saludar('Daniel'));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function introducirName(nombreInicial){
    let nombres = [nombreInicial];
    
    return function saludarName(nuevoNombre){
        if (nuevoNombre) {
            nombres.push(nuevoNombre);
        }
        
        let mensaje = "Hi good night, ";
        mensaje += nombres.join(" and ");
        
        return mensaje;
    }
}

let saludarPersona = introducirName('Maria');
console.log(saludarPersona('Sofia'));
console.log(saludarPersona('Daniel'));

// Agregar más nombres
console.log(saludarPersona('Carlos'));
console.log(saludarPersona('Laura'));

///////////////////////////////////////////////////////////////////////////////////////////////////
function cosas(){
    const arrayCosas = []
    arrayCosas.length
    function agregarCosa(cosa){
        arrayCosas.push(cosa);
        console.log(arrayCosas);
    }
    return agregarCosa
}
const agregar = cosas()
agregar("Estudiar")
agregar("Dormir")