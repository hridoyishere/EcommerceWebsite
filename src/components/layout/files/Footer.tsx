import React from 'react';
import '../css/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Brand & Newsletter Section */}
        <div className="footer-section brand-section">
          <h2 className="footer-logo">
            Shop<span className="logo-accent">Ease</span>
          </h2>
          <p className="footer-description">
            Your one-stop destination for quality products, fast shipping, and exceptional support.
          </p>
          <div className="newsletter-box">
            <h4>Subscribe to our newsletter</h4>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                required 
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-btn">Join</button>
            </form>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/shop">Shop All</a></li>
            <li><a href="/categories">offers</a></li>
            <li><a href="/deals">Popular</a></li>
            <li><a href="/new-arrivals">New Arrivals</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div className="footer-section">
          <h3>Customer Support</h3>
          <ul className="footer-links">
            <li><a href="/help">Help Center</a></li>
            <li><a href="/track-order">Track Order</a></li>
            <li><a href="/returns">Returns & Refunds</a></li>
            <li><a href="/shipping">Shipping Policy</a></li>
          </ul>
        </div>

        {/* Contact Info & Socials */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul className="contact-info">
            <li> support@storehub.com</li>
            <li>📞 +1 (800) 123-4567</li>
            <li>123 Commerce St, Tech City</li>
          </ul>
          <div className="social-links">
            <a href="https://facebook.com" aria-label="Facebook"></a>
            <a href="https://twitter.com" aria-label="Twitter"></a>
            <a href="https://instagram.com" aria-label="Instagram"></a>
            <a href="https://github.com" aria-label="GitHub"></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {new Date().getFullYear()} StoreHub. All rights reserved.</p>
          <div className="legal-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;