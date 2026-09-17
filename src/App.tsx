import { useState } from 'react';
import { BurgerCard } from './components/BurgerCard';
import logoImg from './assets/logo.jpg';
import burger1 from './assets/burger1.jpg';
import burger2 from './assets/burger2.jpg';
import burger3 from './assets/burger3.jpg';
import burger4 from './assets/burger4.jpg';
import './App.css';

export function App() {
  const [cartCount] = useState(0);
  const [cartTotal] = useState(0);

  const burgers = [
    {
      name: 'Volcano Burger',
      description: 'Volcano Burger with fiery spicy sauce and melting cheese...',
      price: 159.00,
      image: burger1,
      initialStock: 4,
    },
    {
      name: 'Bacon & Cheese',
      description: 'Bacon & Cheese with crispy bacon and cheddar...',
      price: 189.00,
      image: burger2,
      initialStock: 1,
    },
    {
      name: 'Sizzlin\' Spicy Chicken',
      description: 'Sizzlin\' Spicy Chicken with spicy glaze...',
      price: 169.00,
      image: burger3,
      initialStock: 4,
    },
    {
      name: 'Mushroom Swiss Deluxe',
      description: 'Mushroom Swiss Deluxe with sautéed mushrooms...',
      price: 149.00,
      image: burger4,
      initialStock: 4,
    },
  ];

  return (
    <div className="app-container">
      <header className="navbar">
        <div className="logo-section">
          <img src={logoImg} alt="Burgers Logo" className="nav-logo" />
        </div>
        <nav className="nav-links">
          <a href="#about">ABOUT</a>
          <a href="#menu" className="active">OUR MENU</a>
          <a href="#shop">SHOP</a>
          <a href="#contact">CONTACT</a>
          <a href="#cart" className="cart-icon">🛒</a>
        </nav>
      </header>

      <main className="main-content">
        <h1 className="brand-title">Roan Burger</h1>

        <div className="burgers-grid">
          {burgers.map((burger, index) => (
            <BurgerCard key={index} {...burger} />
          ))}
        </div>
      </main>

      <footer className="cart-bar">
        <div className="cart-info">
          Items in Cart: <strong>{cartCount}</strong> | Total: <strong>₱{cartTotal.toFixed(2)}</strong>
        </div>
        <button className="checkout-btn">Proceed to Checkout</button>
      </footer>
    </div>
  );
}

export default App;