var comida = ["arroz", "hamburguesa", "manzana"];
var persona = "si";

while (persona.toLowerCase() === "si" && comida.length > 0) {
  persona = prompt("Escribe 'si' si aún tienes hambre; de lo contrario, escribe cualquier otra letra");
  
  if (persona.toLowerCase() === "si" && comida.length > 0) {
    alert("Puedes seguir comiendo: " + comida[0]);
    comida.shift();
  }
}

if (persona.toLowerCase() !== "si") {
  alert("Decidiste: " + persona + ", por lo tanto, estás lleno.");
} else {
  alert("Ya no queda más comidas en el array.");
}
