import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: 'cart',
    initialState: 
    {
        items: [],
        totalQuantity: 0,
        totalPrice: 0,
    },
    reducers:
    {
        replaceCart(state, action)
        {
            state.totalQuantity=action.payload.totalQuantity;
            state.items=action.payload.items;
            state.totalPrice=action.payload.totalPrice;
        },

        addItem(state, action) {
            const newItem = action.payload;
            console.log(newItem.id)
            const existingItem = state.items.find(item => (item.id === newItem.id));
            state.totalQuantity++;
            state.totalPrice = state.totalPrice + newItem.price;
            if(!existingItem)
            {
                state.items.push({
                    id: newItem.id, 
                    price: newItem.price, 
                    quantity: 1, 
                    totalPrice: newItem.price,
                    name: newItem.name
                });
            }
            else
            {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice+newItem.price;

            }
        },
        removeItem(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id.id);
            state.totalQuantity--;
            state.totalPrice = state.totalPrice - id.price;
            if(existingItem.quantity===1)
            {
                existingItem.quantity=0;
                state.items = state.items.filter(item => item.id!== id.id);
            }
            else
            {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice-existingItem.price;
            }
        }
    }
})

export const CartActions = CartSlice.actions;

export default CartSlice;