# Handcrafted Ecommerce Website
This is a handcrafted ecommerce website that being made entirely from scratch witout popular frond-end frameworks (like React) and the helps of Ai tools. It's purely done by html, css, javascript including some useful css libraries and js packages.

This project is a part of my learning process, and I want to make it scaleable and maintainable along with my learning journey. It should be able to integrate multiple components and external services as easya as possible.

## My Playboook

### Priortization based on level of importances
1. **MVP Requirements**: The most important things that must be done before the MVP version can be launched.
2. **Testing Framework**: These are things that are important but not as critical as the MVP requirements.'
   1. **Unit Testing**: These are things that are important but not as critical as the MVP requirements.
   2. **Integration Testing**: These are things that are important but not as critical as the MVP requirements.
   3. **End-to-End Testing**: These are things that are important but not as critical as the MVP requirements.
   4. **Performance Testing**: These are things that are important but not as critical as the MVP requirements.
   5. **Security Testing**: These are things that are important but not as critical as the MVP requirements.
   6. **Usability Testing**: These are things that are important but not as critical as the MVP requirements.
   7. **Compatibility Testing**: These are things that are important but not as critical as the MVP requirements.
   8. **Localization Testing**: These are things that are important but not as critical as the MVP requirements.
   9. **Regression Testing**: These are things that are important but not as critical as the MVP requirements.
   10. **Acceptance Testing**: These are things that are important but not as critical as the MVP requirements.
   
### Test Plan
1. Cart Logic (cart.js)
What to test:

Adding items to cart: Ensure items are added correctly, quantities are updated, and duplicates are handled.
Removing items from cart: Ensure items are removed by ID and cart updates as expected.
Cart state management: Test that the cart reflects the correct state after add/remove operations.
Why:
This is core business logic. Bugs here can break the shopping experience and cause user frustration or data loss.

2. Product Data (products.js)
What to test:

Product lookup: Ensure products can be found by ID and have correct properties (title, price, etc.).
Why:
Accurate product data is essential for displaying correct information and processing orders.

3. UI Rendering (checkout.js)
What to test:

Cart rendering: Test that the cart displays the correct items, quantities, and prices.
Empty cart state: Ensure the empty cart message appears when appropriate.
Remove button functionality: Simulate clicks and verify that items are removed and UI updates.
Why:
UI bugs can confuse users or prevent them from completing purchases.

4. Event Handling
What to test:

Button click events: Ensure event listeners are attached and trigger the correct logic.
Re-rendering: After cart changes, verify that the UI updates and listeners are re-attached.
Why:
Event handling is critical for interactive features like removing items from the cart.

5. Edge Cases
What to test:

Removing non-existent items: Ensure the app handles attempts to remove items not in the cart gracefully.
Cart with invalid product IDs: Test how the UI and logic handle missing or corrupted product data.
Why:
Testing edge cases ensures robustness and prevents crashes or inconsistent states.

Summary Table
Area	What to Test	Why
1. Cart Logic	Add/remove/update items	Core business logic
2. Product Data	Product lookup by ID	Accurate display and processing
3. UI Rendering	Cart display, empty state, updates	User experience
4. Event Handling	Button clicks, re-rendering	Interactivity
5. Edge Cases	Invalid removals, missing products	Robustness
### Recommendation:
Start by writing unit tests for cart logic and product lookup. Then, use integration or UI tests (e.g., with Jest + jsdom, or Cypress for end-to-end) to test rendering and event handling.