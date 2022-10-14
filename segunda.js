// const prompt = require("prompt-sync")({sigint:true});

let numeroPi = Math.PI
console.log(numeroPi)

let numeroRandom = Math.random()
console.log(numeroRandom)


let round = Math.round(1.5)
console.log(round)

let numeroMaximo = Math.max(10, 70, 011, 24)
console.log(numeroMaximo)


//for in 

let persona = {
    nombre : "Agustin", 
    edad : 24,
    profesion : "Programador"
}

for( let caracteristicas in persona){   //crear una variable X EN persona y mostrarla 
    console.log(persona[caracteristicas])
}


// for of 
let frutas = ["manzana", "pera", "naranja"];

for (let fruta of frutas){             
    console.log(fruta)
}


