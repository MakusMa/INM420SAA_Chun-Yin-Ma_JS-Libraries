/* ---------------- 1_Animation on Scroll -----------------*/
AOS.init({
    duration: 1000,  // Animation duration in milliseconds
    once: true       // Animation occurs only once while scrolling down
});

/* ---------------- 2_Swiper slider JS -----------------*/
const swiper = new Swiper('.featured-swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        576: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        992: {
            slidesPerView: 1,
            spaceBetween: 30
        }
    }
});

/* ---------------- 3_Particles JS -----------------*/
particlesJS('particles-js',
    {
        "particles": {
            "number": {
                "value": 180,
                "density": {
                    "enable": true,
                    "value_area": 1500
                }
            },
            "color": {
                "value": ["#e6b800", "#ffffff", "#ffd700"]
            },
            "shape": {
                "type": "circle"
            },
            "opacity": {
                "value": 0.8,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 6,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 4,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#e6b800",
                "opacity": 0.6,
                "width": 2
            },
            "move": {
                "enable": true,
                "speed": 3,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "bounce",
                "bounce": true,
                "attract": {
                    "enable": true,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "window",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            }
        },
        "retina_detect": true
    });

/* ----------- Newsletter ----------- */
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        alert(`Thank you for subscribing with ${email}!`);
        this.reset();
    });
}

/* ---------- Smooth Scroll -------------- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

/* ---------------- 4_Lightbox_JS -----------------*/
document.addEventListener('DOMContentLoaded', function() {
    if (typeof lightbox !== 'undefined') {
        lightbox.option({
            'resizeDuration': 300,
            'wrapAround': true,
            'alwaysShowNavOnTouchDevices': true,
            'positionFromTop': 200,
            'disableScrolling': true,
            'fitImagesInViewport': true,
        });
    }
/* ----------- Background - Transparent ----------- */
    const style = document.createElement('style');
    style.textContent = `.lb-outerContainer { background-color: transparent }`;
    document.head.appendChild(style);
});