
document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector(".mainHeaderList");

    if (navToggle) {
        navToggle.addEventListener("click", function () {
            navMenu.classList.toggle("active");
        });
    } else {
        console.error("Hamburger button (.nav-toggle) not found!");
    }
});

window.onload = function () {
    document.querySelector('.fixed-text').classList.add('visible');
};

window.addEventListener('scroll', function () {
    const header = document.querySelector('.mainHeaderContainer');

    // Check if the scroll position is greater than 0
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
