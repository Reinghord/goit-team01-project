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
  refs.openModalBtnHdr.addEventListener('click', toggleModalHeader);
  refs.closeModalBtnHdr.addEventListener('click', toggleModalHeader);
  refs.openModalBtnAbt.addEventListener('click', toggleModalAbt);
  refs.closeModalBtnAbt.addEventListener('click', toggleModalAbt);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('is-hidden');
  }
  function toggleModalHeader() {
    document.body.classList.toggle('modal-open');
    refs.modalHeader.classList.toggle('is-hidden');
  }
  function toggleModalAbt() {
    document.body.classList.toggle('modal-open');
    refs.modalAbout.classList.toggle('is-hidden');
  }
})();
