import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const initialState = { carts: [] }

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.carts.push(action.payload)
    },
    removeFromCart: (state, action) => {
      state.carts = state.carts.filter(item => item.id !== action.payload.id)
    },
    clearCart: (state) => {
      state.carts = []
    }
  }
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions
export default cartSlice.reducer
