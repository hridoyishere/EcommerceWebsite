import React from 'react';
import '../css/HeroBanner.css';

interface HeroBannerProps {
  imageUrl?: string;
  altText?: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({
  imageUrl = "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
  altText = "Hero Promotional Banner"
}) => {
  return (
    <section className="hero-banner">
      <div className="hero-image-container">
        <img 
          src={imageUrl} 
          alt={altText} 
          className="hero-image"
        />
      </div>
    </section>
  );
};

export default HeroBanner;