let menuLateral = document.querySelector('.menu-button')

let verSenha = document.querySelector('.fa-eye')

let inputsenha = document.querySelector('#senha')

verSenha.addEventListener('click', ()=>{

    if(senha.getAttribute('type') == 'password'){
        senha.setAttribute('type', 'text');

    } else {
        senha.setAttribute('type', 'password');

    }
})

function abrirMenu(){
    let sideMenu = document.querySelector('.sideMenu')

    if (sideMenu.style.left === '0px'){
       sideMenu.setAttribute('style', 'left: var(--sideMenuLeft)')

    } else {
        sideMenu.setAttribute('style', 'left: 0px')

    }
}

function entrar(){
    let usuario = document.querySelector('#usuario')
    let senha = document.querySelector('#senha')
    let msgError = document.querySelector('#msgError')

    let listaUser = []

    let userValid = {
        nome: '',
        user: '',
        senha: ''
    }


    listaUser = JSON.parse(localStorage.getItem('listaUser'))
    
    listaUser.forEach((item) =>{
        if (usuario.value == item.userCad && String(senha.value) == String(item.senhaCad)){
            userValid = {
                nome: item.nomeCad,
                user: item.userCad,
                senha: item.senhaCad
            }
        }

    });

    if (userValid.user != '' && userValid.senha != '' && usuario.value == userValid.user && String(senha.value) == String(userValid.senha)){ 
       
        usuario.setAttribute('style', 'background: var(--inputUserBg)')
        senha.setAttribute('style', 'background: var(--inputUserBg)') 
        msgError.setAttribute('style', 'display: none')

        console.log(userValid)

        let token = Math.random().toString(16).substring(2)
        localStorage.setItem('token', token)

        localStorage.setItem('userLogado', JSON.stringify(userValid))

        setTimeout(window.location.href = "../html/index.html", 4000)

    } else {
        usuario.setAttribute('style', 'background: var(--inputUserErrorBg)')
        senha.setAttribute('style', 'background: var(--inputUserErrorBg)')
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Senha ou usuário incorretos.'
        senha.value = ""
        senha.focus()
    }

}

const mudarTema = document.querySelector('#tema-claro')
const themeSystem = localStorage.getItem('themeSystem') || "dark"

mudarTema.addEventListener('click', ()=>{
    let temaAntigo = localStorage.getItem("themeSystem") || "dark"
    let temaNovo = temaAntigo == "dark" ? "light" : "dark"

    localStorage.setItem('themeSystem', temaNovo)
    definirTemaAtual(temaNovo)
})

function definirTemaAtual(theme){
    document.documentElement.setAttribute("data-theme", theme)

    theme == "dark" ? mudarTema.checked = false : mudarTema.checked = true
}

definirTemaAtual(themeSystem)