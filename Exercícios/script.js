

let nome = window.document.getElementById("nome")
let email = window.document.getElementById("email")
let assunto = window.document.getElementById("assunto")
let telefone = window.document.getElementById("telefone")
let data = window.document.getElementById("data")

function enviar(){
    if(nome.value == "" || email.value == "" || assunto.value == "" || telefone.value == "" || data.value == "" ){
        alert("Todos os campos são obrigatórios.")
    }
    else{
        alert("Olá " + nome.value+ "! Seu email foi enviado com sucesso!")
    }
}