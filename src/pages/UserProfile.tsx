import { useState } from 'react';
import Navbar from '../components/layout/files/Navbar';
import Footer from '../components/layout/files/Footer';
import './css/UserProfile.css';

const UserProfilePage = () => {
  const [user] = useState({
    name: 'MD. Hridoy',
    email: 'hridoy@example.com',
    phone: '+880 1700-000000',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80'
  });

  const [addresses] = useState([
    {
      id: '1',
      title: 'Home Address',
      fullAddress: 'House 12, Road 7, Sector 7, Uttara, Dhaka, Bangladesh',
      isDefault: true
    },
    {
      id: '2',
      title: 'Office Address',
      fullAddress: 'Banani Road No. 12-19, Dhaka North, Dhaka, Bangladesh',
      isDefault: false
    }
  ]);

  return (
    <>
    <Navbar />
    <div className="profile-page-container">
      <div className="profile-grid">
        
        {/* Left Side: Profile & Navigation */}
        <div className="profile-sidebar">
          <div className="avatar-container">
            <img src={user.avatar} alt={user.name} className="profile-avatar" />
            <button className="edit-avatar-btn" title="Edit Photo">📷</button>
          </div>

          <h2 className="user-name">{user.name}</h2>

          <div className="user-info-list">
            <div className="info-item">
              <span className="info-icon">✉</span>
              <span>{user.email}</span>
            </div>
            <div className="info-item">
              <span className="info-icon">📞</span>
              <span>{user.phone}</span>
            </div>
          </div>

          <div className="sidebar-actions">
            <button className="sidebar-btn primary">
              <span>📦</span> ORDER HISTORY
            </button>
            <button className="sidebar-btn">
              <span>❤️</span> WISHLIST
            </button>
            <button className="sidebar-btn">
              <span>❤️</span> CART ITEMS
            </button>
            <button className="sidebar-btn">
              <span>❤️</span> MY OFFERS
            </button>
            <button className="sidebar-btn">
              <span>❤️</span> NEW ARRIVALS
            </button>
            <button className="sidebar-btn">
              <span>❤️</span> TRACL ORDER
            </button>
            <button className="sidebar-btn">
              <span>⚙️</span> Account Settings
            </button>
          </div>
        </div>

        {/* Right Side: Saved Addresses */}
        <div className="profile-content">
          <div className="content-header">
            <h3 className="content-title">Saved Addresses</h3>
            <button className="add-address-btn">+ Add New Address</button>
          </div>

          <div className="address-list">
            {addresses.map((addr) => (
              <div 
                key={addr.id} 
                className={`address-card ${addr.isDefault ? 'default' : ''}`}
              >
                {addr.isDefault && (
                  <span className="address-badge">Default</span>
                )}
                <h4 className="address-type">{addr.title}</h4>
                <p className="address-text">{addr.fullAddress}</p>
                <div className="address-actions">
                  <button className="action-link">Edit</button>
                  {!addr.isDefault && (
                    <button className="action-link delete">Delete</button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
    <Footer/>
    </>
  );
};

export default UserProfilePage;