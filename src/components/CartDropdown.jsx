import React, { useState, useEffect } from 'react';
import { useCart } from '../hooks/useCart';
import { useNavigate } from 'react-router-dom';
import ButtonSecondary from './ButtonSecondary';
import ButtonPrimary from './ButtonPrimary';
import '../styles/cart-dropdown.css';

const CartDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const { cart, removeFromCart, total } = useCart();
  const navigate = useNavigate();

  const toggleDropdown = () => setIsOpen(!isOpen);


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShow(currentScrollY < lastScrollY || currentScrollY < 10);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

 
  if (cart.length === 0) return null;

  return (
    <div className={`cart-dropdown ${show ? 'cart-dropdown--visible' : 'cart-dropdown--hidden'}`}>
      <button className="cart-dropdown__toggle" onClick={toggleDropdown}>
        🛒 ({cart.reduce((acc, item) => acc + item.cantidad, 0)})
      </button>

      {isOpen && (
        <div className="cart-dropdown__panel">
          <h4 className="cart-dropdown__title">Carrito</h4>
          <ul className="cart-dropdown__list">
            {cart.map((item) => (
              <li key={item.id} className="cart-dropdown__item">
                <span>
                  {item.title} <strong>x{item.cantidad}</strong>
                </span>
                <ButtonSecondary onClick={() => removeFromCart(item.id)}>
                  Eliminar
                </ButtonSecondary>
              </li>
            ))}
          </ul>
          <p className="cart-dropdown__total">Total: ${total}</p>
          <ButtonPrimary
            onClick={() => {
              setIsOpen(false);
              navigate('/checkout');
            }}
          >
            Pagar
          </ButtonPrimary>
        </div>
      )}
    </div>
  );
};

export default CartDropdown;


