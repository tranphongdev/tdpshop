import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
};

export const productSlice = createSlice({
    name: 'productSlice',
    initialState,
    reducers: {
        setProductFlashSale: (state, action) => {
            state.products = action.payload;
        },
    },
});

export const { setProductFlashSale } = productSlice.actions;
export default productSlice.reducer;
