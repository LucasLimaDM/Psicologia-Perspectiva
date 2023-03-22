
let ulHeader = document.querySelector('.button-container ul')
let sidebar = document.querySelector('.sidebar')
let ulSidebar = document.querySelector('.sidebar ul')
let menu = document.querySelector('.menu')
ulSidebar.innerHTML += ulHeader.innerHTML;
let menuSidebar = document.querySelector('.menu-sidebar')


// Abre e fecha o menu
menu.addEventListener('click', function(){
    console.log('menu!')
    // listenerLink()
    sidebar.classList.add('aberto')
})
menuSidebar.addEventListener('click', function(){
    console.log('menu close')
    // listenerLink()
    sidebar.classList.remove('aberto')
})

// adiciona o event que chama a função scrollNaTela ao clicar em cada link 

let linksHeader = document.querySelectorAll('header a');
let linksSidebar = document.querySelectorAll('#sidebar a');

linksListener(linksHeader);
linksListener(linksSidebar);

function linksListener(links) {
    for (let i = 0; i < links.length; i++) {
        console.log(i)
        console.log(links[i])
        links[i].addEventListener('click', function() {scrollNaTela(i)})
    }
}

// faz o scroll da página ir até a posição desejada
function scrollNaTela(numPosition) {

    console.log()
    let targetOffset = document.querySelector(trataPosition(numPosition)).offsetTop;
    window.scrollTo(0, targetOffset - 110);
}



// troca o valor numérico de i pelo respectivo indicador jquery
function trataPosition(number) {
    switch (number) {
        case 0:
            return '#apresentacao'
        case 1:
            return '#cursos'
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