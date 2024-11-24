import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../features/cartSlice';
import catalogSlice from '../features/catalogSlice';
import localStorageMiddleware from '../middleware/localStorageMiddleware';

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    catalog: catalogSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
  devTools: true,
});

export default store;
