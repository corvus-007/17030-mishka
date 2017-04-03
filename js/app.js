window.addEventListener('DOMContentLoaded', function() {
  var toggleMenu = document.querySelector('.main-nav__toggle');
  var mainNav = document.querySelector('.main-nav');

  var modal = document.querySelector('.modal');
  var triggerModalItems = document.querySelectorAll('.js-trigger-modal');

  mainNav.classList.remove('main-nav--no-js');

  if (toggleMenu) {
    toggleMenu.addEventListener('click', function(event) {
      event.preventDefault();
      mainNav.classList.toggle('main-nav--closed');
    });
  }

  if (modal) {
    modal.classList.remove('modal--no-js');

    Array.prototype.forEach.call(triggerModalItems, function(triggerModal) {
      console.log(triggerModal)
      triggerModal.addEventListener('click', function(event) {
        event.preventDefault();
        modal.classList.toggle('modal--closed');
      });
    });

    modal.addEventListener('click', function(event) {
      modal.classList.toggle('modal--closed');
    });
  }
});
