import '../scss/app.scss';
import "./animation";
/* Your JS Code goes here */

const page = document.querySelector(".main-page")
if (page) {
    // Шапка
    const menu = document.querySelector('.header');
    const headerToggleBtn = document.querySelector('.header__toggle');
    const body = document.querySelector("body")

    headerToggleBtn.addEventListener('click', () => {
        menu.classList.toggle('header__active')
        body.classList.toggle("scroll-off")
    });

    // Попапы
    const dPopups = document.querySelectorAll(".js-d-popup")
    const dToggles = document.querySelectorAll(".js-d-popup-toggle")

    dToggles.forEach(btn => {
        btn.addEventListener("click", () => {
            dPopups.forEach(popup => {
                if (popup.dataset.name === btn.dataset.name) {
                    popup.classList.toggle("clear")
                    setTimeout(() => {
                        popup.classList.toggle("d-popup_on")
                    }, 200)
                }
                popup.addEventListener("click", (e) => {
                    if (e.target.classList.contains("d-popup_on")) {
                        popup.classList.toggle("d-popup_on")
                        setTimeout(() => {
                            popup.classList.toggle("clear")
                        }, 200)
                    }
                })
            })
        })
    })


}