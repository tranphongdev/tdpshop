import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { productSlice } from './feature/productSlice';
import cartSlice from './feature/cartSlice';
import authReducer from './feature/userSlice';
import wishlistReducer from './feature/wishlistSlice';

const reducer = combineReducers({
    products: productSlice.reducer,
    allCart: cartSlice,
    wishlist: wishlistReducer,
    auth: authReducer,
});

const store = configureStore({
    reducer,
});

export default store;
