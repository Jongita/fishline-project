
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