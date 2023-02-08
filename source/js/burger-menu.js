const burgerOpenButton = document.querySelector('.header__burger-toggle');
const dropDownMenu = document.querySelector('.header__drop-down-wrapper');
const body = document.querySelector('.page__body');
const navList = document.querySelector('.header__nav-list');

const onNavListClick = (evt) => {
  if (evt.target.nodeName === 'A') {
    closeMenu();
  }
}

const openMenu = () => {
  dropDownMenu.classList.add('header__drop-down-wrapper--menu-opened');
  burgerOpenButton.classList.add('header__burger-toggle--menu-opened');
  body.classList.add('page__body--menu-opened');

  let burgerCloseButton = document.querySelector('.header__burger-toggle--menu-opened');

  burgerCloseButton.addEventListener('click', closeMenu);
  navList.addEventListener('click', onNavListClick);
}

function closeMenu () {
  let burgerCloseButton = document.querySelector('.header__burger-toggle--menu-opened');

  dropDownMenu.classList.remove('header__drop-down-wrapper--menu-opened');
  burgerCloseButton.classList.remove('header__burger-toggle--menu-opened');
  body.classList.remove('page__body--menu-opened');
  burgerCloseButton.removeEventListener('click', closeMenu);
  navList.removeEventListener('click', onNavListClick);
}

const initMenu = () => {
    burgerOpenButton.addEventListener('click', openMenu);
}

export { initMenu };
