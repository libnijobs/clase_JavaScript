let estacionamiento = []
let autoNuevo

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