const openNav = function() {
    document.querySelector(".site-nav").style.width = "250px";
}
const closeNav = function() {
    document.querySelector(".site-nav").style.width = "0";
}


const fPageIsLoaded = function() {
    document.querySelector(".hamburger-menu").addEventListener("click", openNav);
    document.querySelector(".site-nav__close-btn").addEventListener("click", closeNav);
}

window.addEventListener("load", fPageIsLoaded);