const burgerOpenButton = document.querySelector('.header__burger-toggle');
const dropDownMenu = document.querySelector('.header__drop-down');
const navList = document.querySelector('.header__nav-list');
const main = document.querySelector('.main');
const footer = document.querySelector('.footer');

const onNavListClick = (evt) => {
  if (evt.target.nodeName === 'A') {
    closeMenu();
  }
}

const openMenu = () => {
  main.classList.add('main--menu-opened');
  footer.classList.add('footer--menu-opened');
  dropDownMenu.classList.add('header__drop-down--menu-opened');
  burgerOpenButton.classList.add('header__burger-toggle--menu-opened');

  let burgerCloseButton = document.querySelector('.header__burger-toggle--menu-opened');

  burgerCloseButton.addEventListener('click', closeMenu);
  navList.addEventListener('click', onNavListClick);
}

function closeMenu () {
  let burgerCloseButton = document.querySelector('.header__burger-toggle--menu-opened');

  main.classList.remove('main--menu-opened');
  footer.classList.remove('footer--menu-opened');
  dropDownMenu.classList.remove('header__drop-down--menu-opened');
  burgerCloseButton.classList.remove('header__burger-toggle--menu-opened');
  burgerCloseButton.removeEventListener('click', closeMenu);
  navList.removeEventListener('click', onNavListClick);
}

const initMenu = () => {
    burgerOpenButton.addEventListener('click', openMenu);
}

export { initMenu, closeMenu };
