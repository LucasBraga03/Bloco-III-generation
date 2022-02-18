

let nome = window.document.getElementById('nome');
let email = document.querySelector('#email');
let assunto = document.querySelector('#assunto');
let nomeOk=false;
let emailOk=false;
let assuntoOk=false;

function validaNome(){
    let txtNome=document.querySelector('#txtNome')
    if(nome.value.length < 3 ){
        txtNome.innerHTML='Nome inválido!'
    }else{
        txtNome.innerHTML='Nome válido!'
        nomeOk=true
    }
}
function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1){
        txtEmail.innerHTML='E-mail inválido!'
    }else{
        txtEmail.innerHTML='E-mail válido!'
        emailOk=true
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')
    if(assunto.value.length>=100){
        txtAssunto.innerHTML='Texto não deve ultrapassar 100 caracteres'
        txtAssunto.style.display='block'
    }else{
        txtAssunto.style.display='none'
        assuntoOk=true
    }
}

function enviar(){
    if(nome.value == "" || email.value == "" || assunto.value == ""){
        alert("Todos os campos devem ser preenchidos!")
    } else
    alert("Olá "+ nome.value +"! Seu e-mail foi enviado com sucesso!")
}