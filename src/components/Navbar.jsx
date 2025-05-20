import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo">Relatos de Papel</Link>
      <div className="navbar__links">
        <Link to="/" className="navbar__link">Inicio</Link>
        <Link to="/home" className="navbar__link">Catálogo</Link>
        <Link to="/cart" className="navbar__link">Carrito</Link>
        <Link to="/checkout" className="navbar__link">Checkout</Link>
        <Link to="/blog" className="navbar__link">Blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;
