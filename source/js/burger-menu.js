const burgerOpenButton = document.querySelector('.header__burger-toggle');
const dropDownMenu = document.querySelector('.header__drop-down');
const navList = document.querySelector('.header__nav-list');
const logoLink = document.querySelector('.header__logo-capture');
const body = document.querySelector('.page__body');

const onNavListClick = (evt) => {
  if (evt.target.nodeName === 'A') {
    closeMenu();
  }
}

const onLogoLinkClick = () => {
  closeMenu();
}

const openMenu = () => {
  body.classList.add('page__body--menu-opened');
  dropDownMenu.classList.add('header__drop-down--menu-opened');
  burgerOpenButton.classList.add('header__burger-toggle--menu-opened');

  let burgerCloseButton = document.querySelector('.header__burger-toggle--menu-opened');

  burgerCloseButton.addEventListener('click', closeMenu);
  navList.addEventListener('click', onNavListClick);
  logoLink.addEventListener('click', onLogoLinkClick);
}

function closeMenu () {
  let burgerCloseButton = document.querySelector('.header__burger-toggle--menu-opened');

  body.classList.remove('page__body--menu-opened');
  dropDownMenu.classList.remove('header__drop-down--menu-opened');
  burgerCloseButton.classList.remove('header__burger-toggle--menu-opened');
  burgerCloseButton.removeEventListener('click', closeMenu);
  navList.removeEventListener('click', onNavListClick);
  logoLink.removeEventListener('click', onLogoLinkClick);
}

const initMenu = () => {
    burgerOpenButton.addEventListener('click', openMenu);
}

export { initMenu, dropDownMenu, closeMenu, burgerOpenButton, openMenu };
