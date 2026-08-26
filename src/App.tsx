// App.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import CartPage from './pages/Cart';
import UserProfilePage from './pages/UserProfile';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/profile" element={<UserProfilePage />} />
    </Routes>
  );
}

export default App;