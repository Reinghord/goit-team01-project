const t={homeButton:document.querySelector("[data-scroll-home]"),reviewsButton:document.querySelector("[data-scroll-reviews]"),aboutButton:document.querySelector("[data-scroll-about]"),productsButton:document.querySelector("[data-scroll-products]"),contactsButton:document.querySelector("[data-scroll-contacts]"),productsHeroButton:document.querySelector("[data-scroll-products-hero]"),aboutHeroButton:document.querySelector("[data-scroll-about-hero]"),homeButtonMenu:document.querySelector("[data-scroll-home-menu"),reviewsButtonMenu:document.querySelector("[data-scroll-reviews-menu]"),aboutButtonMenu:document.querySelector("[data-scroll-about-menu]"),productsButtonMenu:document.querySelector("[data-scroll-products-menu]"),contactsButtonMenu:document.querySelector("[data-scroll-contacts-menu]"),homeButtonBody:document.querySelector("[data-scroll-home-body]"),homeOffset:document.getElementById("hero").offsetTop,reviewsOffset:document.getElementById("reviews").offsetTop,aboutOffset:document.getElementById("about").offsetTop,productsOffset:document.getElementById("products").offsetTop,contactsOffset:document.getElementById("contacts").offsetTop};function e(t){window.scrollTo({top:t,left:100,behavior:"smooth"})}t.homeButton.addEventListener("click",(()=>{e(t.homeOffset)})),t.reviewsButton.addEventListener("click",(()=>{e(document.getElementById("reviews").offsetTop)})),t.aboutButton.addEventListener("click",(()=>{e(document.getElementById("about").offsetTop)})),t.productsButton.addEventListener("click",(()=>{e(document.getElementById("products").offsetTop)})),t.contactsButton.addEventListener("click",(()=>{e(document.getElementById("contacts").offsetTop)})),t.productsHeroButton.addEventListener("click",(()=>{e(document.getElementById("products").offsetTop)})),t.aboutHeroButton.addEventListener("click",(()=>{e(document.getElementById("about").offsetTop)})),t.homeButtonMenu.addEventListener("click",(()=>{e(t.homeOffset)})),t.reviewsButtonMenu.addEventListener("click",(()=>{e(document.getElementById("reviews").offsetTop)})),t.aboutButtonMenu.addEventListener("click",(()=>{e(document.getElementById("about").offsetTop)})),t.productsButtonMenu.addEventListener("click",(()=>{e(document.getElementById("products").offsetTop)})),t.contactsButtonMenu.addEventListener("click",(()=>{e(document.getElementById("contacts").offsetTop)})),t.homeButtonBody.addEventListener("click",(()=>{e(t.homeOffset)}));
//# sourceMappingURL=index.262b4700.js.map