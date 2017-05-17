const openNav = function() {
    let $nav = document.querySelector(".site-nav");
    $nav.style.transform = "translatex(0)";
    document.addEventListener("click", function(oEvent) {
        if(oEvent.pageX > 250) {
            closeNav();
        }
    });
}
const closeNav = function() {
    document.querySelector(".site-nav").style.transform = "translatex(-250px)";
}

const keepFocusDropdownMenu = function(oEvent) {
        oEvent.currentTarget.parentNode.parentNode.parentNode.classList.add("accessible-access");
}
const removeFocusDropdownMenu = function(oEvent) {
        oEvent.currentTarget.parentNode.parentNode.parentNode.classList.remove("accessible-access");
}


const fPageIsLoaded = function() {
    document.querySelector(".hamburger-menu").addEventListener("click", openNav);
    document.querySelector(".site-nav__close-btn").addEventListener("click", closeNav);
    Array.from(document.querySelectorAll(".site-nav__dropdown-link")).forEach(function($link) {
        $link.addEventListener("focus", keepFocusDropdownMenu);
        $link.addEventListener("blur", removeFocusDropdownMenu);
    });
}

window.addEventListener("load", fPageIsLoaded);