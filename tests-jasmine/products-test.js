import { products } from '../data/products.js';

describe('Product Data', () => {
  it('should be an array', () => {
    expect(Array.isArray(products)).toBeTrue();
  });

  it('should have products with id, title, and price', () => {
    products.forEach(product => {
      expect(product.id).toBeDefined();
      expect(product.title).toBeDefined();
      expect(product.price).toBeDefined();
    });
  });

  it('should have unique product ids', () => {
    const ids = products.map(p => p.id);           // Get an array of all product IDs
    const uniqueIds = new Set(ids);                // Create a Set from the IDs (duplicates are removed)
    expect(uniqueIds.size).toBe(ids.length);       // Compare the number of unique IDs to the total number of IDs
  });

  it('should find a product by id', () => {
    if (products.length > 0) {
      const testId = products[0].id;
      const found = products.find(p => p.id === testId);
      expect(found).toBeDefined();
      expect(found.id).toBe(testId);
    }
  });
});