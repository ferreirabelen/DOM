// let series = [
//     {
//         nombre : "the 100",
//         año : 2012,
//         puntuacion : 9
//     },
//     {
//         nombre : "greys anatomy",
//         año : 2004,
//         puntuacion : 10
//     },
//     {
//         nombre : "degrassi",
//         año : 2012,
//         puntuacion : 6
//     }
// ]

// function agarrarDatos(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(series);
//         },1500);
//     })
// }

// async function devolverDatos (){
//     const datoSeries = await agarrarDatos();
//     console.log(datoSeries)

// }

// devolverDatos()


const boton = document.getElementById("boton");

boton.addEventListener("click", function (){
    let numero1 = document.getElementById("num1").value;
    let numero2 = document.getElementById("num2").value;
    let suma = parseInt(numero1) +parseInt(numero2);
    alert("la suma es " + suma)

})

const boton2 = document.getElementById("cambiarColor");

boton2.addEventListener("click", function (){
    boton2.style.backgroundColor = "red";
})



const menos = document.getElementById("menos");
const mas = document.getElementById("mas");
mas.addEventListener("click", function(){
    let resultado = document.getElementById("resultado");
    resultado.textContent = resultado + 1;
})








