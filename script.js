console.log("Luxus Residencia Website Loaded");

window.addEventListener("scroll", function () {

const header = document.querySelector("header");

if (window.scrollY > 80) {
    header.classList.add("scrolled");
} else {
    header.classList.remove("scrolled");
}

});

const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menu.addEventListener("click", function () {
nav.classList.toggle("active");
});
