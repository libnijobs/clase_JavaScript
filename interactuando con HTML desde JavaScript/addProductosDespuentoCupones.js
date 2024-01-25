const inputproducto = document.getElementById("product");
const inputprecio = document.getElementById("price");
const inputcupon = document.getElementById("coupon");
const botonCalcular = document.getElementById("calcular");
const spam = document.getElementById("total");
let productosArray = [];

botonCalcular.addEventListener("click", addProductos);

class Productos {
  constructor(producto, precio, cupon) {
    this.producto = producto;
    this.precio = precio;
    this.cupon = cupon;
  }
}

function addProductos() {
  const nuevoProducto = new Productos(inputproducto.value, inputprecio.value, inputcupon.value);
  productosArray.push(nuevoProducto);
  console.log(productosArray);

  mostrarResultados(nuevoProducto);
}

function calcularPrecioConDescuento(producto, precio, cupon) {
  return precio - cupon;
}

function mostrarResultados(producto) {
  const total = calcularPrecioConDescuento(producto.producto, producto.precio, producto.cupon);
  spam.innerHTML = `Último producto agregado: ${producto.producto}, Total: ${total}`;
}
