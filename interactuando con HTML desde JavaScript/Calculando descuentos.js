const inputPrecio = document.getElementById("precio");
const inputDescuento = document.getElementById("descuento");
const buttonEnviar = document.getElementById("calcular");
const spam = document.querySelector("#result");
const parrafo = document.querySelector("p");
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const inputPrecioC = document.getElementById("precioC");
const inputCupon = document.getElementById("cupon");
const buttonEnviarC = document.getElementById("calcularC");
const spamC = document.querySelector(".spamm");
const parrafoC = document.querySelector("#parrafoC");

buttonEnviar.addEventListener("click", Calculando);

function Calculando() {
  const precio = Number(inputPrecio.value);
  const descuento = Number(inputDescuento.value);

  const resultadoFinal = precio - (precio * descuento) / 100;
  console.log(resultadoFinal);

  if (!precio || !descuento) {
    parrafo.innerHTML = "NO tiene ningun precio NI descuento";
  }
  if (descuento >= 1000) {
    parrafo.innerHTML = "YA te excediste";
  }
  spam.innerHTML = resultadoFinal;
  //   parrafo.append(`El precio con descuento es: ${resultadoFinal}`)
}

buttonEnviarC.addEventListener("click", CalculandoCupon);

function CalculandoCupon() {
  const precioC = Number(inputPrecioC.value);
  const iCupon = inputCupon.value;
  let cupon;

  // switch (iCupon || precioC) {
  //   case "t2024":
  //     cupon = 10;
  //     break;
  //   case "mercado3000":
  //     cupon = 15;
  //     break;
  //   case "Viva12":
  //     cupon = 20;
  //     break;
  //   default:
  //     parrafoC.innerHTML = "NO tiene ningun precio NI cupon"
  //     break;
  // }

  if (iCupon == "t2024") {
    cupon = 10;
  }
  if (iCupon == "mercado3000") {
    cupon = 15;
  }
  if (iCupon == "Viva12") {
    cupon = 20;
  }
  if (!precioC || !iCupon) {
    parrafoC.innerHTML = "NO tiene ningun precio NI cupon";
  }

  const descuento = precioC - (precioC * cupon) / 100;
  console.log(
    `el resultado de tu descuento con los cupones es de: ${descuento}`
  );
  spamC.innerText = descuento;
}
