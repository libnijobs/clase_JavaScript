function validarDia() {
    const diaInput = document.getElementById("dia");
    const dia = diaInput.value.toLowerCase(); // Convertir a minúsculas para evitar errores de capitalización
    
    let mensaje = "";
    
    if (dia === "lunes" || dia === "martes" || dia === "miercoles" || dia === "jueves" || dia === "viernes") {
      mensaje = "¡Es un día laboral!";
    } else if (dia === "sabado" || dia === "domingo") {
      mensaje = "¡Es fin de semana!";
    } else {
      mensaje = "No has ingresado un día válido.";
    }
    
    document.getElementById("mensaje").textContent = mensaje;
  }
  