`use strict`;

// header movements
const navBar = document.getElementById('navBar');
const body = document.querySelector('body');
const hamburger = document.querySelector('.header__hamburger');
const header = document.querySelector('header');
const hamburgerBackground = document.getElementById('hamburgerBackground');

hamburger.addEventListener('click', function () {
  navBar.classList.toggle('displayNone');
  hamburger.classList.toggle('header__hamburger-cross');
  body.classList.toggle('overflowYHidden');
  hamburgerBackground.classList.toggle('hamburgerBackgroundOn');
});

hamburgerBackground.addEventListener('click', function () {
  navBar.classList.toggle('displayNone');
  hamburger.classList.toggle('header__hamburger-cross');
  body.classList.toggle('overflowYHidden');
  hamburgerBackground.classList.toggle('hamburgerBackgroundOn');
});
