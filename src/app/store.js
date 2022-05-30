import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counterSlice';
import productReducer from '../features/counterSlice';

export const store = configureStore({
  reducer: {
      products: productReducer,
  },
});

