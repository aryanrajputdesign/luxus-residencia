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

// VIDEO POPUP

const popup = document.getElementById("videoPopup");
const video = document.getElementById("popupVideo");
const playButtons = document.querySelectorAll(".play-video");
const closeVideo = document.querySelector(".close-video");

playButtons.forEach(button => {

button.addEventListener("click", function(e){

e.preventDefault();

video.src = this.dataset.video;

popup.classList.add("active");

video.play();

});

});

closeVideo.addEventListener("click", function(){

popup.classList.remove("active");

video.pause();

video.currentTime = 0;

video.src = "";

});

popup.addEventListener("click", function(e){

if(e.target === popup){

popup.classList.remove("active");

video.pause();

video.currentTime = 0;

video.src = "";

}

});

/* ===== Premium Image Lightbox ===== */

const galleryImages = document.querySelectorAll(".gallery-grid img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeLightbox = document.querySelector(".close-lightbox");

galleryImages.forEach(img => {
    img.addEventListener("click", () => {
        lightbox.classList.add("active");
        lightboxImg.src = img.src;
    });
});

closeLightbox.addEventListener("click", () => {
    lightbox.classList.remove("active");
});

lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove("active");
    }
});
