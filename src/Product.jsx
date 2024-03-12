// Product.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './cartSlice';

function Product({ product }) {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    return (
        <div className="product">
            <img src={product.picture} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button onClick={handleAddToCart}>Buy</button>
        </div>
    );
}

export default Product;
