const menuBtn = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".hamburger-nav");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("is-active");
  mobileMenu.classList.toggle("is-active");
});
