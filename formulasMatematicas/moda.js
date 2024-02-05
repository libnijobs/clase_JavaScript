function calcularModa(lista) {
    const listaCount = {};
    let moda = null;
    let maxCount = 0;
  
    for (let i = 0; i < lista.length; i++) {
      const element = lista[i];
  
      if (!listaCount[element]) {
        listaCount[element] = 1;
      } else {
        listaCount[element] += 1;
      }
    }
  
    for (let element in listaCount) {
      if (listaCount[element] > maxCount) {
        moda = element;
        // console.log(element);
        maxCount = listaCount[element];
      }
    }
    console.log(maxCount);
    console.log(listaCount);
    return moda;
  }
  
  console.log(calcularModa([1, 2, 3, 4, 4, 5, 5, 5])); // Output: 5

