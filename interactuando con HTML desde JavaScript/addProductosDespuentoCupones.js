const inputproducto = document.getElementById("product");
const inputprecio = document.getElementById("price");
const inputcupon = document.getElementById("coupon");
const botonCalcular = document.getElementById("calcular");
const spam = document.getElementById("total");
let productosArray = [];
botonCalcular.addEventListener("click", addProductos);

let cuponesObj = {
  "OFF": 10,
  "25per": 25,
  "obj2024": 15,
}

class Productos {
  constructor(producto, precio) {
    this.producto = producto;
    this.precio = precio;
  }
}

function addProductos() {
  const nuevoProducto = new Productos(inputproducto.value, inputprecio.value);
  productosArray.push(nuevoProducto);
  console.log(productosArray);

  mostrarResultados(nuevoProducto);
}

function calcularPrecioConDescuento(precio, cupon) {
  if (cuponesObj.hasOwnProperty(cupon)) {
    const descuentoPorcentaje = cuponesObj[cupon];
    const descuento = precio - (precio * descuentoPorcentaje) / 100;
    return descuento
  } else {
    alert("Cupón no encontrado");
    return precio; // Devuelve el precio sin descuento si el cupón no es válido
  }
}

function mostrarResultados(producto) {
  const total = calcularPrecioConDescuento(producto.precio, inputcupon.value);
  spam.innerHTML = `Último producto agregado: ${producto.producto}, Total: ${total}`;
}
