// src/store/productsSlice.js
import { createSlice } from '@reduxjs/toolkit';
import productsData from '../data/products.json';

const productsSlice = createSlice({
    name: 'products',
    initialState: productsData,
    reducers: {}
});

export default productsSlice.reducer;
