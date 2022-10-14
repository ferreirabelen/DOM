window.addEventListener("load", function(){                  //clase 8 viendo eventos
    let boton = this.document.getElementById("homeButon");
    boton.addEventListener("click", function(){
        boton.style.backgroundColor = "red";
        alert("tocaste el boton");
    })
})



//mousseover, pasar el maouse por encima para ver los cambios
window.addEventListener("load", function(){
    let segundoBoton = this.document.getElementById("secondButon");
    segundoBoton.addEventListener("mouseover", function(){               //mouseout -> se produce cuando pasan el mouse y lo sacas
        segundoBoton.style.fontSize = "20px"
    })
})


//que todos los botones tengan el mismo evento
window.addEventListener("load", function(){
    let botones = document.querySelectorAll(".clasecompartida");

    for(let i = 0; i < botones.length; i++){
        botones[i].addEventListener("click", function(){
            this.style.color = "blue"
        })
    }
})


//eventos del teclado
window.addEventListener("keypress", function(){
    this.alert("presionaste una tecla random")
})

//nos dice la letra presionada
window.addEventListener("keypress", function(e){
    if(e.key == "a"){
        console.log("GOD presionaste la A")
    }else{
        console.log("presionaste la tecla" + e.key)
    }
    
})