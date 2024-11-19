import { configureStore } from '@reduxjs/toolkit';

import cartSlice from '../features/cartSlice';
import catalogSlice from '../features/catalogSlice';

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    catalog: catalogSlice,
  },
  devTools: true,
});
