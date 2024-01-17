// Para unir dos arrays con el operador de propagación, simplemente debes separarlos por comas en un array.

const array1 = [1,2,3]
const number = 4
const array2 = [5,6,7]

const otherArray = [ ...array1, number, ...array2 ]
console.log(otherArray);

for (arrays of otherArray) {
    console.log(arrays)
    
}

// utiliza el operador de propagación para crear una copia del array que utilice una referencia en memoria diferente al original.

const originalArray = [1,2,3,4,5]
const copiaArray = [...originalArray]
copiaArray[0] = 0

originalArray // [1,2,3,4,5]
copiaArray // [0,2,3,4,5]
originalArray === copiaArray  // false

// Cuidado con la copia en diferentes niveles de profundidad
// El operador de propagación sirve para producir una copia en un solo nivel de profundidad, esto quiere decir que si existen objetos o arrays dentro del array a copiar. Entonces los sub-elementos en cada nivel, tendrán la misma referencia de memoria en la copia y en el original.

const Arrayoriginal = [1, [2,3] ,4,5]
const ArrayCopia = [...Arrayoriginal]

Arrayoriginal[1] === ArrayCopia[1] // true
// La manera de solucionar es más compleja, tendrías que emplear el operador de propagación para cada elemento en cada nivel de profundidad.

// Sin embargo, recientemente salió una forma de producir una copia profunda con StructuredClone, aunque es una característica muy reciente, así que revisa que navegadores tienen soporte.

const arrayOriginal = [1, [2,3] ,4,5]
const copyArray = structuredClone(arrayOriginal)

arrayOriginal === copyArray  // false
arrayOriginal[1] === copyArray[1] // false