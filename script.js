
let ulHeader = document.querySelector('#button-container ul')
let sidebar = document.querySelector('#sidebar')
let ulSidebar = document.querySelector('#sidebar ul')
let menu = document.querySelector('#menu')
ulSidebar.innerHTML += ulHeader.innerHTML;
let menuSidebar = document.querySelector('#menu-sidebar')


// Abre e fecha o menu
menu.addEventListener('click', function(){
    console.log('menu!')
    listenerLink()
    sidebar.classList.add('aberto')
})
menuSidebar.addEventListener('click', function(){
    console.log('menu close')
    listenerLink()
    sidebar.classList.remove('aberto')
})

// chama a função scrollNaTela ao clicar em cada link 
function listenerLink() {
    let linksHeader = document.querySelectorAll('header a');
    console.log("🚀 ~ file: script.js:21 ~ listenerLink ~ links", linksHeader)
    for (let i = 0; i < linksHeader.length; i++) {
        linksHeader[i].addEventListener('click', function() {scrollNaTela(i)})
    }

    let linksSidebar = document.querySelectorAll('#sidebar a');
    console.log("🚀 ~ file: script.js:21 ~ listenerLink ~ links", linksSidebar)
    for (let i = 0; i < linksSidebar.length; i++) {
        linksSidebar[i].addEventListener('click', function() {scrollNaTela(i)})
    }
}


// faz o scroll da página ir até a posição desejada
function scrollNaTela(numPosition) {

    let targetOffset = $(trataPosition(numPosition)).offset().top
    let targetPosition = parseInt(targetOffset)-70
    $('html,body').animate({scrollTop: targetPosition}, 400)
}

// troca o valor numérico de i pelo respectivo indicador jquery
function trataPosition(number) {
    switch (number) {
        case 0:
            return '#apresentacao'
            break;
        case 1:
            return '#cursos'
            break
        case 2:
            return '#contato'
        default:
            console.error('switch recebendo valor invalido')
    }
}

document.body.onresize = function(){
    if(sidebar.classList.contains('aberto')){
        sidebar.classList.remove('aberto')
    }   
}