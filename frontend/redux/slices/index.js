import { combineReducers } from 'redux';
import productReducer from './productSlice';
import favoritesReducer from './favoritesSlice';

const rootReducer = combineReducers({
  products: productReducer,
  favorites: favoritesReducer,
});

export default rootReducer;
