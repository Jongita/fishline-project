
document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector(".mainHeaderList");
    const navLinks = document.querySelectorAll(".mainHeaderList a"); // Select all nav links

    if (navToggle) {
        navToggle.addEventListener("click", function () {
            navMenu.classList.toggle("active");
        });
    } else {
        console.error("Hamburger button (.nav-toggle) not found!");
    }

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navMenu.classList.remove("active");
        });
    });
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


// header neveike nav toggler
document.addEventListener("DOMContentLoaded", function () {
    fetch("header.html")
        .then(response => response.text())
        .then(data => document.getElementById("header-placeholder").innerHTML = data);
});

const products = [
    { name: "Šaldyta skumbrė", latin: "Scomber Scumbrius", size: "400-600 gr", origin: "Norvegija", image: "./images/skumbre.jpg" },
    { name: "Šaldyta lašiša", latin: "Salmo salar", size: "500-700 gr", origin: "Škotija", image: "./images/skumbre.jpg" },
    { name: "Šaldyta menkė", latin: "Gadus morhua", size: "300-500 gr", origin: "Islandija", image: "./images/skumbre.jpg" },
    { name: "Šaldyta skumbrė", latin: "Scomber Scumbrius", size: "400-600 gr", origin: "Norvegija", image: "./images/skumbre.jpg" },
    { name: "Šaldyta lašiša", latin: "Salmo salar", size: "500-700 gr", origin: "Škotija", image: "./images/skumbre.jpg" },
    { name: "Šaldyta menkė", latin: "Gadus morhua", size: "300-500 gr", origin: "Islandija", image: "./images/skumbre.jpg" },
    { name: "Šaldyta skumbrė", latin: "Scomber Scumbrius", size: "400-600 gr", origin: "Norvegija", image: "./images/skumbre.jpg" },
    { name: "Šaldyta lašiša", latin: "Salmo salar", size: "500-700 gr", origin: "Škotija", image: "./images/skumbre.jpg" },
    { name: "Šaldyta menkė", latin: "Gadus morhua", size: "300-500 gr", origin: "Islandija", image: "./images/skumbre.jpg" },
];

function displayProducts() {
    const productList = document.getElementById("productList");
    productList.innerHTML = "";
    products.forEach(product => {
        productList.innerHTML += `
                    <div class="card">
                        <img src="${product.image}" alt="${product.name}">
                        <div class="descriptionContent">
                            <h4>${product.name}</h4>
                            <p>${product.latin}</p>
                            <p>${product.size}</p>
                            <p>${product.origin}</p>
                        </div>
                    </div>`;
    });
}

function filterProducts() {
    const searchValue = document.getElementById("search").value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchValue));
    document.getElementById("productList").innerHTML = "";
    filteredProducts.forEach(product => {
        document.getElementById("productList").innerHTML += `
                    <div class="card">
                        <img src="${product.image}" alt="${product.name}">
                        <div class="descriptionContent">
                            <h4>${product.name}</h4>
                            <p>${product.latin}</p>
                            <p>${product.size}</p>
                            <p>${product.origin}</p>
                        </div>
                    </div>`;
    });
}

window.onload = displayProducts;

