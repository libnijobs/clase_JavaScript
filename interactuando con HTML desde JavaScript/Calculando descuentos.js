const inputPrecio = document.getElementById("precio");
const inputDescuento = document.getElementById("descuento");
const buttonEnviar = document.getElementById("calcular");
const spam = document.querySelector("#result");
const parrafo = document.querySelector('p')

buttonEnviar.addEventListener("click", Calculando);

function Calculando() {
  const precio = Number(inputPrecio.value);
  const descuento = Number(inputDescuento.value);

  const resultadoFinal = precio - (precio * descuento) / 100;
  console.log(resultadoFinal);

  if(!precio || !descuento){
    parrafo.innerHTML = 'NO tiene ningun precio NI descuento'
  }if(descuento >= 1000){
    parrafo.innerHTML = 'YA te excediste'
  }

  spam.innerHTML = resultadoFinal;
//   parrafo.append(`El precio con descuento es: ${resultadoFinal}`)

}


