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
  const offset = document.getElementById('reviews').offsetTop;
  scrollTo(offset);
});
refs.aboutButton.addEventListener('click', () => {
  const offset = document.getElementById('about').offsetTop;
  scrollTo(offset);
});
refs.productsButton.addEventListener('click', () => {
  const offset = document.getElementById('products').offsetTop;
  scrollTo(offset);
});
refs.contactsButton.addEventListener('click', () => {
  const offset = document.getElementById('contacts').offsetTop;
  scrollTo(offset);
});

refs.productsHeroButton.addEventListener('click', () => {
  const offset = document.getElementById('products').offsetTop;
  scrollTo(offset);
});
refs.aboutHeroButton.addEventListener('click', () => {
  const offset = document.getElementById('about').offsetTop;
  scrollTo(offset);
});

refs.homeButtonMenu.addEventListener('click', () => {
  scrollTo(refs.homeOffset);
});
refs.reviewsButtonMenu.addEventListener('click', () => {
  const offset = document.getElementById('reviews').offsetTop;
  scrollTo(offset);
});
refs.aboutButtonMenu.addEventListener('click', () => {
  const offset = document.getElementById('about').offsetTop;
  scrollTo(offset);
});
refs.productsButtonMenu.addEventListener('click', () => {
  const offset = document.getElementById('products').offsetTop;
  scrollTo(offset);
});
refs.contactsButtonMenu.addEventListener('click', () => {
  const offset = document.getElementById('contacts').offsetTop;
  scrollTo(offset);
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
