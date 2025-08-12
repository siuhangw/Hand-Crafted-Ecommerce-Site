export const PRODUCTS = Object.freeze([
  {
    id: '493e2bc9',
    image: 'images/product-1.png',
    title: 'Wireless Keyboard',
    price: 29.99,
  },
  {
    id: '604854f5',
    image: 'images/product-2.png',
    title: 'USB-C Cable',
    price: 9.5,
  },
  {
    id: '282fa5e6',
    image: 'images/product-3.png',
    title: 'Ergonomic Mouse',
    price: 49.0,
  }
]);
export function renderProductGrid() {
  PRODUCTS.forEach(item => {
    document.querySelector("#product-list").innerHTML += `
      <div class="product" data-id="${item.id}">
        <div class="product-info">
          <p class="product-id">${item.id}</p>
          <h3 class="product-title">${item.title}</h3>
          <p class="product-price">$${item.price}</p>
          <button class="add-to-cart js-add-to-cart" data-id="${item.id}">Add to Cart</button>
        </div>
        <br>
        <br>
      </div>`
  });
}