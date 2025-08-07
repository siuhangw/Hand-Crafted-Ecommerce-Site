# Handcrafted Ecommerce Website

A handcrafted ecommerce website built entirely from scratch without popular front-end frameworks (like React) and AI tools. It's purely built with HTML, CSS, and JavaScript, including some useful CSS libraries and JS packages.

## 🎯 Project Goals

This project is part of my learning process, and I want to make it scalable and maintainable along with my learning journey. It should be able to integrate multiple components and external services as easily as possible.

## 🚀 Features

- **Product Catalog**: Browse available products with descriptions and prices
- **Shopping Cart**: Add/remove items with persistent storage
- **Responsive Design**: Works on desktop and mobile devices
- **Local Storage**: Cart persists between sessions
- **Clean UI**: Modern, accessible interface

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript (ES6 modules)
- **Testing**: Jasmine testing framework
- **Storage**: Browser LocalStorage
- **No external dependencies** - Pure vanilla implementation

## 📁 Project Structure

```
├── index.html          # Home page
├── checkout.html       # Shopping cart page
├── styles/
│   └── global.css      # Global styles and responsive design
├── scripts/
│   ├── index.js        # Home page logic
│   ├── checkout.js     # Cart page logic
│   └── cart.js         # Cart management utilities
├── data/
│   └── products.js     # Product data and rendering
├── tests-jasmine/      # Test files
└── package.json        # Project configuration
```

## 🏃‍♂️ Getting Started

### Prerequisites

- Modern web browser with ES6 module support
- Python 3 (for local development server)

### Installation & Running

1. **Clone the repository**:
   ```bash
   git clone https://github.com/siuhangw/Hand-Crafted-Ecommerce-Site.git
   cd Hand-Crafted-Ecommerce-Site
   ```

2. **Start the development server**:
   ```bash
   npm start
   # or
   python3 -m http.server 8000
   ```

3. **Open your browser** and navigate to:
   ```
   http://localhost:8000
   ```

### Running Tests

Open the test runner in your browser:
```bash
npm test
# or manually open: tests-jasmine/SpecRunner.html
```

## 🧪 Testing

This project uses Jasmine for testing. Tests cover:
- Product data validation
- Cart functionality (add/remove items)
- Data persistence
- Error handling

## 🎨 Features in Detail

### Product Management
- Products are defined in `data/products.js`
- Each product has ID, title, price, and description
- Products render in a responsive grid layout

### Shopping Cart
- Add items to cart with visual feedback
- Persistent storage using localStorage
- Remove items from cart
- Calculate totals automatically
- Empty cart state handling

### Responsive Design
- Mobile-first approach
- Flexible grid layout
- Touch-friendly buttons
- Optimized for various screen sizes

## 🔧 Development

### Adding New Products
Edit `data/products.js` and add new product objects:

```javascript
{
  id: 'unique-id',
  title: 'Product Name',
  price: 29.99,
  description: 'Product description'
}
```

### Customizing Styles
Modify `styles/global.css` to change the appearance. The CSS follows a component-based structure.

## 🤝 Contributing

This is a learning project, but contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📈 Future Enhancements

- [ ] User authentication
- [ ] Payment integration
- [ ] Product search and filtering
- [ ] Order history
- [ ] Admin panel for product management
- [ ] Progressive Web App (PWA) features
- [ ] Integration with external APIs

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

Built as part of a learning journey to understand vanilla web development fundamentals without framework dependencies.