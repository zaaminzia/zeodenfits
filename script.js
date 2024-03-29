const products = [
    { id: 1, name: "Sample Hoodie", price: 9.99, image: "https://via.placeholder.com/100" },
    { id: 2, name: "Sample Hoodie", price: 9.99, image: "https://via.placeholder.com/100" },
    { id: 3, name: "Sample Hoodie", price: 9.99, image: "https://via.placeholder.com/100" },
    { id: 4, name: "Sample Hoodie", price: 9.99, image: "https://via.placeholder.com/100" },
    { id: 5, name: "Sample Hoodie", price: 9.99, image: "https://via.placeholder.com/100" },
    { id: 6, name: "Sample Hoodie", price: 9.99, image: "https://via.placeholder.com/100" },
    { id: 7, name: "Sample Hoodie", price: 9.99, image: "https://via.placeholder.com/100" },
    { id: 8, name: "Sample Hoodie", price: 9.99, image: "https://via.placeholder.com/100" },
    { id: 9, name: "Sample Hoodie", price: 9.99, image: "https://via.placeholder.com/100" },
    { id: 10, name: "Sample Hoodie", price: 9.99, image: "https://via.placeholder.com/100" },
    { id: 11, name: "Sample Hoodie", price: 9.99, image: "https://via.placeholder.com/100" },
    { id: 12, name: "Sample Hoodie", price: 9.99, image: "https://via.placeholder.com/100" },
    { id: 13, name: "Sample Hoodie", price: 9.99, image: "https://via.placeholder.com/100" },
    { id: 14, name: "Sample Hoodie", price: 9.99, image: "https://via.placeholder.com/100" },
    { id: 15, name: "Sample Hoodie", price: 9.99, image: "https://via.placeholder.com/100" },
    { id: 16, name: "Sample Hoodie", price: 9.99, image: "https://via.placeholder.com/100" },
    { id: 17, name: "Sample Hoodie", price: 9.99, image: "https://www.sayingsplus.com/wp-content/uploads/2021/06/Naruto-Itachi-Uchiha-3D-Printed-HoodieZipper-Hoodie-800x800.jpg" },
    // ... (Add image URLs for other products)
  ];
  
  const productContainer = document.getElementById('productContainer');
  
  // Loop through the products and create product cards
  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    // Create an image element with a fixed size
    const productImage = document.createElement('img');
    productImage.src = product.image;
    productImage.alt = product.name;
    productImage.classList.add('product-image');
  
    // You would typically have an image here, but for simplicity, using text
    productCard.appendChild(productImage);
  
    productCard.innerHTML += `
        <p>${product.name}</p>
        <p>Price: $${product.price}</p>
        <button class="btn" onclick="addToCart(${product.id})">Add to Cart</button>
    `;
  
    productContainer.appendChild(productCard);
  });
  
  // Function to simulate adding to cart
  function addToCart(productId) {
    alert(`Product with ID ${productId} added to cart!`);
  }
  let nav = document.querySelector("nav");
    window.onscroll = function() {
      if(document.documentElement.scrollTop > 20){
        nav.classList.add("sticky");
      }else {
        nav.classList.remove("sticky");
      }
    }
    function toggleSidebar() {
        const mobileSidebar = document.getElementById('mobileSidebar');
        mobileSidebar.style.width = mobileSidebar.style.width === '250px' ? '0' : '250px';
    }
  
    function toggleMode() {
        const modeSwitch = document.getElementById('modeSwitch');
        const root = document.documentElement;
  
        if (modeSwitch.checked) {
            // Night mode
            root.style.setProperty('--main-bg-color', '#111');
            root.style.setProperty('--main-text-color', '#fff');
            root.style.setProperty('--main-accent-color', 'white');
            root.style.setProperty('--main-accent-text-color', 'black');
        } else {
            // Day mode
            root.style.setProperty('--main-bg-color', '#f4f4f4');
            root.style.setProperty('--main-text-color', '#333');
            root.style.setProperty('--main-accent-color', 'black');
            root.style.setProperty('--main-accent-text-color', 'white');
        }
    }
    function submitForm() {
      // You can add validation or AJAX submission logic here
      // For simplicity, let's just display an alert for now
      alert('Form submitted!'); 
  }