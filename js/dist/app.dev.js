"use strict";

/*-------Mobile or PC----------*/
var isMobile = {
  Android: function Android() {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function BlackBerry() {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  IOS: function IOS() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function Opera() {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function Windows() {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function any() {
    return isMobile.Android() || isMobile.BlackBerry() || isMobile.IOS() || isMobile.Opera() || isMobile.Windows();
  }
};

if (isMobile.any()) {
  document.body.classList.add('touch');
  var menuArrows = document.querySelectorAll('.nav__arrow');

  if (menuArrows.length > 0) {
    menuArrows.forEach(function (item) {
      item.addEventListener('click', function () {
        item.parentElement.classList.toggle('active__arrow');
      });
    });
  }
} else {
  document.body.classList.add('pc');
}
/*--------Smooth scrolling---------*/


var navLinks = document.querySelectorAll('.nav__sub-link[data-goto]');

if (navLinks.length > 0) {
  var onNavLinkCLick = function onNavLinkCLick(item) {
    var navLink = item.target;

    if (navLink.dataset["goto"] && document.querySelector(navLink.dataset["goto"])) {
      var gotoBlock = document.querySelector(navLink.dataset["goto"]);
      var gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;
      /*--------close burger---------*/

      if (iconButton.classList.contains('active__body')) {
        document.body.classList.remove('active__lock');
        iconButton.classList.remove('active__body');
        headerNav.classList.remove('active__body');
      }
      /*-----------------*/


      window.scrollTo({
        top: gotoBlockValue,
        behavior: 'smooth'
      });
      item.preventDefault();
    }
  };

  navLinks.forEach(function (navLink) {
    navLink.addEventListener('click', onNavLinkCLick);
  });
}
/*--------Burger---------*/


var iconButton = document.querySelector('.header__icon');
var headerNav = document.querySelector('.header__nav');

if (iconButton) {
  iconButton.addEventListener('click', function () {
    document.body.classList.toggle('active__lock');
    iconButton.classList.toggle('active__body');
    headerNav.classList.toggle('active__body');
  });
}
/*--------Btn edit---------*/


var btnEdit = document.querySelector('.btn--edit');
btnEdit.addEventListener('click', function () {
  btnEdit.textContent = 'Save'; // btnEdit.innerText === 'Save' ? 'Edit' : 'Save';
  // if (btnEdit.textContent == 'Save') {
  //   btnEdit.textContent = 'Edit';
  // }
});