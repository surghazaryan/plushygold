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




// Modal functionality
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.querySelector('.modal-overlay');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.close');

    // Function to open modal at clicked position
    function openModal(clickedImg) {
        // Get clicked image position
        const rect = clickedImg.getBoundingClientRect();

        // Set modal display
        modal.style.display = 'block';

        // Set image source and initial position
        modalImg.src = clickedImg.src;
        modalImg.className = 'modal-content';

        // Position the image at clicked location
        modalImg.style.position = 'absolute';
        modalImg.style.top = rect.top + 'px';
        modalImg.style.left = rect.left + 'px';

        // Prevent body scroll
        document.body.style.overflow = 'hidden';

        // Zoom to center after a small delay
        setTimeout(() => {
            modalImg.classList.add('zoomed');
        }, 50);
    }

    // Function to close modal
    function closeModal() {
        modal.style.display = 'none';
        modalImg.classList.remove('zoomed');
        document.body.style.overflow = 'auto';
    }

    // Close button event
    closeBtn.addEventListener('click', closeModal);

    // Close when clicking on modal background or image
    modal.addEventListener('click', function(e) {
        if (e.target === modal || e.target === modalImg) {
            closeModal();
        }
    });

    // Close with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });

    // Add click events to portfolio images
    const portfolioImages = document.querySelectorAll('#portfolio img');
    portfolioImages.forEach(img => {
        img.addEventListener('click', function() {
            openModal(this);
        });
    });

    // Add click events to gallery images
    const galleryImages = document.querySelectorAll('#gallery img');
    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            openModal(this);
        });
    });
});