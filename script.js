// FUNÇÃO PARA ABRIR E FECHAR O MENU
function clickMenu() {
    if (itens.style.display == 'flex') {
        itens.style.display = 'none'
    } else {
        itens.style.display = 'flex'
    }
}

// FUNÇÃO PARA MUDAR O SRC DO IFRAME PARA O ABOUT
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