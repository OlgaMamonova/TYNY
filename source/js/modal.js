const initModal = () => {
  const signUpButton = document.querySelector('.invite__button');
  const main = document.querySelector('.main');
  const modal = document.querySelector('.modal');
  const modalContent = modal.querySelector('.modal__container');

  const isEscapeKey = (evt) => evt.key === 'Escape';

  const openModal = () => {
    main.classList.add('main--modal-opened');
    modal.classList.remove('modal--closed');
    document.addEventListener('keydown', onModalEscKeydown);
  }

  const closeModal = () => {
    main.classList.remove('main--modal-opened');
    modal.classList.add('modal--closed');
    document.removeEventListener('keydown', onModalEscKeydown);
  }

  function onModalEscKeydown(evt) {
    if (isEscapeKey) {
      evt.preventDefault();
      closeModal();
    }
  }

  signUpButton.addEventListener('click', openModal);
}

export { initModal };
