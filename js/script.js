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
       ELEMENTS
    ================================================= */

    const loader = document.getElementById("loader");
    const openBtn = document.getElementById("openInvitation");

    const music = document.getElementById("bgMusic");
    const musicBtn = document.getElementById("musicBtn");

    const nav = document.querySelector("nav");

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    const backTop = document.getElementById("backToTop");

    let playing = false;

    /* ================================================
       OPEN INVITATION
    ================================================= */

    openBtn.addEventListener("click", async () => {

        // Scroll to the top
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant" // or "smooth"
        });

        try {

            await music.play();

            playing = true;

            musicBtn.innerHTML =
                '<i class="fa-solid fa-pause"></i>';

        } catch (err) {

            console.log("Music blocked:", err);

        }

        loader.classList.add("hide");

    });

    /* ================================================
       COUNTDOWN
    ================================================= */

    const weddingDate = new Date(
        "September 12, 2026 16:00:00"
    ).getTime();

    function updateCountdown() {

        const now = new Date().getTime();

        const distance = weddingDate - now;

        if (distance <= 0) {

            ["days", "hours", "minutes", "seconds"]
                .forEach(id => {

                    document.getElementById(id).textContent = "00";

                });

            return;

        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));

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

        document.getElementById("hours").textContent =
            String(hours).padStart(2, "0");

        document.getElementById("minutes").textContent =
            String(minutes).padStart(2, "0");

        document.getElementById("seconds").textContent =
            String(seconds).padStart(2, "0");

    }

    updateCountdown();

    setInterval(updateCountdown, 1000);

    /* ================================================
       NAVBAR SCROLL
    ================================================= */

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            nav.classList.add("scrolled");

        } else {

            nav.classList.remove("scrolled");

        }

        if (window.scrollY > 500) {

            backTop.style.display = "flex";

        } else {

            backTop.style.display = "none";

        }

    });

    /* ================================================
       SMOOTH SCROLL
    ================================================= */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", e => {

            e.preventDefault();

            const target =
                document.querySelector(link.getAttribute("href"));

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

            if (window.scrollY >= section.offsetTop - 150) {

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
       MUSIC BUTTON
    ================================================= */

    musicBtn.addEventListener("click", async () => {

        if (!playing) {

            try {

                await music.play();

                playing = true;

                musicBtn.innerHTML =
                    '<i class="fa-solid fa-pause"></i>';

            } catch (err) {

                console.log(err);

            }

        } else {

            music.pause();

            playing = false;

            musicBtn.innerHTML =
                '<i class="fa-solid fa-volume-high"></i>';

        }

    });

    /* ================================================
       WHATSAPP RSVP
    ================================================= */

    const whatsappBtn =
        document.getElementById("whatsappBtn");

    if (whatsappBtn) {

        whatsappBtn.addEventListener("click", () => {

            const phone = "919544431130";

            const message = `Hello!

            Thank you for inviting us to celebrate the special occasion of Shammas & Nadha's Nikah.

            We are pleased to confirm our attendance.

            Guest Name:

            Number of Guests:

            Looking forward to celebrating this joyful day with you. Wishing the couple a lifetime of love, happiness, and togetherness.

            Best Wishes!`;

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

    closeBtn?.addEventListener("click", () => {

        lightbox.classList.remove("active");

    });

    lightbox?.addEventListener("click", e => {

        if (e.target === lightbox) {

            lightbox.classList.remove("active");

        }

    });

    /* ================================================
       BACK TO TOP
    ================================================= */

    backTop?.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

    /* ================================================
       MOBILE MENU
    ================================================= */

    menuToggle?.addEventListener("click", () => {

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

    const gallerySwiper = new Swiper(".gallerySwiper", {

        loop: true,

        centeredSlides: true,

        spaceBetween: 25,

        autoplay: {

            delay: 2500,

            disableOnInteraction: false,

        },

        pagination: {

            el: ".swiper-pagination",

            clickable: true,

        },

        navigation: {

            nextEl: ".swiper-button-next",

            prevEl: ".swiper-button-prev",

        },

        breakpoints: {

            0: {

                slidesPerView: 1,

            },

            768: {

                slidesPerView: 2,

            },

            1200: {

                slidesPerView: 3,

            }

        }

    });


    /* ================================================
   SEND BLESSINGS
================================================ */

    const sendWishBtn = document.getElementById("sendWishBtn");

    if (sendWishBtn) {

        sendWishBtn.addEventListener("click", () => {

            const phone = "919544431130"; // Replace with your WhatsApp number

            const wish = document.getElementById("wishMessage").value.trim();

            if (!wish) {

                alert("Please write your blessings first.");

                return;

            }

            const message = `${wish}`;

            window.open(
                `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
                "_blank"
            );

        });

    }

    const banner = document.querySelector('.animate-couple');

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                // Restart animation
                banner.classList.remove('active');

                void banner.offsetWidth; // Force reflow

                banner.classList.add('active');

            } else {

                banner.classList.remove('active');

            }

        });

    }, {
        threshold: 0.5
    });

    observer.observe(banner);

});