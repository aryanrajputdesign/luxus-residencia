console.log("Luxus Residencia Loaded");

// ================= HEADER =================

window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (header) {
        if (window.scrollY > 80) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    }
});

// ================= MOBILE MENU =================

const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

if (menu && nav) {
    menu.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}

// ================= LOADER =================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {
        setTimeout(() => {
            loader.classList.add("hide");
        }, 1200);
    }

});

// ================= COUNTERS =================

document.querySelectorAll(".counter").forEach(counter => {

    function updateCounter() {

        const target = Number(counter.dataset.target);
        const current = Number(counter.innerText);

        const increment = Math.ceil(target / 100);

        if (current < target) {

            counter.innerText = current + increment;

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target + "+";

        }

    }

    updateCounter();

});

// ================= HERO SLIDER =================

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

const prevBtn = document.getElementById("prevSlide");
const nextBtn = document.getElementById("nextSlide");

let currentSlide = 0;

function showSlide(index) {

    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    if (slides[index]) slides[index].classList.add("active");
    if (dots[index]) dots[index].classList.add("active");

}

function nextSlide() {

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);

}

function prevSlide() {

    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);

}

if (nextBtn) {
    nextBtn.addEventListener("click", nextSlide);
}

if (prevBtn) {
    prevBtn.addEventListener("click", prevSlide);
}

dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        currentSlide = index;

        showSlide(currentSlide);

    });

});

if (slides.length > 0) {

    setInterval(nextSlide, 5000);

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

    closeLightbox.addEventListener("click", () => {

        lightbox.classList.remove("active");

    });

}

if (lightbox) {

    lightbox.addEventListener("click", (e) => {

        if (e.target === lightbox) {

            lightbox.classList.remove("active");

        }

    });

}

// ================= VIDEO POPUP =================

const videoPopup = document.getElementById("videoPopup");
const popupVideo = document.getElementById("popupVideo");
const closeVideo = document.querySelector(".close-video");

document.querySelectorAll(".play-video").forEach(button => {

    button.addEventListener("click", function(e){

        e.preventDefault();

        if (!videoPopup || !popupVideo) {
            console.error("Video popup not found");
            return;
        }

        popupVideo.pause();
        popupVideo.currentTime = 0;

        popupVideo.src = this.dataset.video;

        popupVideo.load();

        videoPopup.classList.add("active");

        popupVideo.play();

    });

});

if (closeVideo) {

    closeVideo.addEventListener("click", () => {

        popupVideo.pause();

        popupVideo.currentTime = 0;

        popupVideo.removeAttribute("src");

        popupVideo.load();

        videoPopup.classList.remove("active");

    });

}

if (videoPopup) {

    videoPopup.addEventListener("click", (e) => {

        if (e.target === videoPopup) {

            popupVideo.pause();

            popupVideo.currentTime = 0;

            popupVideo.removeAttribute("src");

            popupVideo.load();

            videoPopup.classList.remove("active");

        }

    });

}

