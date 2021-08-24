import {configureStore} from '@reduxjs/toolkit';
import CartSlice from './CartSlice';

const store = configureStore({
    reducer: {cart: CartSlice.reducer}
})

export default store;