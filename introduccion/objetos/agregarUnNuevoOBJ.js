let obj = {
    name: 'maria',
    edad: 10,
}
console.log(obj);

// acceder a las propiedades de un objeto
console.log('Nombre: ', obj.name) // Maria

// asignar valor a una propiedad existente
obj.edad = 20
console.log('Edad actualizada: ', obj.edad) // 20

// agregar nueva propiedad al objeto
obj.profesion = "Doctora"
console.log('agregar profesion al objeto: ',obj.profesion)

// eliminar una propiedad del objeto
delete obj.profesion
console.log("Eliminar la propiedad profession: ",obj.profesion)
console.log(obj);