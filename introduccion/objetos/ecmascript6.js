function varUser(user, age, country){
    return{
        user: user, //se puede hacer de esta manero oooo
        age, // des esta otra forma, esto es por las versiones del javaScript
        country,
    }
}

user1 = varUser('manuel', 20, 'mexico')
console.log(user1);