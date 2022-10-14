window.addEventListener("load", function(){
    let api = fetch("https://rickandmortyapi.com/api/character");

    api.then(function(respuesta){
    return respuesta.json()
    })

        .then(function(res){
        console.log(res)

        for (let i = 0; i < res.results.length; i++) {
            document.querySelector("div").innerHTML += 
        ` <section >
            <h2>${ res.results[i].name}</h2>
            <img src=${res.results[i].image}>
            <p>${res.results[i].status}</p>
            <p>${res.results[i].species}</p>
        </section> 
        `
            // let nombre = "<h2>" + res.results[i].name + "</h2>";
            // let imagen = "<img src=" + res.results[i].image +">";
            // let especie = "<p> Especie : " + res.results[i].species+ "</p>"
            // let status = "<p> Estado del Personaje : "+ res.results[i].status+ "</p>"
    
            // document.querySelector("div").innerHTML += "<section>" + nombre + imagen + especie + status + "</section>";
}

        })
        .catch(function(e){
            alert("api rota")
        })

    
})


window.addEventListener("load", function(){
    let a = document.querySelectorAll("section");
    a.addEventListener("mouseover", function(){               //mouseout -> se produce cuando pasan el mouse y lo sacas
        a.style.fontSize = "20px"
    })
})




