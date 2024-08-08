let username = document.querySelector('#username')

let userLogged = JSON.parse(localStorage.getItem('userLogado'))

if(localStorage.getItem('token') == null){
    alert('Você precisa estar logado para acessar esta página')
    window.location.href = '../html/login-page.html'
}

if (userLogged) {
    let nome = userLogged.nome
    username.innerHTML += nome

}



function sair(){
    localStorage.removeItem('token')
    localStorage.removeItem('userLogado')
    window.location.href = '../html/login-page.html'
}


function abrirMenu(){
    let sideMenu = document.querySelector('.sideMenu')

    if (sideMenu.style.left === '0px'){
       sideMenu.setAttribute('style', 'left: var(--sideMenuLeft)')

    } else {
        sideMenu.setAttribute('style', 'left: 0px')

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