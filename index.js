let links = document.querySelectorAll('a');



// faz o scroll da página ir até a posição desejada
function scrollNaTela(numPosition) {

    let targetOffset = $(trataPosition(numPosition)).offset().top
    let targetPosition = parseInt(targetOffset)-70
    $('html,body').animate({scrollTop: targetPosition}, 500)
}

// chama a função scrollNaTela ao clicar em cada link 
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function() {scrollNaTela(i)})
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