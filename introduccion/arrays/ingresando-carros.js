function Auto(marca, modelo, anio) {
  this.marca = marca
  this.modelo = modelo
  this.anio = anio
}

let autos = []
let user = "si"

while (user === "si") {

  let marcas = prompt("Ingresa la marca:")
  let modelos = prompt("Ingresa el modelo:")
  let años = prompt("Ingresa el año:")

  autos.push(new Auto(marcas, modelos, años))

  // autos.push(auto)

  user = prompt("Si quieres continuar pulsa 'si', de lo contrario pulsa 'no':")
}

for (let i = 0; i < autos.length; i++) {
  console.log(autos[i])
}