import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './components/cart/cartSlice'; 

export const store = configureStore({
  reducer: {
    cart: cartReducer, // Add your cart slice reducer here
  },
});

// Define types for Redux state and dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;