// Navbar.js
import React from 'react';
import { useSelector } from 'react-redux';
import { selectCartItems } from './cartSlice';

function Navbar() {
    const cartItems = useSelector(selectCartItems);

    return (
        <nav>
            <div>Logo</div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart ({cartItems.length})</li>
            </ul>
        </nav>
    );
}

export default Navbar;
