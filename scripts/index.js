import { PRODUCTS, renderProductGrid } from "../data/products.js"; 
import { Cart, addToCart } from "./cart.js";

function setupEventListeners(){
  document.querySelectorAll(".js-add-to-cart").forEach((button)=>{
    button.addEventListener("click", (event) => {
      const productId = event.target.dataset.id;
      addToCart(productId);
    })
  })
}
export function initializePage() {
    renderProductGrid();
    setupEventListeners();
}

initializePage();