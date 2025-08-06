import { products } from "../data/products.js"; 
import { Cart, deleteFromCart } from "../scripts/cart.js";
export function renderCartList() {
  let cartListContainer = document.querySelector("#cart-list");
  if (!cartListContainer) {
    console.warn('Cart list container not found in DOM.');
    return;
  }
  let cartListHtml = '';
  if (Cart.length === 0) {
      // Cart is empty, displaying a message.
      console.log("Your cart is empty.");
      document.querySelector("#cart-list").innerHTML = "<p>Your cart is empty.</p>";
    } 
  else {
    console.log(`You have ${Cart.length} items and ${Cart.reduce((total, item) => total + item.quantity, 0)} units in your cart.`);
    Cart.forEach(item => {
      const matchedProduct = products.find(p => p.id === item.id);
      if (!matchedProduct) {
        console.error(`Product with ID ${item.id} not found in products list.`);
        return;
      }
      cartListHtml += `
      <div class="product" data-id="${item.id}">
        <div class="product-info">
          <p class="product-id">${item.id}</p>
          <h3 class="product-title">${matchedProduct.title}</h3>
          <p class="product-price">$${matchedProduct.price}</p>
          <p class="product-price">x${item.quantity}</p>
          <button class="remove-from-cart js-remove-from-cart" data-id="${item.id}")">Remove from Cart</button>
        </div>
        <br>
        <br>
      </div>`
    });
    cartListContainer.innerHTML = cartListHtml;
  }
  attachRemovelListeners();
}

function attachRemovelListeners() {
  document.querySelectorAll(".js-remove-from-cart").forEach((button)=>{
    button.addEventListener("click", (event) => {
      console.log("Removing product from cart...");
      const productId = event.target.dataset.id;
      deleteFromCart(productId);
      renderCartList();
    })
  });
}

renderCartList();