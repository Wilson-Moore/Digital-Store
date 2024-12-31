import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favoritesItems: {},
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addToFavorites(state, action) {
      const { productId } = action.payload;
      state.favoritesItems[productId] = 1;
    },
    removeFromFavorites(state, action) {
      const { productId } = action.payload;
      state.favoritesItems[productId] = 0;
    },
    clearFavorites(state) {
      state.favoritesItems = {};
    },
  },
});


export const { addToFavorites, removeFromFavorites, clearFavorites } = favoriteSlice.actions;

export default favoriteSlice.reducer;
