'use strict';

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const backTopBtn = document.querySelector("[data-back-to-top]");
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];
const loader = document.getElementById("preloader");

navToggleBtn.addEventListener("click", () => {
  header.classList.toggle("nav-active");
  navToggleBtn.classList.toggle("active");
});

navbarLinks.forEach(link => {
  link.addEventListener("click", () => {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
});

window.addEventListener("scroll", () => {
  const action = window.scrollY >= 100 ? 'add' : 'remove';
  header.classList[action]("active");
  backTopBtn.classList[action]("active");
});

document.addEventListener('DOMContentLoaded', () => {
  modal.style.display = "flex";
  span.onclick = () => modal.style.display = "none";
  window.onclick = (event) => {
    if (event.target == modal) modal.style.display = "none";
  };
});

window.addEventListener("load", () => loader.style.display = "none");

const smoothScroll = (element) => window.scrollTo(0, element.offsetTop);

document.querySelectorAll("nav").forEach(element => {
  element.addEventListener("click", () => smoothScroll(element));
});
