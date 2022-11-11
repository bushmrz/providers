/*-------Mobile or PC----------*/

const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  IOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.IOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};

if (isMobile.any()) {
  document.body.classList.add('touch');

  let menuArrows = document.querySelectorAll('.nav__arrow');
  if (menuArrows.length > 0) {
    menuArrows.forEach((item) => {
      item.addEventListener('click', () => {
        item.parentElement.classList.toggle('active__arrow');
      });
    });
  }
} else {
  document.body.classList.add('pc');
}

/*--------Smooth scrolling---------*/

let navLinks = document.querySelectorAll('.nav__sub-link[data-goto]');

if (navLinks.length > 0) {
  navLinks.forEach((navLink) => {
    navLink.addEventListener('click', onNavLinkCLick);
  });

  function onNavLinkCLick(item) {
    const navLink = item.target;
    if (navLink.dataset.goto && document.querySelector(navLink.dataset.goto)) {
      const gotoBlock = document.querySelector(navLink.dataset.goto);
      const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top +
        scrollY -
        document.querySelector('header').offsetHeight;

      /*--------close burger---------*/
      if (iconButton.classList.contains('active__body')) {
        document.body.classList.remove('active__lock');
        iconButton.classList.remove('active__body');
        headerNav.classList.remove('active__body');
      }
      /*-----------------*/

      window.scrollTo({
        top: gotoBlockValue,
        behavior: 'smooth',
      });
      item.preventDefault();
    }
  }
}

/*--------Burger---------*/

const iconButton = document.querySelector('.header__icon');
const headerNav = document.querySelector('.header__nav');
if (iconButton) {
  iconButton.addEventListener('click', () => {
    document.body.classList.toggle('active__lock');
    iconButton.classList.toggle('active__body');
    headerNav.classList.toggle('active__body');
  });
}

/*--------Btn edit---------*/

const btnEdit = document.querySelector('.btn--edit');
btnEdit.addEventListener('click', () => {
  btnEdit.textContent = 'Save';
  // btnEdit.innerText === 'Save' ? 'Edit' : 'Save';
  // if (btnEdit.textContent == 'Save') {
  //   btnEdit.textContent = 'Edit';
  // }
});
