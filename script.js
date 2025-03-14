
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

let products = [];

async function loadProducts() {
    try {
        const response = await fetch('./products.json');
        products = await response.json();
        displayProducts(); // Display products after loading
    } catch (error) {
        console.error("Error loading products:", error);
    }
}

function displayProducts(filteredProducts = products) {
    const productList = document.getElementById("productList");
    productList.innerHTML = "";
    filteredProducts.forEach(product => {
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
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchValue)
    );
    displayProducts(filteredProducts);
}

function filterByCategory(category) {
    if (category === "Visos") {
        displayProducts(products);
    } else {
        const filteredProducts = products.filter(product => product.category === category);
        displayProducts(filteredProducts);
    }
}

window.onload = function () {
    loadProducts(); // Load products when the page loads

    // Rodo fiksuotą tekstą
    const fixedTextElement = document.querySelector('.fixed-text');
    if (fixedTextElement) {
        fixedTextElement.classList.add('visible');
    }
};

// footer:
document.addEventListener("DOMContentLoaded", function () {
    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-placeholder").innerHTML = data;
        })
        .catch(error => console.error("Error loading footer:", error));
});

// footer:
document.addEventListener("DOMContentLoaded", function () {
    fetch("footer_en.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer_en-placeholder").innerHTML = data;
        })
        .catch(error => console.error("Error loading footer:", error));
});
