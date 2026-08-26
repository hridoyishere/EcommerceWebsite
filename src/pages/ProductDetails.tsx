import { useState } from 'react';
import Navbar from '../components/layout/files/Navbar';
import Footer from '../components/layout/files/Footer';
import './css/ProductDeails.css';

const PRODUCT_DATA = {
  id: 'hp-15-fc0621au',
  title: 'HP 15-fc0621AU (C78HZPA) AMD Athlon Silver 7120U 2.4 to 3.5GHz, 8GB LPDDR5, 512GB SSD, Win 11, 15.6 Inch Full HD Silver Laptop',
  brand: 'HP',
  rating: 0,
  ratingsCount: 'No Ratings',
  originalPrice: 65500,
  currentPrice: 59800,
  discount: '-9%',
  deliveryLocation: 'Dhaka, Dhaka North, Banani Road No. 12 - 19',
  deliveryFee: 570,
  deliveryEst: '28-31 Aug',
  sellerName: 'JANANI COMPUTERS.',
  sellerRating: '88%',
  shipOnTime: '100%',
  colors: ['Silver'],
  images: [
    'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80'
  ]
};


export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  imageUrl: string;
  isNew?: boolean;
}

const sampleProducts: Product[] = [
  {
    id: 1,
    name: 'Wireless Noise-Canceling Headphones',
    category: 'Electronics',
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.8,
    reviewsCount: 124,
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
    isNew: true,
  },
  {
    id: 2,
    name: 'Minimalist Leather Wrist Watch',
    category: 'Accessories',
    price: 120.00,
    rating: 4.6,
    reviewsCount: 89,
    imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    name: 'Ergonomic Mechanical Keyboard',
    category: 'Electronics',
    price: 89.99,
    originalPrice: 119.99,
    rating: 4.9,
    reviewsCount: 210,
    imageUrl: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 4,
    name: 'Smart Fitness & Health Tracker',
    category: 'Electronics',
    price: 49.99,
    originalPrice: 69.99,
    rating: 4.5,
    reviewsCount: 75,
    imageUrl: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&w=600&q=80',
    isNew: true,
  },
  {
    id: 5,
    name: 'Wireless Noise-Canceling Headphones',
    category: 'Electronics',
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.8,
    reviewsCount: 124,
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
    isNew: true,
  },
  {
    id: 6,
    name: 'Minimalist Leather Wrist Watch',
    category: 'Accessories',
    price: 120.00,
    rating: 4.6,
    reviewsCount: 89,
    imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 7,
    name: 'Ergonomic Mechanical Keyboard',
    category: 'Electronics',
    price: 89.99,
    originalPrice: 119.99,
    rating: 4.9,
    reviewsCount: 210,
    imageUrl: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 8,
    name: 'Smart Fitness & Health Tracker',
    category: 'Electronics',
    price: 49.99,
    originalPrice: 69.99,
    rating: 4.5,
    reviewsCount: 75,
    imageUrl: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&w=600&q=80',
    isNew: true,
  },
];


const ProductDetailsPage = () => {
  const [selectedImage, setSelectedImage] = useState(PRODUCT_DATA.images[0]);
  const [selectedColor, setSelectedColor] = useState(PRODUCT_DATA.colors[0]);
  const [quantity, setQuantity] = useState(1);

  return (
    <>
    <Navbar />
    <div className="product-details-container">
      <div className="product-details-grid">
        
        {/* Gallery */}
        <div className="gallery-column">
          <div className="main-image-container">
            <img src={selectedImage} alt={PRODUCT_DATA.title} className="main-image" />
          </div>
          <div className="thumbnail-container">
            {PRODUCT_DATA.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                className={`thumbnail-img ${selectedImage === img ? 'active' : ''}`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Center Info */}
        <div className="info-column">
          <h1 className="product-title">{PRODUCT_DATA.title}</h1>

          <div className="rating-row">
            <span className="stars">☆☆☆☆☆</span>
            <span className="rating-text">{PRODUCT_DATA.ratingsCount}</span>
            <span className="divider">|</span>
            <span className="brand-text">Brand: <a href="#hp">{PRODUCT_DATA.brand}</a></span>
          </div>

          <hr className="section-divider" />

          <div className="price-container">
            <span className="currency-symbol">৳ </span>
            <span className="current-price">{PRODUCT_DATA.currentPrice.toLocaleString()}</span>
            <div className="original-price-row">
              <span className="original-price">৳ {PRODUCT_DATA.originalPrice.toLocaleString()}</span>
              <span className="discount-badge">{PRODUCT_DATA.discount}</span>
            </div>
          </div>

          <div className="option-section">
            <span className="option-label">Color Family: <strong>{selectedColor}</strong></span>
            <div className="color-group">
              {PRODUCT_DATA.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`color-btn ${selectedColor === color ? 'active' : ''}`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          <div className="option-section">
            <span className="option-label">Quantity</span>
            <div className="quantity-row">
              <div className="quantity-box">
                <button 
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  className="qty-btn"
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <span className="qty-val">{quantity}</span>
                <button 
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="qty-btn"
                >
                  +
                </button>
              </div>
              <span className="stock-notice">Almost sold out, buy now!</span>
            </div>
          </div>

          <div className="action-buttons">
            <button className="buy-now-btn">Buy Now</button>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="sidebar-column">
          <div className="sidebar-box">
            <span className="box-title">Delivery Options</span>
            <div className="box-row">
              <span></span>
              <div className="box-text-group">
                <p className="main-text">{PRODUCT_DATA.deliveryLocation}</p>
              </div>
              <a href="#change" className="change-link">CHANGE</a>
            </div>
            <div className="box-row">
              <span></span>
              <div className="box-text-group">
                <p className="main-text">Standard Delivery</p>
                <p className="sub-text">Guaranteed by {PRODUCT_DATA.deliveryEst}</p>
              </div>
              <span className="price-text">৳ {PRODUCT_DATA.deliveryFee}</span>
            </div>
            <div className="box-row">
              <span></span>
              <div className="box-text-group">
                <p className="main-text">Cash on Delivery Available</p>
              </div>
            </div>
          </div>

          <div className="sidebar-box">
            <span className="box-title">Return & Warranty</span>
            <div className="box-row">
              <span>↩</span>
              <p className="main-text">14 days easy return</p>
            </div>
            <div className="box-row">
              <span>🛡️</span>
              <p className="main-text">2 Years Brand Warranty</p>
            </div>
          </div>

          <div className="sidebar-box">
            <p className="sub-text">Sold by</p>
            <h4 className="seller-name">{PRODUCT_DATA.sellerName}</h4>
            
            <div className="seller-metrics">
              <div className="metric-item">
                <span className="sub-text">Positive Seller Ratings</span>
                <span className="metric-val">{PRODUCT_DATA.sellerRating}</span>
              </div>
              <div className="metric-item">
                <span className="sub-text">Ship on Time</span>
                <span className="metric-val">{PRODUCT_DATA.shipOnTime}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
      {/* some popular products show case */}
      <div className="popular-products-section">
        <h2 className="section-title">Popular Products</h2>
        <div className="popular-products-grid">
          {sampleProducts.map((product) => (
            <div key={product.id} className="popular-product-card">
              <img src={product.imageUrl} alt={product.name} className="popular-product-image" />
              <h3 className="popular-product-name">{product.name}</h3>
              <p className="popular-product-price">৳ {product.price.toLocaleString()}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default ProductDetailsPage;