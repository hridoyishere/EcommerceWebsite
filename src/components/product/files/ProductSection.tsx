import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import '../css/ProductSection.css';

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
];

interface ProductSectionProps {
  products?: Product[];
  onAddToCart?: (product: Product) => void;
  onBuyNow?: (product: Product) => void;
}

const ProductSection: React.FC<ProductSectionProps> = ({
  products = sampleProducts,
  onAddToCart,
  onBuyNow,
}) => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Electronics', 'Accessories'];

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const handleAddToCart = (product: Product) => {
    if (onAddToCart) {
      onAddToCart(product);
    } else {
      console.log('Added to cart:', product.name);
    }
  };

  const handleBuyNow = (product: Product) => {
    if (onBuyNow) {
      onBuyNow(product);
    } else {
      console.log('Buying now:', product.name);
    }
  };

  return (
    <section className="product-section">
      <div className="product-container">
        {/* Header & Filter Controls */}
        <div className="product-header">
          <div>
            <span className="section-badge">Our Catalog</span>
            <h2 className="section-title">Trending Products</h2>
          </div>
          <div className="category-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              {/* Image & Badges */}
              <div className="product-image-container" onClick={() => navigate(`/product/${product.id}`)}>
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="product-image"
                />
                <div className="badge-group">
                  {product.isNew && <span className="badge new-badge">New</span>}
                  {product.originalPrice && (
                    <span className="badge discount-badge">
                      -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                    </span>
                  )}
                </div>
              </div>

              {/* Info Body */}
              <div className="product-info">
                <span className="product-category">{product.category}</span>
                <h3 className="product-name">{product.name}</h3>

                {/* Rating */}
                <div className="product-rating">
                  <span className="stars">★ {product.rating}</span>
                  <span className="reviews">({product.reviewsCount} reviews)</span>
                </div>

                {/* Price Display */}
                <div className="product-price-wrapper">
                  <span className="current-price">${product.price.toFixed(2)}</span>
                  {product.originalPrice && (
                    <span className="original-price">${product.originalPrice.toFixed(2)}</span>
                  )}
                </div>

                {/* Call-to-Actions */}
                <div className="product-actions">
                  <button 
                    className="action-btn add-to-cart-btn"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                  <button 
                    className="action-btn buy-now-btn"
                    onClick={() => handleBuyNow(product)}
                  >
                     Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* View see more button */}
        <div className="see-more">
          <button className="see-more-btn">See More</button>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;