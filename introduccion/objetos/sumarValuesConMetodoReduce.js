const salario = {
    enero: 400,
    febrero: 500,
    marzo:  700,
}

Object.values(salario).reduce((total, actual) => {return total + actual},0)


const IVA_GENERAL = 2

const item = {
    precio: 2,
    cantidad: 4,
    impuestos: IVA_GENERAL,
    calcularTotal
}

const item2 = {
    precio: 4,
    cantidad: 4,
    impuestos: IVA_GENERAL,
    calcularTotal
}

function  calcularTotal (){
    return this.precio * this.cantidad * this.impuestos;
}

console.log(`este es el resultado del item 1:  ${item.calcularTotal()}  este es el resultado del item 2: ${item2.calcularTotal()}`);