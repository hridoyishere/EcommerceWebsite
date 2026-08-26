import { useState } from 'react';
import Navbar from '../components/layout/files/Navbar';
import Footer from '../components/layout/files/Footer';
import './css/Cart.css';

const INITIAL_CART = [
  {
    id: '1',
    title: 'iPhone 17 256GB | 512GB (Physical Sim only)',
    brand: 'iphone',
    colorFamily: 'Mist Blue',
    storage: '256GB',
    price: 139979,
    originalPrice: 159999,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=500&auto=format&fit=crop&q=80',
    stockText: null,
    selected: false
  },
  {
    id: '2',
    title: 'iPhone 17 Pro max 256GB | 512GB | 1TB (Physical Sim + e-Sim)',
    brand: 'iphone',
    colorFamily: 'Cosmic Orange',
    storage: '256GB',
    price: 205970,
    originalPrice: 249999,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&auto=format&fit=crop&q=80',
    stockText: 'Only 8 item(s) in stock',
    selected: false
  },
  {
    id: '3',
    title: 'iPhone 17 256GB | 512GB (Physical Sim + e-Sim)',
    brand: 'iphone',
    colorFamily: 'White',
    storage: '256GB',
    price: 132970,
    originalPrice: 159999,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=500&auto=format&fit=crop&q=80',
    stockText: null,
    selected: false
  },
  {
    id: '4',
    title: 'iPhone 17 256GB | 512GB (Physical Sim only)',
    brand: 'iphone',
    colorFamily: 'Mist Blue',
    storage: '256GB',
    price: 139979,
    originalPrice: 159999,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=500&auto=format&fit=crop&q=80',
    stockText: null,
    selected: false
  },
  {
    id: '5',
    title: 'iPhone 17 Pro max 256GB | 512GB | 1TB (Physical Sim + e-Sim)',
    brand: 'iphone',
    colorFamily: 'Cosmic Orange',
    storage: '256GB',
    price: 205970,
    originalPrice: 249999,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&auto=format&fit=crop&q=80',
    stockText: 'Only 8 item(s) in stock',
    selected: false
  },
  {
    id: '6',
    title: 'iPhone 17 256GB | 512GB (Physical Sim + e-Sim)',
    brand: 'iphone',
    colorFamily: 'White',
    storage: '256GB',
    price: 132970,
    originalPrice: 159999,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=500&auto=format&fit=crop&q=80',
    stockText: null,
    selected: false
  }
];

const CartPage = () => {
  const [cartItems, setCartItems] = useState(INITIAL_CART);
  const [voucherCode, setVoucherCode] = useState('');

  // Toggle Single Item Selection
  const toggleSelectItem = (id) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, selected: !item.selected } : item))
    );
  };

  // Select / Deselect All Items
  const isAllSelected = cartItems.length > 0 && cartItems.every((item) => item.selected);
  const toggleSelectAll = () => {
    setCartItems((prev) => prev.map((item) => ({ ...item, selected: !isAllSelected })));
  };

  // Adjust Quantity
  const handleQuantityChange = (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newQty = Math.max(1, item.quantity + delta);
          return { ...item, quantity: newQty };
        }
        return item;
      })
    );
  };

  // Delete Single Item
  const handleDeleteItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Delete Selected Items
  const handleDeleteSelected = () => {
    setCartItems((prev) => prev.filter((item) => !item.selected));
  };

  // Order Summary Calculations
  const selectedItems = cartItems.filter((item) => item.selected);
  const selectedCount = selectedItems.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = selectedItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shippingFee = 0; // Default zero shipping as per design
  const total = subtotal + shippingFee;

  return (
    <>
    <Navbar />
    <div className="cart-page-container">
      <div className="cart-grid">
        
        {/* Left Column: Cart Items List */}
        <div className="cart-items-section">
          
          {/* Cart Header Control */}
          <div className="cart-header-bar">
            <label className="select-all-label">
              <input
                type="checkbox"
                className="item-checkbox"
                checked={isAllSelected}
                onChange={toggleSelectAll}
              />
              SELECT FOR ORDER OR REMOVE ({cartItems.length} ITEM(S))
            </label>
            <button className="delete-btn" onClick={handleDeleteSelected}>
              🗑 DELETE
            </button>
          </div>

          {/* Shop Items Group */}
          {cartItems.length > 0 && (
            <div className="shop-group">
              <div className="shop-header">
              </div>

              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <input
                    type="checkbox"
                    className="item-checkbox"
                    checked={item.selected}
                    onChange={() => toggleSelectItem(item.id)}
                  />

                  <div className="item-thumb-container">
                    <img src={item.image} alt={item.title} className="item-thumb" />
                  </div>

                  <div className="item-details">
                    <div className="item-title-row">
                      <span className="payday-tag">Payday Sale</span>
                      <h3 className="item-title">{item.title}</h3>
                    </div>
                    <p className="item-meta">
                      {item.brand}, Color Family:{item.colorFamily}, Storage Capacity:{item.storage}
                    </p>
                    {item.stockText && <p className="stock-warning">{item.stockText}</p>}
                  </div>

                  <div className="item-price-col">
                    <div className="current-price">৳ {item.price.toLocaleString()}</div>
                    <div className="original-price">৳ {item.originalPrice.toLocaleString()}</div>
                  </div>

                  <div className="item-actions-col">
                    <div className="quantity-control">
                      <button
                        className="qty-btn"
                        onClick={() => handleQuantityChange(item.id, -1)}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span className="qty-display">{item.quantity}</span>
                      <button
                        className="qty-btn"
                        onClick={() => handleQuantityChange(item.id, 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Order Summary Card */}
        <div className="order-summary-card">
          <h2 className="summary-title">Order Summary</h2>

          <div className="summary-row">
            <span>Subtotal ({selectedCount} items)</span>
            <span className="summary-val">৳ {subtotal.toLocaleString()}</span>
          </div>

          <div className="summary-row">
            <span>Shipping Fee</span>
            <span className="summary-val">৳ {shippingFee}</span>
          </div>

          <div className="voucher-group">
            <input
              type="text"
              className="voucher-input"
              placeholder="Enter Voucher Code"
              value={voucherCode}
              onChange={(e) => setVoucherCode(e.target.value)}
            />
            <button className="voucher-btn">APPLY</button>
          </div>

          <div className="total-row">
            <span className="total-label">Total</span>
            <span className="total-price">৳ {total.toLocaleString()}</span>
          </div>

          <button
            className="checkout-btn"
            disabled={selectedCount === 0}
          >
            PROCEED TO CHECKOUT ({selectedCount})
          </button>
        </div>

      </div>
    </div>
    <Footer />
    </>
  );
};

export default CartPage;