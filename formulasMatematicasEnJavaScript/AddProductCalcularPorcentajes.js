let productos = [];
let masProductos = 'si';

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

function agregarProducto() {
    let nombreProducto = prompt('Ingresa un producto');
    let precioProducto = parseFloat(prompt('Ingresa el precio del producto: '));

    let nuevoProducto = new Producto(nombreProducto, precioProducto);
    productos.push(nuevoProducto);
    console.warn(nuevoProducto)
    // console.log(productos);
}

function aplicarDescuentos() {
    let totalConDescuento = 0;

    for (let i = 0; i < productos.length; i++) {
        let producto = productos[i];
        let precioConDescuento = calcularDescuento(producto.precio);
        totalConDescuento += precioConDescuento;
        console.warn(precioConDescuento);
    }

    console.log('Total con descuento: ' + totalConDescuento.toFixed(2));
}

function calcularDescuento(precio) {
    const descuento = precio * 0.2; // Descuento del 20%
    const precioConDescuento = precio - descuento;
    console.log(`Descuento aplicado a ${precio.toFixed(2)}: ${descuento.toFixed(2)}`);
    return precioConDescuento;
}

while (masProductos.toLowerCase() === 'si') {
    agregarProducto();
    masProductos = prompt('Quieres ingresar más productos? Escribe "si" o "no"');
}

aplicarDescuentos();
