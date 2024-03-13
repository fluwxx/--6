// src/components/Cart.js
import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
    const cartItems = useSelector(state => state.cart.items);

    return (
        <div>
            <h2>Cart</h2>
            {cartItems.map(item => (
                <div key={item._id}>
                    <h3>{item.name}</h3>
                    <p>Price: {item.price}</p>
                </div>
            ))}
        </div>
    );
};

export default Cart;
