const burgerToggle = document.querySelector('.header__burger-toggle');
const dropDownMenu = document.querySelector('.header__drop-down-wrapper');

const menuToggle = () => {
  if (dropDownMenu.classList.contains('header__drop-down-wrapper--menu-closed')) {
    dropDownMenu.classList.remove('header__drop-down-wrapper--menu-closed');
    burgerToggle.classList.add('.header__burger-toggle--menu-opened');
  } else {
    dropDownMenu.classList.remove('header__drop-down-wrapper--menu-opened');
    dropDownMenu.classList.add('header__drop-down-wrapper--menu-closed');
    burgerToggle.classList.remove('.header__burger-toggle--menu-opened')
  }
}

burgerToggle.addEventListener('click', menuToggle);
