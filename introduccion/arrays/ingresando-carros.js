function Auto(marca, modelo, anio) {
  this.marca = marca
  this.modelo = modelo
  this.anio = anio
}

let autos = []
let user = "si"

while (user === "si") {

  let marca = prompt("Ingresa la marca:")
  let modelo = prompt("Ingresa el modelo:")
  let anio = prompt("Ingresa el año:")

  autos.push(new Auto(marca, modelo, anio))

  // autos.push(auto)

  user = prompt("Si quieres continuar pulsa 'si', de lo contrario pulsa 'no':")
}

for (let i = 0; i < autos.length; i++) {
  console.log(autos[i])
}