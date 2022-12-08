const nav = document.querySelector(".nav")
const navToggle = document.querySelector(".hamburger__icon")

navToggle.addEventListener("click", () => {
    const visible = nav.getAttribute("data-visible")

    if(visible === "false") {
        nav.setAttribute("data-visible", true)
        nav.setAttribute("aria-hidden", true)
    } else {
        nav.setAttribute("data-visible", false)
        nav.setAttribute("aria-hidden", false)
    }
})