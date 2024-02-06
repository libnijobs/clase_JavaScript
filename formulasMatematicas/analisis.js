console.log(salarios);
function acomodarLetras(nombre) {
  let primeraLetraMayuscula = nombre.charAt(0).toUpperCase();
  let restoMinusculas = nombre.slice(1).toLowerCase();
  let unionNombre = primeraLetraMayuscula + restoMinusculas;

  return unionNombre;
}
// Análisis personal para Juanita
function encontrarPersona(inputPersonaEnBusqueda) {
  inputPersonaEnBusqueda = acomodarLetras(inputPersonaEnBusqueda);
  return salarios.find((persona) => persona.name === inputPersonaEnBusqueda);

  // const persona = salarios.find((persona) => {
  //   return persona.name == personaEnBusqueda;
  // });
  // return persona;
}

function medianaPorPersona(nombrePersona) {
  const trabajos = encontrarPersona(nombrePersona).trabajos;

  const salarios = trabajos.map(function (elemento) {
    return elemento.salario;
  });

  const medianaSalarios = PlatziMath.calcularMediana(salarios);

  console.log(medianaSalarios);
  return medianaSalarios;
}

function proyeccionPorPersona(nombrePersona) {
  nombrePersona = acomodarLetras(nombrePersona);
  const trabajos = encontrarPersona(nombrePersona).trabajos;

  let porcentajesCrecimiento = [];

  for (let i = 1; i < trabajos.length; i++) {
    const salarioActual = trabajos[i].salario;
    const salarioPasado = trabajos[i - 1].salario;
    const crecimiento = salarioActual - salarioPasado;
    const porcentajeCrecimiento = crecimiento / salarioPasado;
    porcentajesCrecimiento.push(porcentajeCrecimiento);
  }
  //  console.log(porcentajesCrecimiento);
  const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(
    porcentajesCrecimiento
  );

  console.log({ medianaPorcentajesCrecimiento });

  const ultimoSalario = trabajos[trabajos.length - 1].salario;
  const aumento = ultimoSalario * medianaPorcentajesCrecimiento;
  const nuevoSalario = ultimoSalario + aumento;
  console.log("este es el nuevo salario: " +nuevoSalario);
  return nuevoSalario;
}
let inputPersonaEnBusqueda = prompt("Ingresa el nombre");
medianaPorPersona(inputPersonaEnBusqueda);
let nombrePersona = prompt(
  "Ingresa el nombre de la persona para buscar la proyeccion"
);
proyeccionPorPersona(nombrePersona);
