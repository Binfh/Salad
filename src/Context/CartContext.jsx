import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const resetCart = () => {
    setCartItems([]);
  };

  const addToCart = (salad) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === salad.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === salad.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...salad, quantity: 1 }];
    });
  };

  const reduceFromCart = (salad) => {
    setCartItems((prev) => 
      prev.map((item) =>
        item.id === salad.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ).filter((item) => item.quantity > 0)
    );
  };
  

  const removeFromCart = (salad) => {
    setCartItems(prev => prev.filter(item => item.id !== salad));
  };
  

  const updateQuantity = (saladId, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(prev =>
      prev.map(item =>
        item.id === saladId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        reduceFromCart,
        updateQuantity,
        cartTotal,
        cartCount,
        resetCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};