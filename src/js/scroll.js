const refs = {
  homeButton: document.querySelector('[data-scroll-home]'),
  reviewsButton: document.querySelector('[data-scroll-reviews]'),
  aboutButton: document.querySelector('[data-scroll-about]'),
  productsButton: document.querySelector('[data-scroll-products]'),
  contactsButton: document.querySelector('[data-scroll-contacts]'),
  productsHeroButton: document.querySelector('[data-scroll-products-hero]'),
  aboutHeroButton: document.querySelector('[data-scroll-about-hero]'),
  homeButtonMenu: document.querySelector('[data-scroll-home-menu'),
  reviewsButtonMenu: document.querySelector('[data-scroll-reviews-menu]'),
  aboutButtonMenu: document.querySelector('[data-scroll-about-menu]'),
  productsButtonMenu: document.querySelector('[data-scroll-products-menu]'),
  contactsButtonMenu: document.querySelector('[data-scroll-contacts-menu]'),
  homeButtonBody: document.querySelector('[data-scroll-home-body]'),
  homeOffset: document.getElementById('hero').offsetTop,
  reviewsOffset: document.getElementById('reviews').offsetTop,
  aboutOffset: document.getElementById('about').offsetTop,
  productsOffset: document.getElementById('products').offsetTop,
  contactsOffset: document.getElementById('contacts').offsetTop,
};

refs.homeButton.addEventListener('click', () => {
  scrollTo(refs.homeOffset);
});

refs.reviewsButton.addEventListener('click', () => {
  scrollTo(refs.reviewsOffset);
});
refs.aboutButton.addEventListener('click', () => {
  scrollTo(refs.aboutOffset);
});
refs.productsButton.addEventListener('click', () => {
  scrollTo(refs.productsOffset);
});
refs.contactsButton.addEventListener('click', () => {
  scrollTo(refs.contactsOffset);
});

refs.productsHeroButton.addEventListener('click', () => {
  scrollTo(refs.productsOffset);
});
refs.aboutHeroButton.addEventListener('click', () => {
  scrollTo(refs.aboutOffset);
});

refs.homeButtonMenu.addEventListener('click', () => {
  scrollTo(refs.homeOffset);
});
refs.reviewsButtonMenu.addEventListener('click', () => {
  scrollTo(refs.reviewsOffset);
});
refs.aboutButtonMenu.addEventListener('click', () => {
  scrollTo(refs.aboutOffset);
});
refs.productsButtonMenu.addEventListener('click', () => {
  scrollTo(refs.productsOffset);
});
refs.contactsButtonMenu.addEventListener('click', () => {
  scrollTo(refs.contactsOffset);
});

refs.homeButtonBody.addEventListener('click', () => {
  scrollTo(refs.homeOffset);
});

function scrollTo(offsetTop) {
  window.scrollTo({
    top: offsetTop,
    left: 100,
    behavior: 'smooth',
  });
}
