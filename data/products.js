// This file contains product data for the testing ONLY.
// It is not used in the production environment.

export const products = [
  {
    id: '493e2bc9',
    image: 'images/product-1.png',
    title: 'Samsung galaxy M31',
    price: 250,
  },
  {
    id: '604854f5',
    image: 'images/product-2.png',
    title: 'Samsung galaxy M31',
    price: 250,
  },
  {
    id: '282fa5e6',
    image: 'images/product-3.png',
    title: 'Samsung galaxy M31',
    price: 250,
  },
  {
    id: 'b0c1d2e3',
    image: 'images/product-4.png',
    title: 'Socks',
    price: 1320,
  },
  {
    id: 'f6e7d8c9',
    image: 'images/product-5.png',
    title: 'Apple iPhone 13',
    price: 49,
  }
]

export function renderProductGrid() {
  products.forEach(item => {
    // Data Checking
    console.log(`
      Product ID: ${item.id}, 
      Title: ${item.title}, 
      Price: $${item.price}
      `);
    // Rendering to DOM
    document.querySelector("#product-list").innerHTML += `
      <div class="product" data-id="${item.id}">
        <div class="product-info">
          <p class="product-id">${item.id}</p>
          <h3 class="product-title">${item.title}</h3>
          <p class="product-price">$${item.price}</p>
          <button class="add-to-cart js-add-to-cart" data-id="${item.id}")">Add to Cart</button>
        </div>
        <br>
        <br>
      </div>`
  });
}