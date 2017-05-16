const openNav = function() {
    document.querySelector(".site-nav").style.transform = "translatex(0)";
}
const closeNav = function() {
    document.querySelector(".site-nav").style.transform = "translatex(-250px)";
}


const fPageIsLoaded = function() {
    document.querySelector(".hamburger-menu").addEventListener("click", openNav);
    document.querySelector(".site-nav__close-btn").addEventListener("click", closeNav);
}

window.addEventListener("load", fPageIsLoaded);