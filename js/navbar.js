const mainHeader = document.getElementById("main-header");
const scrolledNavbar = document.getElementById("scrolled-navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        mainHeader.style.display = "none";
        scrolledNavbar.style.display = "flex";
    } else {
        mainHeader.style.display = "block";
        scrolledNavbar.style.display = "none";
    }
});