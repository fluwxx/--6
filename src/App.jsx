// App.js
import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from './Navbar';
import Product from './Product';
import { selectProducts } from './productSlice';

function App() {
    const products = useSelector(selectProducts);

    return (
        <div>
            <Navbar />
            <div className="products">
                {products.map(product => (
                    <Product key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default App;
