

(function() {
 'use strict';

var goTopBtn = document.querySelector('.back_to_top');

window.addEventListener('scroll', trackScroll);


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

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
let logo = document.querySelector('.header__title');
let linkAbout = document.querySelector('.link_about');
let linkProjects = document.querySelector('.link_projects');
let linkContacts = document.querySelector('.link_contacts');
let back = document.querySelector('.back_to_top');

  menuBtn.addEventListener('click', function(){
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
  logo.classList.toggle('active');
});

  linkAbout.addEventListener('click', function() {
    menuBtn.classList.remove('active');
    menu.classList.remove('active');
    logo.classList.remove('active');
  });

  linkProjects.addEventListener('click', function() {
    menuBtn.classList.remove('active');
    menu.classList.remove('active');
    logo.classList.remove('active');
  });

  linkContacts.addEventListener('click', function() {
    menuBtn.classList.remove('active');
    menu.classList.remove('active');
    logo.classList.remove('active');
  });

  back.addEventListener('click', function() {
    menuBtn.classList.remove('active');
    menu.classList.remove('active');
    logo.classList.remove('active');
  });