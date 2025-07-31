import { products, loadProducts } from "../data/products.js"; 
import { Cart, addToCart } from "./cart.js";

console.log("Welcome to the Handcrafted Ecommerce Website!");
console.log("products:", products);

loadProducts();
document.querySelectorAll(".js-add-to-cart").forEach((button)=>{
  button.addEventListener("click", (event) => {
    const productId = event.target.dataset.id;
    addToCart(productId);
  })
})

// Show all products-> data: products(view/model, controller)
// Show number of items in cart-> data: cart(view, model, controller)