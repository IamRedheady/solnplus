// Preloader and Intro
import { gsap } from "gsap";
gsap.to(".preloader", {
    y: "-100%",
    scaleX: 4,
    duration: 2,
    ease: "power2.inOut",
    onComplete: () => {
        const introContainer = document.querySelector(".intro__container")
        introContainer.classList.add("fade-in")
    }
})

// Charming
const charming = require('charming')
const aboutItems = document.querySelectorAll('.js-charming-text')
aboutItems.forEach(item => {
    charming(item)
})