(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    openModalBtnScnd: document.querySelector('[data-modal-open-second]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    openModalBtnHdr: document.querySelector('[data-modal-header-open]'),
    openModalBtnHdrScnd: document.querySelector(
      '[data-modal-header-open-second]'
    ),
    closeModalBtnHdr: document.querySelector('[data-modal-header-close]'),
    modalHeader: document.querySelector('[data-modal-header]'),
    openModalBtnAbt: document.querySelector('[data-modal-about-open]'),
    closeModalBtnAbt: document.querySelector('[data-modal-about-close]'),
    modalAbout: document.querySelector('[data-modal-about]'),
    menu: document.querySelector('[data-menu]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openModalBtnScnd.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.openModalBtnAbt.addEventListener('click', toggleModalAbt);
  refs.closeModalBtnAbt.addEventListener('click', toggleModalAbt);
  refs.openModalBtnHdr.addEventListener('click', toggleModalHeader);
  refs.openModalBtnHdrScnd.addEventListener('click', toggleModalHeaderSecond);
  refs.closeModalBtnHdr.addEventListener('click', toggleModalHeader);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('is-hidden');
  }
  function toggleModalHeader() {
    document.body.classList.toggle('modal-open');
    refs.modalHeader.classList.toggle('is-hidden');
  }
  function toggleModalHeaderSecond() {
    document.body.classList.toggle('modal-open');
    document.body.classList.remove('no-scroll');
    refs.modalHeader.classList.toggle('is-hidden');
    refs.menu.classList.add('is-hidden');
  }
  function toggleModalAbt() {
    document.body.classList.toggle('modal-open');
    refs.modalAbout.classList.toggle('is-hidden');
  }
})();
