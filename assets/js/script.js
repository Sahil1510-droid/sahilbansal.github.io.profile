'use strict';

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active")
});

const navbarLinks = document.querySelectorAll("[data-nav-link]");
for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active")
  })
}


const backTopBtn = document.querySelector("[data-back-to-top]");
window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active")
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active")
  }
});

document.addEventListener('DOMContentLoaded', (event) => {
  var modal = document.getElementById("myModal");
  var span = document.getElementsByClassName("close")[0];
  modal.style.display = "flex";
  span.onclick = function () {
    modal.style.display = "none"
  }
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none"
    }
  }
});

var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none"
})

function smoothScroll(element) {
  var top = element.offsetTop;
  window.scrollTo(0, top)
}
document.querySelectorAll("nav").forEach(function (element) {
  element.addEventListener("click", smoothScroll)
})
