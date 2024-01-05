function Calculando(precio, descuento){
    const resultDescuento = precio - (precio * descuento / 100)
    return resultDescuento
}

let inputPrecio = 100
let inputDescuento = 20

resultadoFinal = Calculando(inputPrecio, inputDescuento)

console.log(resultadoFinal);