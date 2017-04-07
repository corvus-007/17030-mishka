window.addEventListener('DOMContentLoaded', function() {
  var toggleMenu = document.querySelector('.main-nav__toggle');
  var mainNav = document.querySelector('.main-nav');

  var modal = document.querySelector('.modal');
  var triggerModalItems = document.querySelectorAll('.js-trigger-modal');

  var formOrder = document.forms['form-order'];

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
      triggerModal.addEventListener('click', function(event) {
        event.preventDefault();
        modal.classList.toggle('modal--closed');
      });
    });

    modal.addEventListener('click', function(event) {
      modal.classList.toggle('modal--closed');
    });
  }

  if (formOrder) {
    formOrder.addEventListener('keydown', function(event) {
      if (event.keyCode === 13 && event.target.hasAttribute('tabindex')) {
        event.target.control.checked = !event.target.control.checked;
      }
    });
  }
});
