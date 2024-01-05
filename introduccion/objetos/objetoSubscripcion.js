const objeto = {
    free: "solo puedes tomar los cursos gratis",
    basic: "puedes tomar casi todos los cursos de platzi durante casi todo el mes",
    expert: "puedes tomar casi todos los cursos de platzi durante un anio",
    expertDuo: "TU y ALGUIEN mas pueden tomar TODOS los cursos durante un anio"
}

let input = prompt("dime qué suscripción quieres");

function subscripciones() {
    let clave = Object.keys(objeto);
    console.log(clave);

    for (let i = 0; i < clave.length; i++) {
        if (clave[i] === input) {
            console.log(objeto[input]);
            return
        }
    }

    console.warn("Objeto no encontrado");
}

subscripciones();


// Este código es un programa simple en JavaScript que utiliza un objeto llamado objeto para almacenar información sobre diferentes tipos de suscripciones. Luego, solicita al usuario que ingrese el nombre de una suscripción mediante un cuadro de diálogo (prompt). Después, utiliza una función llamada subscripciones para buscar la suscripción correspondiente en el objeto e imprimir la información asociada.

// Aquí está el flujo del programa:

// El objeto objeto contiene varias propiedades que representan diferentes tipos de suscripciones, junto con la información asociada a cada una.
// Se solicita al usuario que ingrese el nombre de una suscripción utilizando el cuadro de diálogo prompt.
// La función subscripciones busca la clave ingresada por el usuario en el objeto. Utiliza un bucle for para recorrer todas las claves del objeto y verifica si alguna coincide con la entrada del usuario.
// Si encuentra una coincidencia, imprime la información asociada a esa suscripción utilizando console.log y luego sale de la función con return.
// Si no se encuentra ninguna coincidencia después de recorrer todas las claves, la función imprime un mensaje de advertencia utilizando console.warn.
// Finalmente, el programa llama a la función subscripciones para ejecutar el proceso de búsqueda y presentación de resultados. En resumen, este código proporciona información sobre diferentes tipos de suscripciones en Platzi, según la entrada del usuario.
