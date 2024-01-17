let estacionamiento = []
let autoNuevo
//////////////////////// esto es una funcion constructora que esta destinada a crear objetos ///////////////////////////////

/*La función toma tres parámetros (marca, modelo y annio).

Dentro de la función, this se refiere al objeto que se creará cuando se invoque la función con new.

Se están asignando propiedades (marca, modelo y annio) al objeto usando this.

Cuando utilizas esta función con new, se crea un nuevo objeto con las propiedades especificadas:*/

function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

let continuar = "si"

while(continuar == "si"){
    marca1 = prompt("Ingresa la marca del auto")
    modelo1 = prompt("Ingresa el modelo del auto")
    annio1 = prompt("Ingresa el año del auto")
    
    autoNuevo = new auto(marca1, modelo1, annio1)
    
    estacionamiento.push(autoNuevo)
    console.log(estacionamiento)

    continuar = prompt("¿Deseas agregar un auto al estacionamiento? si/no")
}