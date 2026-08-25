import React from 'react';
import '../css/HeroBanner.css';

interface HeroBannerProps {
  title?: string;
  subtitle?: string;
  badgeText?: string;
  ctaText?: string;
  ctaLink?: string;
  imageUrl?: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({
  title = "Upgrade Your Everyday Style",
  subtitle = "Discover the latest arrivals with up to 40% off on premium collections. Limited time offer.",
  badgeText = "Summer Collection 2026",
  ctaText = "Shop Collection Now",
  ctaLink = "/shop",
  imageUrl = "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80"
}) => {
  return (
    <section className="hero-banner">
      <div className="hero-container">
        {/* Left Content Side */}
        <div className="hero-content">
          {badgeText && <span className="hero-badge">{badgeText}</span>}
          <h1 className="hero-title">{title}</h1>
          <p className="hero-subtitle">{subtitle}</p>
          
          <div className="hero-actions">
            <a href={ctaLink} className="hero-btn primary-btn">
              {ctaText} →
            </a>
            <a href="/deals" className="hero-btn secondary-btn">
              View Deals
            </a>
          </div>

          <div className="hero-features">
            <div className="feature-item">
              <span className="feature-icon"></span>
              <span>Free Shipping</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon"></span>
              <span>Fast Delivery</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon"></span>
              <span>2-Year Warranty</span>
            </div>
          </div>
        </div>

        {/* Right Image Side */}
        <div className="hero-image-wrapper">
          <div className="hero-image-container">
            <img 
              src={imageUrl} 
              alt="Hero Promotional Banner" 
              className="hero-image"
            />
            {/* Floating Offer Badge */}
            <div className="floating-badge">
              <span className="discount-tag">40% OFF</span>
              <span className="discount-label">Special Discount</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;