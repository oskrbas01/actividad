import React from 'react';
import { useCart } from '../hooks/useCart';
import '../styles/checkout-item.css';

const CheckoutItem = ({ item }) => {
  const { addToCart, removeFromCart } = useCart();
  const totalItemPrice = (item.price * item.cantidad).toFixed(2);

  return (
    <tr className="checkout__item">
      <td className="checkout__book">{item.title}</td>

      <td className="checkout__cantidad">
        
        <span className="cantidad__valor">{item.cantidad}</span>
        <button onClick={() => removeFromCart(item.id)}>-</button>
        <button onClick={() => addToCart(item)}>+</button>
      </td>

      <td className="checkout__price">${totalItemPrice}</td>
    </tr>
  );
};

export default CheckoutItem;

