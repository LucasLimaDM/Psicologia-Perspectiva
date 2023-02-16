
let navHeader = document.querySelector('#button-container')
let sidebar = document.querySelector('#sidebar')
let menu = document.querySelector('#menu')
sidebar.innerHTML = navHeader.innerHTML;

// Abre e fecha o menu
menu.addEventListener('click', function(){
    listenerLink()
    if (sidebar.classList.contains('aberto')) {
        sidebar.classList.remove('aberto')
    } else {
        sidebar.classList.add('aberto')
    }
})


// chama a função scrollNaTela ao clicar em cada link 
function listenerLink() {
    let links = document.querySelectorAll('#sidebar a');
    console.log("🚀 ~ file: script.js:21 ~ listenerLink ~ links", links)
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function() {scrollNaTela(i)})
    }
}


// faz o scroll da página ir até a posição desejada
function scrollNaTela(numPosition) {

    let targetOffset = $(trataPosition(numPosition)).offset().top
    let targetPosition = parseInt(targetOffset)-70
    $('html,body').animate({scrollTop: targetPosition}, 500)
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