import { PRODUCTS as PRODUCTS } from "../data/products.js"; 
import { Cart, deleteFromCart } from "../scripts/cart.js";
export function renderCartList() {
  let cartListContainer = document.querySelector("#cart-list");
  if (!cartListContainer) {
    console.warn('Cart list container not found in DOM.');
    return;
  }
  
  let cartListHtml = '';
  if (Cart.length === 0) {
    cartListHtml = '<div class="empty-cart"><p>Your cart is empty.</p></div>';
  } else {
    console.log(`You have ${Cart.length} items and ${Cart.reduce((total, item) => total + item.quantity, 0)} units in your cart.`);
    
    let totalPrice = 0;
    cartListHtml += '<div class="cart-items">';
    
    Cart.forEach(item => {
      const matchedProduct = PRODUCTS.find(p => p.id === item.id);
      if (!matchedProduct) {
        console.error(`Product with ID ${item.id} not found in products list.`);
        return;
      }
      
      const itemTotal = matchedProduct.price * item.quantity;
      totalPrice += itemTotal;
      
      cartListHtml += `
        <div class="cart-item" data-id="${item.id}">
          <div class="product-info">
            <h3 class="product-title">${matchedProduct.title}</h3>
            <p class="product-price">$${matchedProduct.price.toFixed(2)} × ${item.quantity}</p>
            <p class="item-total">Subtotal: $${itemTotal.toFixed(2)}</p>
            <button class="remove-from-cart js-remove-from-cart" data-id="${item.id}">Remove from Cart</button>
          </div>
        </div>`;
    });
    
    cartListHtml += `</div>
      <div class="cart-summary">
        <h3>Total: $${totalPrice.toFixed(2)}</h3>
      </div>`;
  }
  
  cartListContainer.innerHTML = cartListHtml;
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