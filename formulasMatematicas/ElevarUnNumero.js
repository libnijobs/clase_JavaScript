function pow(num, x) {
  return Math.pow(num, x);
}
pow(2, 3);

///////////////////////////////////////////////////////////////////////////////////////

function calcularpow(num, x) {
  let result = num;
  for (let i = 1; i < x; i++) {
    result *= num;
  }
  return result;
}
calcularpow(2, 3);

//////////////////////////////////////////////////////////////////////////////

function calcPow(a, b) {
  return a ** b;
}
calcPow(2, 3);

////////////////////////////////////////////////////////////////////////////////////

function pow(x, n) {
x = prompt("Base");
n = prompt("Exponente");
  return n < 1
    ? alert(`Exponente ${n} inválido por ser menor a 1`)
    : alert(x ** n);
}
pow();
