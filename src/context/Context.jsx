import React, { createContext, useState } from 'react'

const store = createContext();


export default function Context({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        const existingItem = cart.find((item) => item.id === product.id);
        if (existingItem) {
            const updatedCart = cart.map((item) =>
                item.id === existingItem.id
                    ? { ...item, qty: item.qty + 1 }
                    : item
            );
            setCart(updatedCart);
        } else {
            setCart([...cart, product]);
        }
    };
    const qtyHandler = (flag, id) => {
        const existingItem = cart.find((item) => item.id === id);
        if (existingItem) {
            let updatedCart;
            if (flag === "inc") {
                updatedCart = cart.map((item) =>
                    item.id === id ? { ...item, qty: item.qty + 1 } : item
                );
            } else if (flag === "dec" && existingItem.qty > 1) {
                
                updatedCart = cart.map((item) =>
                    item.id === id ? { ...item, qty: item.qty - 1 } : item
                );
            } else {
                updatedCart = cart; 
            }
            setCart(updatedCart);
        }
    };

    const removeItem = (id) => {
        const filteredCart = cart.filter((item) => item.id !== id);
        setCart(filteredCart);
    };
    return (
        <store.Provider value={{ cart, addToCart, qtyHandler,removeItem }}>
            {children}
        </store.Provider>
    )
}

export { store } // named type export