const arraysalarios = [10, 20, 50, 40, 10];

let element = 0;
function promediarSalario() {
  for (let index = 0; index < arraysalarios.length; index++) {
    element += arraysalarios[index];
    console.log(
      "el element += lo que hace es guardar los resultados del array, osea mientras va recorriendo el array va sumando el numero guardado con el nuevo numero que le pasa el array al recorrerlo "
    );
  }

  const promediar = element / arraysalarios.length;
  console.log(promediar);
}
//////////////////////////////////////////////////////////////////////////////////////
console.group("Aqui aplicacmos el metodo reduce, esta nos da como resultado el total de la suma de la lista ");
calcularPromedio([1, 2, 3, 4]);
function calcularPromedio(lista) {

    console.log('nuevoValor no es como tal la posicion en el array sino el valor dentro del array, va a cambiar por los valores que hay dentro de el array en este caso= 1 despues 2 despues 3 y asi sucesivamente, y el valorAcumulado empiesa desde cero guarda el 1 que le pasa nuevoValor y despues suma 1 mas el valor que le pasa despues nuevoValor hasta llegar al final del recorrido del array ');

  function sumarTodosElementos(valorAcumulado, nuevoValor) {
    return valorAcumulado + nuevoValor;
  }

  const sumaLista = lista.reduce(sumarTodosElementos);

  const promedio = sumaLista / lista.length;
  return promedio;
}
console.groupEnd(
  "Aqui aplicacmos el metodo reduce, esta nos da como resultado "
);
////////////////////////////////////////////////////////////////////////////////////////////
console.group("esto es un arrow function");

lista = [1, 2, 3, 4];
const sumarTodosElementos = (valorAcumulado, nuevoValor) =>
  valorAcumulado + nuevoValor;
const sumaLista = lista.reduce((a, b) => a + b) / lista.length;

console.groupEnd("esto es un arrow function");
