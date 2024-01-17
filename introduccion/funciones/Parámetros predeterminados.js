// ////////////////////////////////////////  Parámetros predeterminados  ///////////////////////////////////////////////////////
// Parámetros predeterminados de función permiten que los parámetros con nombre se inicien con valores predeterminados si no se pasa ningún valor o undefined.

function ingresarDatos(nombre = 'pedro', annio = 50){
    return nombre + annio
}

console.log(ingresarDatos('maria', 20));
