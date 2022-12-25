import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";

new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let changeMode = document.querySelector("#changeMode");
let body = document.querySelector("body");
let modal = document.querySelector(".loginModal");
let loginBtn = document.querySelector(".header__contacts__loginBtn");
let clseBtn = document.querySelector(".modal__closebtn");

changeMode.addEventListener("click", () => {
  body.style.background = "#1c1c1c";
  body.style.color = "#fff";
});

loginBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

clseBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
