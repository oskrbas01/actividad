import React from 'react';
import { useCart } from '../hooks/useCart';
import { useNavigate } from 'react-router-dom';
import ButtonPrimary from '../components/ButtonPrimary';
import ButtonSecondary from '../components/ButtonSecondary';
import '../styles/cart-page.css';

const CartPage = () => {
  const { cart, removeFromCart, total } = useCart();
  const navigate = useNavigate();


 return (
    <div className="cart-page">
      <div className="cart-page__content">
        <h2 className="cart-page__title">Tu Carrito</h2>

        {cart.length === 0 ? (
          <p className="cart-page__empty">El carrito está vacío.</p>
        ) : (
          <>
            <ul className="cart-page__list">
              {cart.map((item) => (
                <li key={item.id} className="cart-page__item">
                  <span className="cart-page__book">
                    {item.title} <strong>x{item.cantidad}</strong>
                  </span>
                  <span className="cart-page__price">
                    ${item.price * item.cantidad}
                  </span>
                  <ButtonSecondary onClick={() => removeFromCart(item.id)}>
                    Eliminar
                  </ButtonSecondary>
                </li>
              ))}
            </ul>
            <p className="cart-page__total">Total: ${total}</p>
            <ButtonPrimary onClick={() => navigate('/checkout')}>
              Proceder al pago
            </ButtonPrimary>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
