// Load the cart data from local storage or initialize an empty cart.
export let Cart = JSON.parse(localStorage.getItem("cart")) || [];

// Cart's Actions
// add
export function addToCart(productId) {
  // Check if the product is already in the cart
  let matchingProduct = Cart.find(item => item.id === productId);
  
  if (matchingProduct) {
    // If yes, increase the quantity
    matchingProduct.quantity += 1;
  } else {
    // If no, add the product to the cart
    Cart.push({
      id: productId,
      quantity: 1
    });
  }
  localStorage.setItem("cart", JSON.stringify(Cart));
  console.log(`Adding product to cart. %c${productId}`, 'color: green; font-weight: bold;');
  console.log("Cart's status: ", Cart);
}

// delete
export function deleteFromCart(productId) {
  const cartIndex = Cart.findIndex(item => item.id === productId);
  if (cartIndex === -1) {
    console.error(`Product with ID ${productId} not found in cart.`);
  }
  else {
    console.log(`${productId} found and now removing from cartIndex ${cartIndex}.`);
    Cart.splice(cartIndex, 1);
    localStorage.setItem("cart", JSON.stringify(Cart));
  }
}