let Nome = document.getElementById("nome").value
let Apelido = document.getElementById("apelido").value
let Numero = document.getElementById("numero").value
let Senha = document.getElementById("senha").value
let btn = document.querySelector("button")

alert(nome, apelido, numero)

const User = {
    nome: Nome,
    apelido: Apelido,
    numero: Numero,
    senha: Senha
}

const BD = []
BD.push(User)

const add = () =>{
btn.addEventListener("click",()=>{
 
    console.log(Numero.value)
    localStorage.setItem("User",JSON.stringify(BD))
})   

}


add()