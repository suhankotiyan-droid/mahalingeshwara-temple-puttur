// ===============================
// Puttur Mahalingeshwara Temple
// Premium JavaScript
// Part 1
// ===============================

// Mobile Navigation

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
}

// Close mobile menu when a link is clicked

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");

    });

});

// ===============================
// Hero Image Slider
// ===============================

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(index) {

    slides.forEach(slide => {

        slide.classList.remove("active");

    });

    slides[index].classList.add("active");

}

function nextSlide() {

    currentSlide++;

    if (currentSlide >= slides.length) {

        currentSlide = 0;

    }

    showSlide(currentSlide);

}

if (slides.length > 0) {

    setInterval(nextSlide, 4000);

}

// ===============================
// Smooth Scrolling
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// ===============================
// Sticky Navbar Shadow
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        navbar.classList.add("sticky");

    }

    else{

        navbar.classList.remove("sticky");

    }

});

// ===============================
// Active Navigation Link
// ===============================

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if(scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});

// ===============================
// Scroll Progress Bar (Optional)
// ===============================

const progressBar = document.createElement("div");

progressBar.id = "progress-bar";

document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {

    const totalHeight = document.body.scrollHeight - window.innerHeight;

    const progress = (window.pageYOffset / totalHeight) * 100;

    progressBar.style.width = progress + "%";

});

// ===============================
// Continue in Part 2...
// ===============================
// ===============================
// Scroll Reveal Animation
// ===============================

const revealElements = document.querySelectorAll(
    "section, .cards div, .gallery-grid img, table, footer"
);

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show-element");

        }

    });

}, {
    threshold: 0.15
});

revealElements.forEach(element => {

    element.classList.add("hidden-element");

    revealObserver.observe(element);

});

// ===============================
// Gallery Hover Effect
// ===============================

const galleryImages = document.querySelectorAll(".gallery-grid img");

galleryImages.forEach(image => {

    image.addEventListener("mouseenter", () => {

        image.style.transform = "scale(1.08)";

    });

    image.addEventListener("mouseleave", () => {

        image.style.transform = "scale(1)";

    });

});

// ===============================
// Back To Top Button
// ===============================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topBtn";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topButton.classList.add("show-top");

    }

    else {

        topButton.classList.remove("show-top");

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ===============================
// Image Fade Animation
// ===============================

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        image.animate([

            {

                transform: "scale(0.9)",

                opacity: 0.8

            },

            {

                transform: "scale(1)",

                opacity: 1

            }

        ], {

            duration: 300

        });

    });

});

// ===============================
// Hero Button Hover Animation
// ===============================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-4px) scale(1.05)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0) scale(1)";

    });

});

// ===============================
// Page Loading Effect
// ===============================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

// ===============================
// Footer Year
// ===============================

const footer = document.querySelector("footer p");

if (footer) {

    footer.innerHTML =
        "© " +
        new Date().getFullYear() +
        " Puttur Shree Mahalingeshwara Temple Tourism Website";

}

// ===============================
// Console Message
// ===============================

console.log("Puttur Shree Mahalingeshwara Temple Website Loaded Successfully");

// ===============================
// End of Premium Script
// ===============================