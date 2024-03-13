// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const cartItemsCount = useSelector(state => state.cart.items.length);

    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/cart">Cart ({cartItemsCount})</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
