const toggle = document.querySelector(".nav__toggle");
const nav = document.querySelector(".nav");
const body = document.querySelector("body");

toggle.addEventListener("click", navToggle);

function navToggle(evt) {
  nav.classList.toggle("active");
  toggle.classList.toggle("active");
  body.classList.toggle("lock");
}
