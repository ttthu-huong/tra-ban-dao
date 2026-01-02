import { useState, useEffect } from 'react';

const useCart = () => {
    const [cart, setCart] = useState([]);

  // Load from localStorage
    useEffect(() => {
    const saved = localStorage.getItem('cart');
    if (saved) setCart(JSON.parse(saved));
    }, []);

  // Save to localStorage
    useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
      setCart(prev => {
        const exists = prev.find(item => item.id === product.id);
        if (exists) {
          return prev.map(item =>
            item.id === product.id ? { ...item, qty: item.qty + 1 } : item
          );
        }
        return [...prev, { ...product, qty: 1 }];
      });
      // Xóa alert ở đây để dùng modal checkout
    };

    const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.id !== productId));
    };

    const clearCart = () => {
    setCart([]);
    };

    const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

    return { cart, addToCart, removeFromCart, clearCart, cartCount };
};

export default useCart;