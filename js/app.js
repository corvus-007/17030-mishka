window.addEventListener('DOMContentLoaded', () => {
  let toggleMenu = document.querySelector('.top-menu__toggle');
  let mainNav = document.querySelector('.main-nav');
  toggleMenu.classList.remove('top-menu__toggle--no-js');
  mainNav.classList.remove('main-nav--no-js');

  toggleMenu.addEventListener('click', (event) => {
    event.preventDefault();

    if (toggleMenu.classList.contains('top-menu__toggle--closed')) {
      toggleMenu.classList.remove('top-menu__toggle--closed');
      mainNav.classList.remove('main-nav--closed');
      toggleMenu.classList.add('top-menu__toggle--opened');
      mainNav.classList.add('main-nav--opened');
    } else {
      toggleMenu.classList.remove('top-menu__toggle--opened');
      mainNav.classList.remove('main-nav--opened');
      toggleMenu.classList.add('top-menu__toggle--closed');
      mainNav.classList.add('main-nav--closed');
    }
  });
});
