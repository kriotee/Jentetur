const menuBtn = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".hamburger-nav");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("is-active");
  mobileMenu.classList.toggle("is-active");
});

const title = document.getElementById("animated-title");
const text = title.textContent;
title.textContent = "";

text.split("").forEach((char, i) => {
    const span = document.createElement("span");
    span.textContent = char;
    span.style.animationDelay = `${i * 0.05}s`;
    title.appendChild(span);
});

