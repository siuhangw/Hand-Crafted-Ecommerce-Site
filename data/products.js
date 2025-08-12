export const PRODUCTS = Object.freeze([
  {
    id: '493e2bc9',
    title: 'Wireless Keyboard',
    price: 29.99,
    description: 'Ergonomic wireless keyboard with long battery life'
  },
  {
    id: '604854f5',
    title: 'USB-C Cable',
    price: 9.5,
    description: 'High-speed USB-C cable for charging and data transfer'
  },
  {
    id: '282fa5e6',
    title: 'Ergonomic Mouse',
    price: 49.0,
    description: 'Comfortable ergonomic mouse for extended use'
  }
]);
export function renderProductGrid() {
  const productListContainer = document.querySelector("#product-list");
  if (!productListContainer) {
    console.warn('Product list container not found in DOM.');
    return;
  }
  
  let productGridHtml = '';
  PRODUCTS.forEach(item => {
    productGridHtml += `
      <div class="product" data-id="${item.id}">
        <div class="product-info">
          <h3 class="product-title">${item.title}</h3>
          <p class="product-description">${item.description}</p>
          <p class="product-price">$${item.price.toFixed(2)}</p>
          <button class="add-to-cart js-add-to-cart" data-id="${item.id}">Add to Cart</button>
        </div>
      </div>`;
  });
  productListContainer.innerHTML = productGridHtml;
}