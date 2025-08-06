import { Cart, deleteFromCart } from '../scripts/cart.js';
import { products } from '../data/products.js';
import { renderCartList } from '../scripts/checkout.js';

describe('Checkout UI', () => {
  let cartListContainer;

  beforeEach(() => {
    // Create a test container and add it to the body
    const testContainer = document.createElement('div');
    testContainer.id = 'test-container';
    document.body.appendChild(testContainer);

    // Add your cart-list inside the test container
    testContainer.innerHTML = '<div id="cart-list"></div>';
    cartListContainer = document.querySelector('#cart-list');
    Cart.length = 0;
  });

  afterEach(() => {
    // Clean up the test container after each test
    const testContainer = document.getElementById('test-container');
    if (testContainer) {
      testContainer.remove();
    }
  });

  it('should show empty cart message when cart is empty', () => {
    renderCartList();
    expect(cartListContainer.innerHTML).toContain('Your cart is empty');
  });

  it('should render products in the cart', () => {
    Cart.push({ id: products[0].id, quantity: 2 });
    renderCartList();
    expect(cartListContainer.innerHTML).toContain(products[0].title);
    expect(cartListContainer.innerHTML).toContain('x2');
  });

  it('should remove product from cart when remove button is clicked', () => {
    // Arrange: Add a product to the cart and render
    Cart.push({ id: products[0].id, quantity: 1 });
    renderCartList();

    // Act: Simulate click on the remove button
    const removeBtn = document.querySelector('.js-remove-from-cart');
    removeBtn.click();

    // Assert: Cart is empty and UI updated
    expect(Cart.length).toBe(0);
    expect(document.querySelector('#cart-list').innerHTML).toContain('Your cart is empty');
  });
});