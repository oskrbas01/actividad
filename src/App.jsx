import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Landing from "./views/Landing";
import Home from "./views/Home";
import BookDetail from "./views/BookDetail";
import { CartProvider } from './hooks/useCart';
import CartPage from "./views/CartPage";
import Checkout from './views/Checkout';
import Blog from './views/Blog';
import BlogDetail from './views/BlogDetail';

function AppRelatos(){
  return (
    <div> 
        <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/book/:id" element={<BookDetail />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
      <Footer />
    </div>
  
   
  );
}

function App() {
  return (
    <CartProvider>
      <AppRelatos />
    </CartProvider>
  );
}

export default App;









