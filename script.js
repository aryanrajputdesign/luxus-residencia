console.log("Luxus Residencia Loaded");

// HEADER
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (header) {
        header.classList.toggle("scrolled", window.scrollY > 80);
    }
});

// MOBILE MENU
const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

if (menu && nav) {
    menu.onclick = () => nav.classList.toggle("active");
}

// LOADER
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    if (loader) {
        setTimeout(() => loader.classList.add("hide"), 1200);
    }
});

// COUNTERS
document.querySelectorAll(".counter").forEach(counter => {

    const target = +counter.dataset.target;

    const update = () => {

        let value = +counter.innerText;

        const inc = Math.ceil(target / 100);

        if (value < target) {

            counter.innerText = value + inc;

            setTimeout(update,20);

        } else {

            counter.innerText = target + "+";

        }

    };

    update();

});

// ================= HERO SLIDER =================

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

const prevBtn = document.getElementById("prevSlide");
const nextBtn = document.getElementById("nextSlide");

let currentSlide = 0;

function showSlide(index){

    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    if(slides[index]) slides[index].classList.add("active");
    if(dots[index]) dots[index].classList.add("active");

}

function nextSlide(){

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    showSlide(currentSlide);

}

function prevSlide(){

    currentSlide--;

    if(currentSlide < 0){
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);

}

if(nextBtn) nextBtn.onclick = nextSlide;

if(prevBtn) prevBtn.onclick = prevSlide;

dots.forEach((dot,index)=>{

    dot.onclick = ()=>{

        currentSlide = index;

        showSlide(currentSlide);

    };

});

if(slides.length){

    setInterval(nextSlide,5000);

}

// ================= GALLERY LIGHTBOX =================

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeLightbox = document.querySelector(".close-lightbox");

document.querySelectorAll(".gallery-grid img").forEach(img => {

    img.addEventListener("click", () => {

        if (!lightbox || !lightboxImg) return;

        lightbox.classList.add("active");
        lightboxImg.src = img.src;

    });

});

if (closeLightbox) {

    closeLightbox.onclick = () => {

        lightbox.classList.remove("active");

    };

}

if (lightbox) {

    lightbox.onclick = (e) => {

        if (e.target === lightbox) {

            lightbox.classList.remove("active");

        }

    };

}



}

// ================= AOS =================

if (typeof AOS !== "undefined") {

    AOS.init({
        duration: 1000,
        once: true
    });

}

// ================= END =================

console.log("Luxus Residencia JS Loaded Successfully");
