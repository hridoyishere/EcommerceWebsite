import { useState } from 'react';
import { ShoppingCart, Search, User, Menu, X, Heart } from 'lucide-react';
import '../css/Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartCount = 3; // Example dynamic count

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Mobile Hamburger Toggle */}
        <button 
          className="mobile-menu-btn" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Brand Logo */}
        <div className="nav-logo">
          <a href="/">ShopEase<span>.</span></a>
        </div>

        {/* Search Bar */}
        <div className="nav-search">
          <input type="text" placeholder="Search products, brands..." />
          <button type="submit" aria-label="Search">
            <Search size={18} />
          </button>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="/" className="active">HOME</a></li>
          <li><a href="/popular">POPULAR</a></li>
          <li><a href="/about">ABOUT US</a></li>
        </ul>

        {/* Action Icons (Wishlist, User, Cart) */}
        <div className="nav-actions">
          <a href="#" className="icon-btn" aria-label="Wishlist">
            <Heart size={22} />
          </a>
          
          <a href="/profile" className="icon-btn" aria-label="Account">
            <User size={22} />
          </a>

          <a href="/cart" className="icon-btn cart-btn" aria-label="Shopping Cart">
            <ShoppingCart size={22} />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;