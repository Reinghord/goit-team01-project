(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    openModalBtnHdr: document.querySelector('[data-modal-header-open]'),
    closeModalBtnHdr: document.querySelector('[data-modal-header-close]'),
    modalHeader: document.querySelector('[data-modal-header]'),
    openModalBtnAbt: document.querySelector('[data-modal-about-open]'),
    closeModalBtnAbt: document.querySelector('[data-modal-about-close]'),
    modalAbout: document.querySelector('[data-modal-about]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.openModalBtnHdr.addEventListener('click', toggleModal);
  refs.closeModalBtnHdr.addEventListener('click', toggleModal);
  refs.openModalBtnAbt.addEventListener('click', toggleModal);
  refs.closeModalBtnAbt.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('is-hidden');
  }
})();
