function isPar(array){
    return array.length % 2
}

calculandoMedia([10,100,8,50,12,1,2,55])

function calculandoMedia(listaDesordenada){
    const lista = ordenarLista(listaDesordenada)
    console.log(`lista ordenada:  ${lista}`);
    const arrayEsPar = isPar(lista)

    if (arrayEsPar == 0) {
        const medianaPar1 = (lista.length / 2) -1
        const medianaPar2 = lista.length / 2
        calcularPromedio([lista[medianaPar1], lista[medianaPar2]])
    }else{
        const medianaImparIndiceArray = Math.floor(lista.length / 2)
        console.log(`este es el resultado de Mediana impar: ${lista[medianaImparIndiceArray]}`);}
}

function calcularPromedio(array) {

  function sumarTodosElementos(valorAcumulado, nuevoValor) {
    return valorAcumulado + nuevoValor;
  }

  const sumaLista = array.reduce(sumarTodosElementos);
  const promedio = sumaLista / array.length;
  console.log(`El array de la lista es: ${array}`);

  console.log(`el promedio es:  ${promedio}`);
  return promedio;
}
function ordenarLista(listaDesordenada){
    function ordenarListaSort(valorAcumulado, nuevoValor){
        if(valorAcumulado > nuevoValor){
            return 1
        }else if(valorAcumulado == nuevoValor){
            return 0
        }else if(valorAcumulado < nuevoValor){
            return -1
        }
    }
    const lista = listaDesordenada.sort(ordenarListaSort)
    return lista
}