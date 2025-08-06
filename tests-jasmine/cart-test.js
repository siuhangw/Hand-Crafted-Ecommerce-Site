import { Cart, addToCart, deleteFromCart } from '../scripts/cart.js';
import { products } from '../data/products.js';

describe('Cart Logic', () => {
  beforeEach(() => {
    // Clear the cart before each test
    Cart.length = 0;
  });

  it('should add a product to the cart', () => {
    const productId = products[0].id;
    addToCart(productId);
    expect(Cart.length).toBe(1);
    expect(Cart[0].id).toBe(productId);
    expect(Cart[0].quantity).toBe(1);
  });

  it('should increase quantity if the same product is added again', () => {
    const productId = products[0].id;
    addToCart(productId);
    addToCart(productId);
    expect(Cart.length).toBe(1);
    expect(Cart[0].quantity).toBe(2);
  });

  it('should add multiple different products', () => {
    const id1 = products[0].id;
    const id2 = products[1].id;
    addToCart(id1);
    addToCart(id2);
    expect(Cart.length).toBe(2);
    expect(Cart.find(item => item.id === id1)).toBeDefined();
    expect(Cart.find(item => item.id === id2)).toBeDefined();
  });

  it('should remove a product from the cart', () => {
    const productId = products[0].id;
    addToCart(productId);
    deleteFromCart(productId);
    expect(Cart.find(item => item.id === productId)).toBeUndefined();
    expect(Cart.length).toBe(0);
  });

  it('should do nothing if removing a product not in the cart', () => {
    const productId = products[0].id;
    deleteFromCart(productId);
    expect(Cart.length).toBe(0);
  });
});