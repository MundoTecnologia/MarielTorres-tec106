/*
let idade = prompt("Digite a idade")

idade >= 18 ? console.log("Você já é maior de idade!") : console.log("Você ainda não é maior de idade!") */


/*
do{

    if(idade >= 18){
        alert("Você já é maior de idade!")
        break;
    }else{
        alert("Você ainda não é maior de idade!")
        break;
    }
}while(idade <= 18)*/

 function MostrarMensagem(){
    console.log("Olá Mundo!")
 }

 //setInterval(MostrarMensagem,5000)
 setTimeout(MostrarMensagem,3000)

var data = new Date()
var diaMes = data.getDate()
var mes = data.getMonth()
var ano = data.getFullYear()

var hora = data.getHours()
var minuto = data.getMinutes()
var segundos = data.getSeconds()

console.log(`Hoje é dia ${diaMes}/${mes+1}/${ano}, ${hora}:${minuto}:${segundos}`)i6r

