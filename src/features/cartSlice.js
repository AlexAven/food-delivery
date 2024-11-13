import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  entities: {},
  ids: [],
  totalItems: undefined,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: '@@cart',
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const itemId = payload.id;

      if (state.entities[itemId]) {
        state.entities[itemId].qty += 1;
      } else {
        state.entities[itemId] = payload;
        state.entities[itemId].qty = 1;
        state.ids.push(itemId);
      }

      state.totalItems += 1;
      state.totalPrice += payload.price * payload.qty; // считает направильно - переделать
    },
  },
});

export default cartSlice.reducer;
export const { addToCart } = cartSlice.actions;
