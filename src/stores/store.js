import {configureStore} from '@reduxjs/toolkit';
import CartSlice from './CartSlice';
import ProductSlice from './ProductSlice';

const store = configureStore({
    reducer: {cart: CartSlice.reducer, product: ProductSlice.reducer}
})

export default store;