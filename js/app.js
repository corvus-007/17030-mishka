window.addEventListener('DOMContentLoaded', function() {
  var toggleMenu = document.querySelector('.top-menu__toggle');
  var mainNav = document.querySelector('.main-nav');
  toggleMenu.classList.remove('top-menu__toggle--no-js');
  mainNav.classList.remove('main-nav--no-js');

  if (toggleMenu) {
    toggleMenu.addEventListener('click', function(event) {
      event.preventDefault();
      toggleMenu.classList.toggle('top-menu__toggle--closed');
      mainNav.classList.toggle('main-nav--closed');
    });
  }
});
