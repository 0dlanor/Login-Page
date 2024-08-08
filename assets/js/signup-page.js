let menuLateral = document.querySelector('.menu-button')

let verSenha = document.querySelector('.fa-eye')

let msgError = document.querySelector('#msgError')

let nome = document.querySelector('#nome')
let nomeLabel = document.querySelector('#nomeLabel')
let validNome = false

let usuario = document.querySelector('#usuario')
let usuarioLabel = document.querySelector('#usuarioLabel')
let validUsuario = false

let senha = document.querySelector('#senha')
let senhaLabel = document.querySelector('#senhaLabel')
let validSenha = false



function abrirMenu(){
    let sideMenu = document.querySelector('.sideMenu')
    
    if (sideMenu.style.left === '0px'){
        sideMenu.setAttribute('style', 'left: var(--sideMenuLeft)')
        
    } else {
        sideMenu.setAttribute('style', 'left: 0px')
        
    }
}

nome.addEventListener('keyup', ()=>{

    if(nome.value.length <= 2){
        nome.setAttribute('style', 'background-color: var(--inputUserErrorBg)')
        nomeLabel.setAttribute('style', 'color: var(--inputUserErrorBg)')
        nomeLabel.innerHTML = "Insira no mínimo 3 caracteres"
        validNome = false
    } else {
        nome.setAttribute('style', 'background-color: var(--inputUserValidBg)')
        nomeLabel.setAttribute('style', 'color: var(--inputUserFont)')
        nomeLabel.innerHTML = "Nome"
        validNome = true
    }

})

usuario.addEventListener('keyup', ()=>{
    let listaUser = JSON.parse(localStorage.getItem('listaUser')) || []
    
    if(usuario.value.length <= 4){
        usuario.setAttribute('style', 'background-color: var(--inputUserErrorBg)')
        usuarioLabel.setAttribute('style', 'color: var(--inputUserErrorBg)')
        usuarioLabel.innerHTML = "Insira no mínimo 5 caracteres"
        validUsuario = false
    } else {
        listaUser.forEach(item => {
            if (usuario.value == item.userCad){
                usuario.setAttribute('style', 'background-color: var(--inputUserErrorBg)')
                usuarioLabel.setAttribute('style', 'color: var(--inputUserErrorBg)')
                usuarioLabel.innerHTML = "Este nome de usuário já está em uso"
                validUsuario = false

            } else {
                usuario.setAttribute('style', 'background-color: var(--inputUserValidBg)')
                usuarioLabel.setAttribute('style', 'color: var(--inputUserFont)')
                usuarioLabel.innerHTML = "Usuário"
                validUsuario = true

            }
        });
    }
    
})

senha.addEventListener('keyup', ()=>{
    
    if(senha.value.length <= 5){
        senha.setAttribute('style', 'background-color: var(--inputUserErrorBg)')
        senhaLabel.setAttribute('style', 'color: var(--inputUserErrorBg)')
        senhaLabel.innerHTML = "Insira no mínimo 6 caracteres"
        validSenha = false
    } else {
        senha.setAttribute('style', 'background-color: var(--inputUserValidBg)')
        senhaLabel.setAttribute('style', 'color: var(--inputUserFont)')
        senhaLabel.innerHTML = "Senha"
        validSenha = true
    }
    
})

verSenha.addEventListener('click', ()=>{

    if(senha.getAttribute('type') == 'password'){
        senha.setAttribute('type', 'text');

    } else {
        senha.setAttribute('type', 'password');

    }
})

function cadastrar(){
    if (validNome && validUsuario && validSenha){
        msgError.setAttribute('style', 'display: none')
        let listauser = JSON.parse(localStorage.getItem('listaUser')) || []
        
        listauser.push(
            {
                nomeCad: nome.value,
                userCad: usuario.value,
                senhaCad: senha.value
            }
        )
        localStorage.setItem('listaUser', JSON.stringify(listauser))

        setTimeout(window.location.href = '../html/login-page.html', 2000)
    } else {
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = "Preencha todos os campos antes de cadastrar."
    }
}

//#region Mudar Tema
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
//#endregion