const h1 = document.querySelector('h1');
const p = document.querySelectorAll('p');
const parrafito = document.getElementsByClassName('.parrafito');
const pid = document.getElementById('#pid');
const input = document.querySelector('input');

console.log(h1.innerHTML);
console.log(input.value);
console.log(pid);

console.log({
  h1,
  p,
  parrafito,
  pid,
  input,
});