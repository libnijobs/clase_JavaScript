function fruit(){

    if (true) {
    var fruit1 = 'apple' // function scope or global
    let fruit2 = 'coconut'
    const fruit3 = 'orange'

    console.log(fruit2); //block scope
    console.log(fruit3); //block scope

    }

    console.log(fruit1); // apple
}
fruit()