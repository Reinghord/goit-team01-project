(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),openModalBtnScnd:document.querySelector("[data-modal-open-second]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),openModalBtnHdr:document.querySelector("[data-modal-header-open]"),openModalBtnHdrScnd:document.querySelector("[data-modal-header-open-second]"),closeModalBtnHdr:document.querySelector("[data-modal-header-close]"),modalHeader:document.querySelector("[data-modal-header]"),openModalBtnAbt:document.querySelector("[data-modal-about-open]"),closeModalBtnAbt:document.querySelector("[data-modal-about-close]"),modalAbout:document.querySelector("[data-modal-about]"),menu:document.querySelector("[data-menu]")};function o(){document.body.classList.toggle("modal-open"),e.modal.classList.toggle("is-hidden")}function d(){document.body.classList.toggle("modal-open"),e.modalHeader.classList.toggle("is-hidden")}function t(){document.body.classList.toggle("modal-open"),e.modalAbout.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.openModalBtnScnd.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o),e.openModalBtnAbt.addEventListener("click",t),e.closeModalBtnAbt.addEventListener("click",t),e.openModalBtnHdr.addEventListener("click",d),e.openModalBtnHdrScnd.addEventListener("click",(function(){document.body.classList.toggle("modal-open"),document.body.classList.remove("no-scroll"),e.modalHeader.classList.toggle("is-hidden"),e.menu.classList.add("is-hidden")})),e.closeModalBtnHdr.addEventListener("click",d)})();
//# sourceMappingURL=index.61e20773.js.map