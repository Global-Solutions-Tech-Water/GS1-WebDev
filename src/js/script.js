// HAMBURGER MENU
const btnHamburger = document.getElementById('hamburger');
const navMenu      = document.getElementById('header-menu');

btnHamburger.addEventListener('click', () => {
  // Anima o ícone
  btnHamburger.classList.toggle('active');
  // Revela/esconde o menu
  navMenu.classList.toggle('active');
});
