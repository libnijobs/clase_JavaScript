console.group('Cuadrado') 

// const ladoCuadrado = 5;
// const perimetroCuadrado = ladoCuadrado * 4;
// const areaCuadrado = ladoCuadrado * ladoCuadrado;

// console.log({
//   ladoCuadrado,
//   perimetroCuadrado,
//   areaCuadrado,
// });

function calcularCuadrado(lado) {
  return {
    perimetro: lado * 4,
    area: lado * lado,
  };
}
cuadrado1 = calcularCuadrado(5)
console.log(cuadrado1);

console.groupEnd('fin-Cuadrado') 

console.group('Triangulo')

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const ladoTrianguloBase = 4;
// const alturaTriangulo = 5.5;

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
// const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;

function calcularTriangulo(lado1, lado2, base, altura) {
  return {
    perimetro: lado1 + lado2 + base,
    area: (base * altura) / 2,
  };
}
calcularTriangulo(6, 6, 4, 5.5)

// console.log({
//   ladoTriangulo1,
//   ladoTriangulo2,
//   ladoTrianguloBase,
//   alturaTriangulo,
//   perimetroTriangulo,
//   areaTriangulo,
// });

console.groupEnd('fin-Triangulo') 

console.group('circle')

function circulo(radio){
  const diametro = radio * 2
  const radioAlCuadrado = Math.pow(radio, 2)

  return{
    circunferencia: diametro * Math.PI,
    area: radioAlCuadrado * Math.PI.toFixed(3),
  }
}

circulo(3)

console.groupEnd('fin-circle')

console.group('altura-Triangulo')

function calcularAlturaTriangulo(lados, base){
  if(lados == base){
    console.warn('este no es un triangulo isosceles');
  }else{ // para sacar el elevado a la dos hay dos formas esta: Math.pow(lados, 2) y esta: (base ** 2)
    const altura = Math.sqrt((Math.pow(lados, 2)) - ((base ** 2)) / 4)
    //y para sacar la raiz cuadrada de algun ejercicio es con: Math.sqrt(todo lo que vaya con raiz cuadrada)
    return altura
  }
}

function hipotenusaTriangulo(altura, base){
  const hipotenusa = Math.hypot(altura, base / 2);
  return `La hipotenusa del triángulo rectángulo con catetos ${altura} y ${base} es ${hipotenusa}.`;
}

console.groupEnd('altura-Triangulo')

console.group('altura-Triangulo-Escaleno')

function alturaTrianguloEscaleno(a, b, c) {
  // Calcula el semiperímetro
  let s = (a + b + c) / 2;

  // Calcula el área del triángulo
  let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

  // Calcula la altura del triángulo
  let altura = (2 * area) / b;

  return altura;
}
console.groupEnd('altura-Triangulo-Escaleno')
