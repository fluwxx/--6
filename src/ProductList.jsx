// src/components/ProductList.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './cartSlice';

const ProductList = () => {
    const dispatch = useDispatch();
    const productList = useSelector(state => state.products);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    return (
        <div>
            <h2>Products</h2>
            {productList.map(product => (
                <div key={product._id}>
                    <h3>{product.name}</h3>
                    <p>Price: {product.price}</p>
                    <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
