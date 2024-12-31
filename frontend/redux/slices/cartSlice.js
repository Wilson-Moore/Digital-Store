import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: {},
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const { productId } = action.payload;
      if (state.cartItems[productId]) {
        state.cartItems[productId] += 1;
      } else {
        state.cartItems[productId] = 1;
      }
    },
    removeFromCart(state, action) {
      const { productId } = action.payload;
      if (state.cartItems[productId] > 1) {
        state.cartItems[productId] -= 1;
      } else {
        delete state.cartItems[productId];
      }
    },
    clearCart(state) {
      state.cartItems = {};
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
