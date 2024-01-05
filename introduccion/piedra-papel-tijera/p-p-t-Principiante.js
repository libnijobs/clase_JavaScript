const opcion1 = "piedra";
const opcion2 = "papel";
const opcion3 = "tijera";

function juego(user, pc) {
  if (user === opcion1 && pc === opcion3) {
    console.log("El usuario gana");
  } else if (user === opcion2 && pc === opcion1) {
    console.log("El usuario gana");
  } else if (user === opcion3 && pc === opcion2) {
    console.log("El usuario gana");
  } else if (user === pc) {
    console.log("Empate");
  } else {
    console.log("La computadora gana");
  }
}

const opcionUsuario = prompt("Ingresa la opción del usuario: ");
const opcionComputadora = prompt("Ingresa la opción de la computadora: ");
juego(opcionUsuario, opcionComputadora);

// const opcion1 = "piedra";
// const opcion2 = "papel";
// const opcion3 = "tijera";

function juego2(User, Pc) {
  switch (true) {
    case User === opcion1 && Pc === opcion3:
      return `El usuario gana con: ${User}`;
      break;
    case User === opcion2 && Pc === opcion1:
      return `El usuario gana con: ${User}`;
      break;
    case User === opcion3 && Pc === opcion2:
    return `El usuario gana con: ${User}`;
    break;
    case User === Pc:
      return `Los dos empatan con: ${User , Pc}`;
      break;
    default:
      return `El computador gana con: ${Pc}`;
      break;
  }
}

const opcionUser = prompt("Ingresa la opción del usuario: ");
const opcionPc = prompt("Ingresa la opción de la computadora: ");

console.log(juego2(opcionUser, opcionPc));

