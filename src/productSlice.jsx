// productSlice.js
import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
    },
    reducers: {},
});

export const selectProducts = (state) => state.products.products;

export default productSlice.selectProducts;
