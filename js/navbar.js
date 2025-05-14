const mainHeader = document.getElementById("main-header");
const mobileNavbar = document.getElementById("mobile-navbar");
const scrolledNavbar = document.getElementById("scrolled-navbar");

function handleScroll() {
    if (window.innerWidth >= 992) {
        if (window.scrollY > mainHeader.offsetHeight + mainHeader.getBoundingClientRect().top -10) {
            mainHeader.classList.add('d-none');
            scrolledNavbar.classList.remove('d-none');
        } else {
            mainHeader.classList.remove('d-none');
            scrolledNavbar.classList.add('d-none');
        }
    }
}

function handleResize() {
    if (window.innerWidth >= 992) {
        mobileNavbar.classList.add('d-none');
        mainHeader.classList.remove('d-none');
    } else {
        mobileNavbar.classList.remove('d-none');
        mainHeader.classList.add('d-none');
        scrolledNavbar.classList.add('d-none');
    }
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', handleResize);

handleResize();

document.querySelector('.btn-div').addEventListener('click', function() {
    const target = document.querySelector('#diamond-btn-target');
    target.classList.add('d-none');
});