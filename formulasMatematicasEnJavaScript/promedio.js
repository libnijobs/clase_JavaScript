const arraysalarios = [10, 20, 50, 40, 10];

let element = 0;
function promediarSalario() {
  for (let index = 0; index < arraysalarios.length; index++) {
    element += arraysalarios[index];
  }
  
  const promediar = element / arraysalarios.length;
  console.log(promediar);
  console.warn(
    "el element += lo que hace es guardar los resultados del array, osea mientras va recorriendo el array va sumando el numero guardado con el nuevo numero que le pasa el array al recorrerlo "
  );
}
//////////////////////////////////////////////////////////////////////////////////////
console.group("Aqui aplicacmos el metodo reduce, esta nos da como resultado el total de la suma de la lista ");

calcularPromedio([1, 2, 3, 4]);
function calcularPromedio(lista) {

  function sumarTodosElementos(valorAcumulado, nuevoValor) {
    return valorAcumulado + nuevoValor;
  }

  const sumaLista = lista.reduce(sumarTodosElementos);
  const promedio = sumaLista / lista.length;
  return promedio;
}
console.groupEnd(
  "Aqui aplicamos el metodo reduce, esta nos da como resultado "
);
////////////////////////////////////////////////////////////////////////////////////////////

const arrayPromedio = [20, 10, 50, 10]
    function total(acumulo, nuevo) {
        return acumulo + nuevo
    }

    const result = arrayPromedio.reduce(total) / arrayPromedio.length
    console.log(result);

/////////////////////////////////////////////////////////////////////////////////////////
console.group("esto es un arrow function");

const lista = [1, 2, 3, 4];

const sumaLista = lista.reduce((a, b) => a + b) / lista.length;

console.groupEnd("esto es un arrow function");
