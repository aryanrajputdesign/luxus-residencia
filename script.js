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

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

if (slides.length > 0) {

setInterval(() => {

slides[currentSlide].classList.remove("active");

currentSlide = (currentSlide + 1) % slides.length;

slides[currentSlide].classList.add("active");

}, 5000);

}

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.getElementById("prevSlide");
const nextBtn = document.getElementById("nextSlide");

let currentSlide = 0;

function showSlide(index){
    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    slides[index].classList.add("active");
    dots[index].classList.add("active");
}

function nextSlide(){
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide(){
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

if(nextBtn){
    nextBtn.addEventListener("click", nextSlide);
}

if(prevBtn){
    prevBtn.addEventListener("click", prevSlide);
}

dots.forEach((dot,index)=>{
    dot.addEventListener("click",()=>{
        currentSlide=index;
        showSlide(currentSlide);
    });
});

setInterval(nextSlide,5000);
