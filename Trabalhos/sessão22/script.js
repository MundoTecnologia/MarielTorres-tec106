var container = document.querySelector("div")
console.log(container)

var tagLink = document.createElement("a")
tagLink.setAttribute("href","")

var textLink = document.createTextNode("Acessar")
tagLink.appendChild(textLink)

container.appendChild(tagLink)

var img = document.createElement("img")
img.setAttribute("src","Mariel.jpg")
container.appendChild(img)

var botao = document.querySelector("button")
console.log(botao)

const trocar = ()=>{
    botao.addEventListener("click",()=>{
        img.src = "captura.png"
    })
}

trocar()
console.log(botao)