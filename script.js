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

window.addEventListener("load", function(){

setTimeout(function(){

document.getElementById("loader").classList.add("hide");

},1200);


});

// Animated Counters

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        const increment = target / 100;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCounter, 20);
        } else {
            counter.innerText = target + "+";
        }

    };

    updateCounter();

});
