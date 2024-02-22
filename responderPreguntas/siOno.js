function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

function showOk() {
  alert("Estás de acuerdo.");
}

function showCancel() {
  alert("Cancelaste la ejecución.");
}

// uso: las funciones showOk, showCancel son pasadas como argumentos de ask
ask("Estás de acuerdo?", showOk, showCancel);

/////////////////////////////////////////////////////////////////////////////////////
function ask(question) {
  if (confirm(question)) {
    showOk();
  } else {
    showCancel();
  }
}

function showOk() {
  alert("Claro que si.");
}

function showCancel() {
  alert("Cancelaste la ejecución.");
}

ask("Resolviste el ejercicio?");

//////////////////////////////////////////////////////////////////////////////////////////////

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Estás de acuerdo?",
  function () {
    alert("Estás de acuerdo");
  },
  function () {
    alert("Cancelaste la ejecución.");
  }
);
