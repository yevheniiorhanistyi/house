(function() {
  'use strict';

var goTopBtn = document.querySelector('.back_to_top');

window.addEventListener('scroll', trackScroll);
goTopBtn.addEventListener('click', backToTop);

function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > 500) {
      goTopBtn.classList.add('back_to_top-show');
    }
    if (scrolled < 500) {
      goTopBtn.classList.remove('back_to_top-show');
    }
  }


})();
