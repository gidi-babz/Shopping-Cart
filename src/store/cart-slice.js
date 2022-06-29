import { createSlice } from '@reduxjs/toolkit';

const initialCartState = { showCart: false };

const showCartSlice = createSlice({
	name: 'cart',
	initialState: initialCartState,
	reducers: {
		toggleCart(state) {
			state.showCart = !state.showCart;
		},
	},
});
export const cartSliceActions = showCartSlice.actions;

export default showCartSlice.reducer;
