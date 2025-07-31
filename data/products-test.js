
import { products, loadProducts } from './yourModuleFileName'; // replace with actual module file name

describe('Product Data', () => {
  it('should have unique product IDs', () => {
    const ids = products.map(product => product.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });
 it('should contain required fields for each product', () => {
    products.forEach(product => {
      expect(product).toHaveProperty('id');
      expect(product).toHaveProperty('image');
      expect(product.title).not.toBeUndefined();
      expect(product.price).not.toBeUndefined();
    });
  });
 it('should have numeric prices for all products where price is defined', () => {
    products.forEach(product => {
      if (product.hasOwnProperty('price')) {
        expect(typeof product.price).toBe('number');
      }
    });
  });
});

describe('loadProducts Function', () => {
  let originalConsoleLog;
  let productListElement;

  beforeEach(() => {
    // Mock console.log to prevent actual logging
    originalConsoleLog = console.log;
    console.log = jasmine.createSpy('log');

    // Create a mock DOM element
    productListElement = document.createElement('div');
    productListElement.id = 'product-list';
    document.body.appendChild(productListElement);
  });

  afterEach(() => {
    // Restore original console.log console.log = originalConsoleLog;
    // Cleanup mock DOM element
    document.body.removeChild(productListElement);
  });

  it('should append each product to the #product-list container', () => {
    loadProducts();
    products.forEach(product => {
      const productElement = document.querySelector(`[data-id="${product.id}"]`);
      expect(productElement).not.toBeNull();
    });
  });

  it('should correctly render product details', () => {
    loadProducts();
    products.forEach(product => {
      const productElement = document.querySelector(`[data-id="${product.id}"]`);
      if (productElement) {
        expect(productElement.querySelector('.product-id').textContent).toContain(product.id);
        expect(productElement.querySelector('.product-title').textContent).toContain(product.title);
        expect(productElement.querySelector('.product-price').textContent).toContain(`$${product.price}`);
      }
    });
  });

  it('should call console.log with expected format', () => {
    loadProducts();
    products.forEach(product => {
      expect(console.log).toHaveBeenCalledWith(jasmine.stringMatching(new RegExp(`${product.id}`)));
      expect(console.log).toHaveBeenCalledWith(jasmine.stringMatching(new RegExp(`${product.title}`)));
      expect(console.log).toHaveBeenCalledWith(jasmine.stringMatching(new RegExp(`\\$${product.price}`)));
    });
  });
});
