import { PRODUCTS, renderProductGrid } from "../data/products.js"; 
import { Cart, addToCart } from "./cart.js";

function setupEventListeners(){
  document.querySelectorAll(".js-add-to-cart").forEach((button)=>{
    button.addEventListener("click", (event) => {
      const productId = event.target.dataset.id;
      const success = addToCart(productId);
      
      if (success) {
        // Provide visual feedback
        const originalText = event.target.textContent;
        event.target.textContent = 'Added!';
        event.target.style.backgroundColor = '#28a745';
        
        setTimeout(() => {
          event.target.textContent = originalText;
          event.target.style.backgroundColor = '';
        }, 1000);
      }
    })
  })
}

export function initializePage() {
    renderProductGrid();
    setupEventListeners();
}

initializePage();