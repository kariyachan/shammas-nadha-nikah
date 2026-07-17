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
        "December 20, 2026 10:00:00"
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

});