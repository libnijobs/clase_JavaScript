const collection = document.getElementsByClassName("example");
collection[0].innerHTML = "Hello World!";
collection[4].innerHTML = "marica tuuu"
console.log(collection.length)
console.log(collection);

for (let index = 0; index < collection.length; index++) {
    const element = collection[index];
    console.log(element.innerHTML);
}


const h1 = document.querySelector('h1:nth-child(2)');
// h1.innerHTML = "Aqui estamos editando el HTML desde JavaScript <br> esta es la otra version, naaaa es un salto de linea"
// la diferencia entre los dos es que uno convierte el codigo a HTML (.innerHTML) y el otro solo a texto (.innerText)
h1.innerText = "Aqui estamos editando el HTML desde JavaScript <br> esta es la otra version, naaaa es un salto de linea"// esta es una forma para defendernos de un ataque cybernetico

const p = document.querySelector('p')


//este es para leer que nombre o valor tienen las clases en general
// console.log(p.getAttribute('class'))

//y este otro es para sobeescribir el nombre o valor de esa clase
// console.log(p.setAttribute('class', 'si tiene clase'));

//este es para agregar un el nombre o valor a la clase
p.classList.add('y-ademas-le-agregue-este-texto')

// esto es para eliminar el nombre o valor de las clases, buscandolo desde su propio valor o nombre
p.classList.remove('clase_perro')

input = document.querySelector('input')

input.value = 'holaa'

const Idd = document.getElementById('insercionDEimagen')
const img = document.createElement('img')
img.setAttribute('src', 'https://th.bing.com/th/id/OIP.bR7nCSat8KBNDclCDlZAnAHaHE?rs=1&pid=ImgDetMain')

Idd.append(img)

console.log(document.createElement('img'));