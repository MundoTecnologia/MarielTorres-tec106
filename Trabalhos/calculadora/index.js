let n1 = Number(prompt("Digite o 1º número: "))
let n2 = Number(prompt("Digite o 2º número: "))
let resultado

let op = prompt("Qual operação desja? \n Soma(+) \n Subtração(-) \n Multiplicação(*) \n Divisão(/)")


if(op == "+"){
    resultado = n1 + n2
}else if(op == "-"){
     resultado = n1 - n2
}else if(op == "*"){
     resultado = n1 * n2
}else if(op == "/"){
    if(n2 != 0){
     resultado = n1 / n2
    }else{
        alert("Não é possível dividir por zero!")
    }
}else{
    alert("Digitou uma operação inválida!")
}

alert("O resultado é: " + resultado )


