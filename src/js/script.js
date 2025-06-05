// HAMBURGER MENU
const btnHamburger = document.getElementById('hamburger');
const navMenu      = document.getElementById('header-menu');

btnHamburger.addEventListener('click', () => {
  // Anima o ícone
  btnHamburger.classList.toggle('active');
  // Revela/esconde o menu
  navMenu.classList.toggle('active');
});
// FECHAR MENU APÓS CLIQUE EM ITEM (MOBILE) E SCROLL PARA A SEÇÃO
document.querySelectorAll('.menu-link').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const targetId = link.getAttribute('href'); // ex: "#historia"
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      // Calcula offset para compensar o header fixo (aprox. 80px de altura)
      const offset = targetElement.offsetTop - 80;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }

    // Fecha o menu se estiver aberto (modo mobile)
    if (navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
      btnHamburger.classList.remove('active');
    }
  });
});
// TEMAS BACKGROUND
document.querySelectorAll('.theme-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.body.setAttribute('data-theme', btn.dataset.theme);
    document.querySelectorAll('.theme-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});