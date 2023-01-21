const burgerToggle = document.querySelector('.header__burger-toggle');
const dropDownMenu = document.querySelector('.header__drop-down-wrapper');

burgerToggle.addEventListener('click', () => {
    dropDownMenu.classList.toggle('header__drop-down-wrapper--menu-closed');
    burgerToggle.classList.toggle('header__burger-toggle--menu-opened');
});
