// const tema = confirm('Desea aplicar el tema oscuro?');

// if (tema) {
//   document.querySelector('body').classList.add('dark')
// }

// function cambiarEstilo() {
//   let body = document.querySelector('body')
//   let h1 = document.querySelector('h1')
//   let items = document.querySelectorAll(".item")

//   body.style.backgroundColor = "rgb(19, 19, 19)"
//   h1.style.backgroundColor = "rgb(19, 19, 19)"
//   h1.style.color = "rgb(170, 170, 170)"
//   h1.style.borderColor = "rgb(19, 19, 19)"

//   for( let item of items) {
//     item.style.backgroundColor = "rgb(19, 19, 19)"
//     item.style.color ="rgb(170, 170, 170)"
//     item.style.borderColor = "rgb(230, 230, 230)"
//   }

// }

// function cambiarEstilo() {
//   document.querySelector('body').classList.toggle('dark')
// }

let felinos =   [
  {
    imagen: "./imagenes/tiger.jpg",
    titulo: "El tigre",
    descripcion: "El tigre (Panthera tigris) es una de las especies​ de la subfamilia de lo"
  },
  {
    imagen: "./imagenes/tiger.jpg",
    titulo: "El tigre",
    descripcion: "El tigre (Panthera tigris) es una de las especies​ de la subfamilia de lo"
  },
]

felinos.forEach( felino => {
  document.querySelector(".contenedor").innerHTML += 
  ` <div class="item">
       <img src=${felino.imagen}>
       <h2>${felino.titulo}</h2>
        <p>${felino.descripcion}</p>
    </div> 
  `
})


for ( let felino of felinos) {
  let div = document.createElement("div")
  let img = document.createElement("img")
  let h2 = document.createElement("h2")
  let p = document.createElement("p")
 // nodo padre > apendizamos > hijo
  div.appendChild(img)
  div.appendChild(h2)
  div.appendChild(p)

  h2.innerText =  `${felino.titulo}`
  p.innerText =  `${felino.descripcion}`

  div.setAttribute("class", "item")
  img.setAttribute("src", `${felino.imagen}`)
  document.querySelector(".contenedor").appendChild(div)
  console.log(div)
}

