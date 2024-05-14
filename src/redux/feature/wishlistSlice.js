import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    wishlist: [],
};

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addToWishList: (state, action) => {
            const itemIndex = state.wishlist.findIndex((item) => item.id === action.payload.id);

            if (itemIndex >= 0) {
                state.wishlist[itemIndex].quantity += 1;
            } else {
                const temp = { ...action.payload, quantity: 1 };
                state.wishlist.push(temp);
            }
        },
        removeAllWishlist: (state, action) => {
            state.wishlist = [];
        },
    },
});

export const { addToWishList, removeAllWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
