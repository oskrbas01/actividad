import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (book) => {
    setCart((prevCart) => {
      const existing = prevCart.find(item => item.id === book.id);
      if (existing) {
        return prevCart.map(item =>
          item.id === book.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...book, cantidad: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) =>
      prevCart.flatMap(item => {
        if (item.id !== id) return item;
        if (item.cantidad > 1) return { ...item, cantidad: item.cantidad - 1 };
        return [];
      })
    );
  };

  const clearCart = () => {
    setCart([]);
  };

   const total = cart
    .reduce((sum, item) => sum + item.price * item.cantidad, 0)
    .toFixed(2);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, total }}>
      {children}
    </CartContext.Provider>
  );
};


export const useCart = () => useContext(CartContext);
