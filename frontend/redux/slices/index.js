import { combineReducers } from 'redux';
import productReducer from './productSlice';
import cartReducer from './cartSlice';
import favoritesReducer from './favoritesSlice';

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  favorites: favoritesReducer
});

export default rootReducer;