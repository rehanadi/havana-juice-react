import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { PRODUCTS_URL, BEST_SELLERS_URL, CATEGORIES_URL } from '../../constants';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const res = await axios.get(PRODUCTS_URL)
  const products = res.data || []
  return products
})

export const fetchProductBySlug = createAsyncThunk('products/fetchProductBySlug', async (slug) => {
  const res = await axios.get(PRODUCTS_URL)
  const products = res.data || []
  const product = products.find(product => product.slug === slug) || {}
  return product
})

export const fetchBestSellers = createAsyncThunk('products/fetchBestSellers', async () => {
  const res = await axios.get(BEST_SELLERS_URL)
  const bestSellers = res.data || []
  return bestSellers
})

export const fetchCategories = createAsyncThunk('products/fetchCategories', async () => {
  const res = await axios.get(CATEGORIES_URL)
  const categories = res.data || []
  return categories
})

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    productsStatus: 'idle',
    product: {},
    productStatus: 'idle',
    bestSellers: [],
    bestSellersStatus: 'idle',
    categories: [],
    categoriesStatus: 'idle'
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.productsStatus = 'pending'
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.productsStatus = 'success'
        state.products = action.payload
      })
      .addCase(fetchProductBySlug.pending, (state, action) => {
        state.productStatus = 'pending'
      })
      .addCase(fetchProductBySlug.fulfilled, (state, action) => {
        state.productStatus = 'success'
        state.product = action.payload
      })
      .addCase(fetchBestSellers.pending, (state, action) => {
        state.bestSellersStatus = 'pending'
      })
      .addCase(fetchBestSellers.fulfilled, (state, action) => {
        state.bestSellersStatus = 'success'
        state.bestSellers = action.payload
      })
      .addCase(fetchCategories.pending, (state, action) => {
        state.categoriesStatus = 'pending'
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categoriesStatus = 'success'
        state.categories = action.payload
      })
  }
})

export default productsSlice.reducer
