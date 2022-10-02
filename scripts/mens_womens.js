
import navbar from '../components/navbar.js';
document.getElementById('anavbar').innerHTML = navbar();

import footerpart from '../components/footer.js';

document.querySelector('footer').innerHTML = footerpart();


    function Slider() {
        const carouselSlides = document.querySelectorAll('.slide');
        const dotsSlide = document.querySelector('.dots-container');
        let currentSlide = 0;
    
        const activeDot = function (slide) {
            document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));
            document.querySelector(`.dot[data-slide="${slide}"]`).classList.add('active');
        };
        activeDot(currentSlide);

        const changeSlide = function (slides) {
            carouselSlides.forEach((slide, index) => (slide.style.transform = `translateX(${100 * (index - slides)}%)`));
        };
        changeSlide(currentSlide);

        dotsSlide.addEventListener('click', function (e) {
            if (e.target.classList.contains('dot')) {
                const slide = e.target.dataset.slide;
                changeSlide(slide);
                activeDot(slide);
            }
        });
    };
    Slider();

    function Slider2nd() {
        const carouselSlides = document.querySelectorAll('.slide2nd');
        const dotsSlide = document.querySelector('.dots-container2nd');
        let currentSlide = 0;
    
        const activeDot = function (slide) {
            document.querySelectorAll('.dot2nd').forEach(dot => dot.classList.remove('active'));
            document.querySelector(`.dot2nd[data-slide="${slide}"]`).classList.add('active');
        };
        activeDot(currentSlide);

        const changeSlide = function (slides) {
            carouselSlides.forEach((slide, index) => (slide.style.transform = `translateX(${100 * (index - slides)}%)`));
        };
        changeSlide(currentSlide);

        dotsSlide.addEventListener('click', function (e) {
            if (e.target.classList.contains('dot2nd')) {
                const slide = e.target.dataset.slide;
                changeSlide(slide);
                activeDot(slide);
            }
        });
    };
    Slider2nd();

    function Slider3() {
        const carouselSlides = document.querySelectorAll('.slide3');
        const dotsSlide = document.querySelector('.dots-container3');
        let currentSlide = 0;
    
        const activeDot = function (slide) {
            document.querySelectorAll('.dot3').forEach(dot => dot.classList.remove('active'));
            document.querySelector(`.dot3[data-slide="${slide}"]`).classList.add('active');
        };
        activeDot(currentSlide);

        const changeSlide = function (slides) {
            carouselSlides.forEach((slide, index) => (slide.style.transform = `translateX(${100 * (index - slides)}%)`));
        };
        changeSlide(currentSlide);

        dotsSlide.addEventListener('click', function (e) {
            if (e.target.classList.contains('dot3')) {
                const slide = e.target.dataset.slide;
                changeSlide(slide);
                activeDot(slide);
            }
        });
    };
    Slider3();
