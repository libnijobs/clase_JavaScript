    const articulo = [
    {nombre: 'Bici', costo: 3000},
    {nombre: 'carro', costo: 500000},
    {nombre: 'laptop', costo: 500},
    {nombre: 'moto', costo: 400},
    ]
    let articulosporfiltrar = articulo.filter(function(filtrados){
     return filtrados.costo <= 500
    })
    console.log(articulosporfiltrar);

////////////////////////////// Metodo filter( ) //////////////////////////////////////
    const art = [
        {nombre: 'Bici', costo: 3000},
        {nombre: 'carro', costo: 500000},
        {nombre: 'laptop', costo: 500},
        {nombre: 'moto', costo: 400000},
        ]
    let nombredelosart = art.map(function(arti){
        return arti.costo
    })
    console.log(nombredelosart)

///////////////////////////////// Metodo map( ) ///////////////////////////////////
const pinturas = [
    {nombre : "mariposa", costo: 200},
    {nombre : "torre eiffel", costo: 2000},
    {nombre : "monaliza", costo: 3000},
    {nombre : "la llorona", costo: 500},
    {nombre : "coliseo", costo: 5000}
]
let encuentraPintura = pinturas.find(function(pintura){
    return pintura.nombre === "mariposa"
})
console.log(encuentraPintura)

//////////////////////////////// Metodo find( ) //////////////////////////////////////////////
const marcasDePinturas = [
    {nombre: 'spiso', costo: 900},
    {nombre: 'sgitsy', costo: 1000},
    {nombre: 'destrot', costo: 2000},
    {nombre: 'pintoresco', costo: 500},
]
marcasDePinturas.forEach(function(marcaDePintura){
    console.log(marcaDePintura.nombre);
})

//////////////////////////////// Metodo forEach( ) //////////////////////////////////////////////
let panaderia = [
    {nombre: 'pan azucar', costo: 2500},
    {nombre: 'galleta', costo: 3000},
    {nombre: 'cachito', costo: 5000},
    {nombre: 'pan de bolita', costo: 500},
]
let comida = panaderia.some(function(compras){
    return compras.costo <= 3000
})
console.log(comida);

//////////////////////////////// Metodo some( ) //////////////////////////////////////////////
