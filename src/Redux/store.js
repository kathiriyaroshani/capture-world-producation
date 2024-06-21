import { configureStore } from '@reduxjs/toolkit'
import CategorySlice from './categorySlice'
import productSlice from './productSlice'

export default configureStore({
  reducer: {
    category: CategorySlice,
    product: productSlice,
  },
})
