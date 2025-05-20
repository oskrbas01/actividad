import React from 'react';
import { useCart } from '../hooks/useCart';
import { useNavigate } from 'react-router-dom';
import CheckoutItem from '../components/CheckoutItem';
import ButtonPrimary from '../components/ButtonPrimary';
import '../styles/checkout.css';

const Checkout = () => {
  const { cart, clearCart, total } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    alert('Pedido realizado con éxito');
    clearCart();
    navigate('/home');
  };

  return (
    <div className="checkout">
      <div className="checkout__content">
        <h2 className="checkout__title">Resumen de compra</h2>

        {cart.length === 0 ? (
          <p className="checkout__empty">No hay libros en el carrito.</p>
        ) : (
          <>
            <table className="checkout__table">
              <thead>
                <tr>
                  <th>Título</th>
                  <th>Cantidad</th>
                  <th>Precio</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <CheckoutItem key={item.id} item={item} />
                ))}
              </tbody>
            </table>

            <p className="checkout__total">Total: ${total}</p>
            <ButtonPrimary onClick={handleCheckout}>
              Confirmar pago
            </ButtonPrimary>
          </>
        )}
      </div>
    </div>
  );
};

export default Checkout;
