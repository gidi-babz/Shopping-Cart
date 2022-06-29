import { configureStore } from '@reduxjs/toolkit';

import showCartReducer from './cart-slice';

const store = configureStore({
	reducer: { showCart: showCartReducer },
});

export default store;
