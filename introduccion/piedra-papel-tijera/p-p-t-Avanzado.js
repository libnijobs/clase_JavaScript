const piedra = '1';
const papel = '2';
const tijera = '3';

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let jugador = 0
let pc = 0
let triunfos = 0
let perdidas = 0

while (triunfos <= 2 && perdidas <= 2) {
    pc = aleatorio(1,3)
    jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera")
// COMBATE
if (pc == jugador) {
    alert("EMPATE") 
    triunfos = triunfos + 1
    perdidas = perdidas + 1
} else if (jugador == piedra && pc == tijera) {
    alert("GANAs con: " + jugador)
    triunfos = triunfos + 1
} else if (jugador == papel && pc == piedra) {
    alert("GANAs con: " + jugador)
    triunfos = triunfos + 1
} else if (jugador == tijera && pc == papel) {
    alert("GANAs con: " + jugador)
    triunfos = triunfos + 1
} else {
    alert("GANA el computador con: " + pc+ '')
    perdidas = perdidas + 1
}
}
if(triunfos >= 3){
    alert("Gano el usuario con: " + triunfos + " veces. Perdiste " + perdidas + " veces.")
}else if(perdidas >= 3){
    alert("Gano el computador con: " + perdidas + " veces. Perdio " + triunfos + " veces.")
}



