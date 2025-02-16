var nome = "MARIEL"
let idade = 16
let numero = 69

const car = {
    color: "blue",
    weight: 60
}

const pessoa = {
    nome: "MingoPi",
    idade: 10
}

localStorage.setItem("Nome",nome)
localStorage.setItem("Age",idade)
localStorage.setItem("Carro",JSON.stringify(car))
var carro = JSON.parse(localStorage.getItem("Carro"))
console.log(carro)
console.log(carro.color)
console.log(carro.weight)


//Recuperar dados
alert(localStorage.getItem("Nome"))

//Remover dados
localStorage.removeItem("Nome")

//Remover tudo
//localStorage.clear()

//Quantidade total de elementos
localStorage.length

localStorage.setItem("usuario",JSON.stringify(pessoa))

 usuario = JSON.parse(localStorage.getItem("usuario"))
console.log(usuario.nome)

// testar usar receber o objecto no código sem antes converter para parse