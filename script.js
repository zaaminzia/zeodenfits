document.addEventListener("DOMContentLoaded", function () {
    const productsContainer = document.querySelector(".products");
    const cartItemsContainer = document.querySelector(".cart ul");
    const cartTotalElement = document.querySelector("#cart-total");

    // Sample product data
    const products = [
        { id: 1, name: "Awesome Hoodie", price: 29.99 },
        { id: 2, name: "Cool T-Shirt", price: 19.99 },
        { id: 3, name: "Funky Jacket", price: 39.99 },
    ];

    const cart = [];

    // Display products
    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsContainer.appendChild(productElement);
    });

    // Add to cart function
    window.addToCart = function (productId) {
        const product = products.find(p => p.id === productId);
        cart.push(product);
        updateCart();
    };

    // Update cart UI
    function updateCart() {
        cartItemsContainer.innerHTML = "";
        let total = 0;

        cart.forEach(item => {
            const cartItemElement = document.createElement("li");
            cartItemElement.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartItemsContainer.appendChild(cartItemElement);

            total += item.price;
        });
        cartTotalElement.textContent = total.toFixed(2);
    }
});