/* =====================================================
   SHAMMAS & NADHA - NIKAH INVITATION
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ================================================
       AOS
    ================================================= */

    AOS.init({
        duration: 900,
        once: true,
        easing: "ease-in-out"
    });

    /* ================================================
       LOADER
    ================================================= */

    const loader = document.getElementById("loader");

    window.addEventListener("load", () => {

        setTimeout(() => {

            loader.style.opacity = "0";
            loader.style.visibility = "hidden";

        }, 1200);

    });

    /* ================================================
       COUNTDOWN
    ================================================= */

    // Change your Nikah date here

    const weddingDate = new Date(
        "December 20, 2026 10:00:00"
    ).getTime();

    function updateCountdown() {

        const now = new Date().getTime();

        const distance = weddingDate - now;

        if (distance <= 0) {

            document.getElementById("days").innerHTML = "00";
            document.getElementById("hours").innerHTML = "00";
            document.getElementById("minutes").innerHTML = "00";
            document.getElementById("seconds").innerHTML = "00";

            return;

        }

        const days = Math.floor(
            distance / (1000 * 60 * 60 * 24)
        );

        const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24))
            / (1000 * 60 * 60)
        );

        const minutes = Math.floor(
            (distance % (1000 * 60 * 60))
            / (1000 * 60)
        );

        const seconds = Math.floor(
            (distance % (1000 * 60))
            / 1000
        );

        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = String(hours).padStart(2, "0");
        document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
        document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");

    }

    updateCountdown();

    setInterval(updateCountdown, 1000);

    /* ================================================
       NAVBAR
    ================================================= */

    const nav = document.querySelector("nav");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            nav.classList.add("scrolled");

        } else {

            nav.classList.remove("scrolled");

        }

    });

    /* ================================================
       SMOOTH SCROLL
    ================================================= */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", e => {

            e.preventDefault();

            const target = document.querySelector(
                link.getAttribute("href")
            );

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

    /* ================================================
       ACTIVE NAV LINK
    ================================================= */

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 140;

            if (window.scrollY >= top) {

                current = section.id;

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

    /* ================================================
       MUSIC PLAYER
    ================================================= */

    const music = document.getElementById("bgMusic");

    const musicBtn = document.getElementById("musicBtn");

    let playing = false;

    musicBtn.addEventListener("click", () => {

        if (!playing) {

            music.play();

            musicBtn.innerHTML =
                '<i class="fa-solid fa-pause"></i>';

            playing = true;

        } else {

            music.pause();

            musicBtn.innerHTML =
                '<i class="fa-solid fa-volume-high"></i>';

            playing = false;

        }

    });

    /* ================================================
       WHATSAPP RSVP
    ================================================= */

    const whatsappBtn =
        document.getElementById("whatsappBtn");

    if (whatsappBtn) {

        whatsappBtn.addEventListener("click", () => {

            const phone = "919876543210";

            const message =

                `Assalamu Alaikum,

We are delighted to attend the Nikah of Shammas & Nadha.

Guest Name:

Number of Guests:

May Allah bless your marriage with happiness, mercy and barakah.

JazakAllah Khair.`;

            window.open(

                `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,

                "_blank"

            );

        });

    }

    /* ================================================
       GALLERY LIGHTBOX
    ================================================= */

    const images =
        document.querySelectorAll(".gallery img, .gallery-grid img");

    const lightbox =
        document.getElementById("lightbox");

    const lightboxImage =
        document.getElementById("lightboxImage");

    const closeBtn =
        document.getElementById("closeLightbox");

    images.forEach(img => {

        img.addEventListener("click", () => {

            lightbox.classList.add("active");

            lightboxImage.src = img.src;

        });

    });

    if (closeBtn) {

        closeBtn.addEventListener("click", () => {

            lightbox.classList.remove("active");

        });

    }

    lightbox.addEventListener("click", e => {

        if (e.target === lightbox) {

            lightbox.classList.remove("active");

        }

    });

    /* ================================================
       BACK TO TOP
    ================================================= */

    const backTop =
        document.getElementById("backToTop");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            backTop.style.display = "flex";

        } else {

            backTop.style.display = "none";

        }

    });

    backTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

});

/* ==========================================
   MOBILE MENU
========================================== */

const menuToggle = document.getElementById("menuToggle");

const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {

        menuToggle.innerHTML =
            '<i class="fa-solid fa-xmark"></i>';

    } else {

        menuToggle.innerHTML =
            '<i class="fa-solid fa-bars"></i>';

    }

});

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        menuToggle.innerHTML =
            '<i class="fa-solid fa-bars"></i>';

    });

});