export let Cart = JSON.parse(localStorage.getItem("cart")) || [];

export function addToCart(productId) {
  if (!productId) {
    console.error('Product ID is required to add to cart');
    return false;
  }

  try {
    let existingItem = Cart.find(item => item.id === productId);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      Cart.push({ id: productId, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(Cart));
    console.log(`Product ${productId} added to cart`);
    return true;
  } catch (error) {
    console.error('Error adding to cart:', error);
    return false;
  }
}

export function deleteFromCart(productId) {
  if (!productId) {
    console.error('Product ID is required to remove from cart');
    return false;
  }

  try {
    const cartIndex = Cart.findIndex(item => item.id === productId);
    if (cartIndex === -1) {
      console.error(`Product with ID ${productId} not found in cart.`);
      return false;
    } else {
      console.log(`${productId} found and now removing from cartIndex ${cartIndex}.`);
      Cart.splice(cartIndex, 1);
      localStorage.setItem("cart", JSON.stringify(Cart));
      return true;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
    return false;
  }
}

export function getCartTotal() {
  return Cart.reduce((total, item) => total + item.quantity, 0);
}

export function clearCart() {
  Cart.length = 0;
  localStorage.removeItem("cart");
}