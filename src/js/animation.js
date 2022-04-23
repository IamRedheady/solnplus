// Preloader and Intro
import { gsap } from "gsap";
// Fix safari scroll
import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();

gsap.to(".preloader", {
    y: "-100%",
    scaleX: 4,
    duration: 3,
    ease: "power2.inOut",
    onComplete: () => {
        const body = document.querySelector("body")
        const introContainer = document.querySelector(".intro__container")
        const header = document.querySelector(".header__container")
        body.classList.remove("scroll-off")
        introContainer.classList.add("fade-in")
        header.classList.add("fade-in-top")
        setTimeout(() => {
            header.classList.remove("fade-in-top")
            header.classList.remove("header-off")
        }, 1000)
    }
})

// Charming
const charming = require('charming')
const textItems = document.querySelectorAll('.js-charming-text')
textItems.forEach(item => {
    charming(item)
})

// Плавная анимация элементов
let isScrolling = false;

window.addEventListener("scroll", throttleScroll, false);

function throttleScroll(e) {
    if (isScrolling == false) {
        window.requestAnimationFrame(function () {
            scrolling(e);
            isScrolling = false;
        });
    }
    isScrolling = true;
}

document.addEventListener("DOMContentLoaded", scrolling, false);

// Элементы
const page = document.querySelector("body")
const images = document.querySelectorAll(".js-pic-animation")
const directionsSection = document.querySelector('.directions')
const worksSection = document.querySelector(".works")
const plusSection = document.querySelector(".plus")
function scrolling(e) {
    textItems.forEach(word => {
        if (isPartiallyVisible(word)) {
            const letters = word.childNodes
            letters.forEach((letter, index) => {
                setTimeout(() => {
                    letter.classList.add("fade-in-bottom")
                }, index * 40)
            })
        }
    })
    images.forEach(image => {
        if (isPartiallyVisible(image)) {
            image.classList.add("fade-in-top")
        }
    })

    if (isPartiallyVisible(directionsSection)) {
        page.classList.add("dark")
        directionsSection.classList.add("invert-off")
        worksSection.classList.add("invert-on")
    } else {
        page.classList.remove("dark")
        directionsSection.classList.remove("invert-off")
        worksSection.classList.remove("invert-on")
    }
    if (isPartiallyVisible(plusSection)) {
        page.classList.remove("dark")
        directionsSection.classList.remove("invert-off")
        worksSection.classList.remove("invert-on")
    }
}

function isPartiallyVisible(el) {
    var elementBoundary = el.getBoundingClientRect();

    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;
    var height = elementBoundary.height;

    return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}

function isFullyVisible(el) {
    var elementBoundary = el.getBoundingClientRect();

    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;

    return ((top >= 0) && (bottom <= window.innerHeight));
}

// Плавный скролл для страницы. Предустановка npm install smoothscroll-polyfill для safari
document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function (e) {
        document.querySelector('.header').classList.remove('header__active')
        document.querySelector("body").classList.remove("scroll-off")
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        // const topOffset = document.querySelector('.scrollto').offsetHeight;
        const topOffset = 100; // если не нужен отступ сверху, либо число в px
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});