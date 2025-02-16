const mostrar = document.getElementById("mostrar")
const clique = document.getElementById("clique")
const input = document.querySelector("input")
const btn = document.querySelector("button")
const imagem = document.getElementById("imagem")
const Data = new Date()
const hora = Data.getHours()
console.log(imagem)

mostrar.innerText = `São ${hora} horas agora`
const AparecerForm = () =>{
    clique.addEventListener("click", ()=>{       
        input.style.display = "block"
        btn.style.display = "block"
    })
}

AparecerForm()

const TrocarImg = ()=>{
    
    btn.addEventListener("click", ()=>{
        if(input.value === "" || input.value < 0 || input.value > 23){
            alert("Insira uma hora válida entre 0 e 23")
            input.value = ""
            return;
        }

        if(input.value >= 0 && input.value < 12){
            imagem.src = "manhã.jpg"
            mostrar.innerText = `São ${input.value} horas, é de manhã!`
            document.body.style.backgroundColor = "dodgerblue"
            input.value = ""
        }

        if(input.value >= 12 && input.value < 18){
            imagem.src = "tarde.png"
            mostrar.innerText = `São ${input.value} horas, é de tarde!`
            document.body.style.backgroundColor = "orange"
            input.value = ""
        }

        if(input.value >= 18 && input.value <= 23){
            imagem.src = "noite.jpg"
            mostrar.innerText = `São ${input.value} horas, é de noite!`
            document.body.style.backgroundColor = "black"
            input.value = ""
        }
    })
}

TrocarImg()