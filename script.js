// FUNÇÃO PARA ABRIR E FECHAR O MENU
////function clickBurguer() {
//    if (iframe.src == 'opcao.html') {
//        iframe.src = 'home.html'
//    } else {
//        iframe.src = 'opcao.html'
//    }
//} 

function clickBurguer(){
    iframe = document.getElementById('conteudo');
    iframe.src = 'opcao.html';
}

//FUNÇÃO PARA MUDAR O SRC DO IFRAME PARA O ABOUT
function clickAbout() {
    iframe = document.getElementById('conteudo');
    iframe.src = 'about.html';
}

//FUNÇÃO PARA MUDAR O SRC DO IFRAME PARA O HOME
function clickHome() {
    iframe = document.getElementById('conteudo');
    iframe.src = 'home.html';
}

//FUNÇÃO PARA MUDAR O SRC DO IFRAME PARA O MORE
function clickMore() {
    iframe = document.getElementById('conteudo');
    iframe.src = 'more.html';
}

//FUNÇÃO PARA MUDAR O SRC DO IFRAME PARA O GALERY
function clickGalery() {
    iframe = document.getElementById('conteudo');
    iframe.src = 'galery.html';
}