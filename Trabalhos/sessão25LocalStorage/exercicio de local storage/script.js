let nome = document.getElementById("nome")
let numero = document.getElementById("numero")
let senha = document.getElementById("senha")
let btn = document.querySelector("button")

console.log(nome)
console.log(numero)
console.log(senha)
console.log(btn)

const Add = () =>{
    btn.addEventListener("click",()=>{
        localStorage.setItem("Nome",nome.value)
        localStorage.setItem("Numero",numero.value)
        localStorage.setItem("Senha",senha.value)
    })
}

Add()
