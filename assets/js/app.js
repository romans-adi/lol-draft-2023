// BURGER

const navMenu = document.querySelector('.nav-menu');
const navToggle = document.querySelector('.nav-toggle');
const navLink = document.querySelectorAll('.nav-link');
const burgerLineTop = document.querySelector('.burger-line-top');
const burgerLineBottom = document.querySelector('.burger-line-bottom');

function toggleBurger() {
  const width = window.innerWidth;
  const visibility = navMenu.getAttribute('data-visible');
  if (visibility === 'false' && width < 768) {
    navToggle.setAttribute('aria-expanded', true);
    navMenu.setAttribute('data-visible', true);
    navMenu.setAttribute('aria-expanded', true);
    burgerLineBottom.style.y = ('45');
    burgerLineTop.style.y = ('45');
  } else if (visibility === 'true') {
    navToggle.setAttribute('aria-expanded', false);
    navMenu.setAttribute('data-visible', false);
    navMenu.setAttribute('aria-expanded', false);
    burgerLineBottom.style.y = ('0');
    burgerLineTop.style.y = ('80');
  }
}

navToggle.addEventListener('click', () => {
  toggleBurger();
});

navLink.forEach((navLink) => navLink.addEventListener('click', () => {
  toggleBurger();
}));
