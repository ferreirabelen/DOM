let arrayNumeros = [1,2,4,8]


let suma = 0;
for (let i = 0; i < arrayNumeros.length; i++){

    suma += arrayNumeros[i]
    console.log(suma)
}


//alert
let alerta = alert("Usted esta en la pagina ")

//confirm
let seguirEnPagina = confirm("Quiere seguir en este sitio web?");

console.log(seguirEnPagina) //esto me mostraria true o false 

if(seguirEnPagina){
    console.log("se mantiene en esta pagina");
}else{
    console.log("Usted quiere salir de esta ventana")
}



//prompt
let nombre = prompt("Cual es tu nombre?");
alert("Hola " + nombre + " Bienvenidx")
console.log(prompt("Cuantos años tenés?")) //lo q escriba el usuario me mostrará en la consola

