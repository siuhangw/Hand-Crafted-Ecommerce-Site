export let Cart = JSON.parse(localStorage.getItem("cart")) || [];

export function addToCart(productId) {
  let existingItem = Cart.find(item => item.id === productId);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    Cart.push({ id: productId, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(Cart));
}

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