"use strict";
const header = document.querySelector("[data-header]"),
    navToggleBtn = document.querySelector("[data-nav-toggle-btn]"),
    navbarLinks = document.querySelectorAll("[data-nav-link]"),
    backTopBtn = document.querySelector("[data-back-to-top]"),
    modal = document.getElementById("myModal"),
    span = document.getElementsByClassName("close")[0],
    loader = document.getElementById("preloader");
navToggleBtn.addEventListener("click", () => {
    header.classList.toggle("nav-active"), navToggleBtn.classList.toggle("active")
}), navbarLinks.forEach(e => {
    e.addEventListener("click", () => {
        header.classList.toggle("nav-active"), navToggleBtn.classList.toggle("active")
    })
}), window.addEventListener("scroll", () => {
    let e = window.scrollY >= 100 ? "add" : "remove";
    header.classList[e]("active"), backTopBtn.classList[e]("active")
}), document.addEventListener("DOMContentLoaded", () => {
    modal.style.display = "flex", span.onclick = () => modal.style.display = "none", window.onclick = e => {
        e.target == modal && (modal.style.display = "none")
    }
}), window.addEventListener("load", () => loader.style.display = "none");
const smoothScroll = e => window.scrollTo(0, e.offsetTop);
document.querySelectorAll("nav").forEach(e => {
    e.addEventListener("click", () => smoothScroll(e))
}), document.addEventListener("DOMContentLoaded", () => {
    let e = document.querySelectorAll(".skills-progress"),
        t = new IntersectionObserver(e => {
            e.forEach(e => {
                let t = e.target,
                    a = t.getAttribute("data-progress");
                e.isIntersecting ? (t.style.setProperty("--progress-width", a), t.style.animation = "none", t.offsetHeight, t.style.animation = "loadProgress 2s forwards") : t.style.width = "0"
            })
        }, {
            threshold: .1
        });
    e.forEach(e => {
        t.observe(e)
    })
});

const startingYear = 2020; // Example starting year
const currentYear = new Date().getFullYear();
const yearsPassed = currentYear - startingYear;
const element = document.querySelector('.elem-title');
element.textContent = 0 + yearsPassed;
