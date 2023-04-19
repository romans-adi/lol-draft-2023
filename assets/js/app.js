// BURGER

const navMenu = document.querySelector('.nav-menu');
const navToggle = document.querySelector('.nav-toggle');
const navLink = document.querySelectorAll('.nav-link');

//  const burgerLineTop = document.querySelector('.burger-line-top');
//  const burgerLineBottom = document.querySelector('.burger-line-bottom');

function toggleBurger() {
  const width = window.innerWidth;
  const visibility = navMenu.getAttribute('data-visible');
  if (visibility === 'false' && width < 768) {
    navToggle.setAttribute('aria-expanded', true);
    navMenu.setAttribute('data-visible', true);
    navMenu.setAttribute('aria-expanded', true);
    navMenu.classList.remove('hidden');
    // burgerLineBottom.style.y = ('60');
    // burgerLineTop.style.y = ('60');
  } else if (visibility === 'true') {
    navToggle.setAttribute('aria-expanded', false);
    navMenu.setAttribute('data-visible', false);
    navMenu.setAttribute('aria-expanded', false);
    navMenu.classList.add('hidden');
    //  burgerLineBottom.style.y = ('20');
    // burgerLineTop.style.y = ('55');
  }
}

navToggle.addEventListener('click', () => {
  toggleBurger();
});

navLink.forEach((navLink) => navLink.addEventListener('click', () => {
  toggleBurger();
}));
