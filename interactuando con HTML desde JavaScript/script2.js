const collection = document.getElementsByClassName("example");
collection[0].innerHTML = "Hello World!";
collection[4].innerHTML = "marica tuuu"
console.log(collection.length)
console.log(collection);

for (let index = 0; index < collection.length; index++) {
    const element = collection[index];
    console.log(element.innerHTML);
}
