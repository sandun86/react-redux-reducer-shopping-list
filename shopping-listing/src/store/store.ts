import { configureStore } from '@reduxjs/toolkit'
import productSlice from './productSlice'

export const store = configureStore({
  reducer: {
    products: productSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

