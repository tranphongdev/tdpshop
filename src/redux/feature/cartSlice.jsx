import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    carts: [],
};

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const IteamIndex = state.carts.findIndex((iteam) => iteam.id === action.payload.id);

            if (IteamIndex >= 0) {
                state.carts[IteamIndex].qnty += 1;
            } else {
                const temp = { ...action.payload, qnty: 1 };
                state.carts = [...state.carts, temp];
            }
        },
        removeCart: (state, action) => {
            state.carts = state.carts
                .map((item) => (item.id === action.payload ? { ...item, qnty: item.qnty - 1 } : item))
                .filter((item) => item.qnty > 0);
        },
        removeItemCart: (state, action) => {
            const newCart = state.carts.filter((item) => item.id !== action.payload);
            return {
                ...state.carts,
                carts: newCart,
            };
        },
        removeAllCart: (state, action) => {
            state.carts = [];
        },
    },
});

export const { addToCart, removeCart, removeItemCart, removeAllCart } = cartSlice.actions;

export default cartSlice.reducer;
