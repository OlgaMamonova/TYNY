import { closeMenu } from "./burger-menu.js";

const initModal = () => {
  const signUpButtons = document.querySelectorAll('.signUp-button-js');
  const body = document.querySelector('.page__body');
  const modal = document.querySelector('.modal');
  const modalBody = modal.querySelector('.modal__body');
  const modalContent = modal.querySelector('.modal__content');
  // const main = document.querySelector('.main');
  // const footer = document.querySelector('.footer');

  const isEscapeKey = (evt) => evt.key === 'Escape';

  const openModal = () => {
    modal.classList.add('modal--opened');
    body.classList.add('page__body--modal-opened');
    document.addEventListener('keydown', onModalEscKeydown);
    modalBody.addEventListener('click', onModalBodyClick);
  }

  const closeModal = () => {
    modal.classList.remove('modal--opened');
    body.classList.remove('page__body--modal-opened');
    document.removeEventListener('keydown', onModalEscKeydown);
    modalBody.removeEventListener('click', onModalBodyClick);
  }

  function onModalEscKeydown(evt) {
    if (isEscapeKey) {
      evt.preventDefault();
      closeModal();
    }
  }

  function onModalBodyClick (evt) {
    const modalOverLay = evt.composedPath().includes(modalContent);
    if (!modalOverLay) {
      closeModal();
    }
  }

  if (signUpButtons.length > 0) {
    for (let i = 0; i < signUpButtons.length; i++) {
      const signUpButton = signUpButtons[i];
      signUpButton.addEventListener('click', openModal);
    }
  }
}

export { initModal };
