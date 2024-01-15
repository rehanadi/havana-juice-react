import { configureStore } from '@reduxjs/toolkit'
import productsReducer from '../features/products/productsSlice'
import packagesReducer from '../features/packages/packagesSlice'
import testimonialsReducer from '../features/testimonials/testimonialsSlice'

export const store = configureStore({
  reducer: {
    products: productsReducer,
    packages: packagesReducer,
    testimonials: testimonialsReducer
  }
})
