// FUNÇÃO PARA ABRIR E FECHAR O MENU
let menu = document.getElementById("menu-view");
let hamburger = document.getElementById("hamburger");
let menuClasses = menu.classList;
let hamburgerClasses = hamburger.classList;

hamburger.addEventListener("click", toggleMenu);

function toggleMenu(e) {
    e.preventDefault();
    hamburgerClasses.toggle("is-open");
    menuClasses.toggle("is-open");
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