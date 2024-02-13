console.log(saludo()) //✅ "Hola"
function saludo(){
  return "Hola"
}

console.log(despedida()) //❌ ReferenceError: Cannot access 'despedida' before initialization
const despedida = () => {
  return "Bye"
}