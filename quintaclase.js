let confirmarCambios = confirm("Querés cambiar el color del titulo?");

let titulo = document.querySelector("h1");
titulo.innerHTML = "Estoy modificado en Js";

if(confirmarCambios){
    titulo.style.backgroundColor = "blue";
    titulo.style.color = "white";
    titulo.style.textAlign= "center";
    titulo.style.fontSize = "30px";
}






let p = document.querySelector("p");
let variableInfiltrada = "....soy infiltrada"
p.innerHTML = `<i>Estoy modificando un parrafo con JS</i>  ${variableInfiltrada}`;


