const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const menu = document.getElementById("menu");
const nav = document.querySelector(".nav_links");
const links  = document.querySelectorAll(".nav_links a");

let index = 0;
function slideShow (i) {
    if (i < 0) {
        index = images.length - 1;
    } else if (i >= images.length) {
        index = 0;
    } else {
        index = i;
    }
    slides.style.transform = `translateX(${-index * 100}vw)`;
}
prev.addEventListener('click', () => slideShow(index - 1));
next.addEventListener('click', () => slideShow(index + 1));

menu.addEventListener("click", () => {
    nav.classList.toggle("active");
    menu.classList.toggle("open");
});

links.forEach(link => {
    link.addEventListener("click", (e) => {
        menu.classList.remove("open")
        nav.classList.remove("active");
    })
})

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const cards = document.querySelectorAll('.card');
    const reviews = document.querySelectorAll('.review');
    const contactDetails = document.querySelectorAll('.contact-details p');
    const socialLinks = document.querySelector('.social-links');
    const formGroups = document.querySelectorAll('.form-group');
    const contactContainer = document.querySelector('.contact-container');

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.9 &&
            rect.bottom >= 0
        );
    }


    function checkVisibility() {
        sections.forEach(section => {
            if (isInViewport(section)) {
                section.classList.add('visible');
            }
        });

        cards.forEach(card => {
            if (isInViewport(card)) {
                card.classList.add('visible');
            }
        });

        reviews.forEach(review => {
            if (isInViewport(review)) {
                review.classList.add('visible');
            }
        });

        contactDetails.forEach(detail => {
            if (isInViewport(detail)) {
                detail.classList.add('visible');
            }
        });

        if (isInViewport(socialLinks)) {
            socialLinks.classList.add('visible');
        }

        formGroups.forEach(group => {
            if (isInViewport(group)) {
                group.classList.add('visible');
            }
        });

        if (isInViewport(contactContainer)) {
            contactContainer.classList.add('visible');
        }
    }
    checkVisibility();
    window.addEventListener('scroll', checkVisibility);

    contactDetails.forEach((detail, index) => {
        detail.style.transitionDelay = `${index * 0.2}s`;
    });

    formGroups.forEach((group, index) => {
        group.style.transitionDelay = `${index * 0.2}s`;
    });

    cards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });
});