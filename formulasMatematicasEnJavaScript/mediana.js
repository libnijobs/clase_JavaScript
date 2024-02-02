function isPar(array){
    return array.length % 2
}
// function isPar(lista){
//     return !(lista.length % 2)
// }

function calculandoMedia(listaDesordenada){
    const lista = ordenarLista(listaDesordenada)
    console.log(lista);
    const arrayEsPar = isPar(lista)

    if (arrayEsPar == 0) {
        const medianaPar1 = (lista.length / 2) -1
        const medianaPar2 = lista.length / 2
        // console.log(lista[medianaPar]);
        // console.log(lista[medianaPar - 1]);
        // console.log(`La media es: ${((lista[medianaPar - 1] + lista[medianaPar])/2)}`)

        calcularPromedio([lista[medianaPar1], lista[medianaPar2]])
    }else{
        const medianaImpar = Math.floor(lista.length / 2)
        console.log(medianaImpar);
        console.log(lista[medianaImpar]);}
    
}

calculandoMedia([10, 20, 100000])

console.group("Aqui aplicacmos el metodo reduce, esta nos da como resultado el total de la suma de la lista ");


function calcularPromedio(array) {

  function sumarTodosElementos(valorAcumulado, nuevoValor) {
    return valorAcumulado + nuevoValor;
  }

  const sumaLista = array.reduce(sumarTodosElementos);
  const promedio = sumaLista / array.length;

  console.log(promedio);
  return promedio;
}
console.groupEnd(
  "Aqui termina el metodo reduce"
);

function ordenarLista(listaDesordenada){
    function ordenarListaSort(valorAcumulado, nuevoValor){
        if(valorAcumulado > nuevoValor){
            return 1
            //si quieres que se vea de mayor a menor entonces aqui le pones un: -1
        }else if(valorAcumulado == nuevoValor){
            return 0
        }else if(valorAcumulado < nuevoValor){
            return -1
            //si quieres que se vea de mayor a menor entonces aqui le pones un: 1
        }
        // tambien se puede hacer de esta otra manera y es hasta mas corta y optimizada
        // return valorAcumulado - nuevoValor;
        // return 5 - 10 -> -5;
        // return 5 - 5 -> 0;
        // return 10 - 5 -> 5;
    }

    const lista = listaDesordenada.sort(ordenarListaSort)
    return lista
}