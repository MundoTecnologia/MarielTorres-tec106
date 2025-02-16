
const notify = document.querySelector("#notify")
Usuarios = JSON.parse(localStorage.getItem('cadastros')) || []

function Cadastrar() {
    inputNome = document.querySelector("#nome").value.trim()
    inputSenha = document.querySelector("#senha").value.trim()
    inputconfSenha = document.querySelector("#confSenha").value.trim()

    Usuarios.push(objItem = {
        nome: inputNome,
        email: inputEmail,
        senha: inputSenha,
        codigo: inputCodigo,
        caminho: inputImagem,
        contacto: inputTelefone,
    })

    localStorage.setItem('cadastros', JSON.stringify(Usuarios))

}
