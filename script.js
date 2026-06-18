const btnMenu = document.getElementById('btn-menu');
const menuNavegacao = document.getElementById('menu-navegacao');

function toggleMenu() {
    btnMenu.classList.toggle('ativo');
    menuNavegacao.classList.toggle('ativo');
}

btnMenu.addEventListener('click', toggleMenu);