import { createSlice } from '@reduxjs/toolkit';

const storedMemory = localStorage.getItem('cart');
const initialState = storedMemory
  ? JSON.parse(storedMemory)
  : {
      entities: {},
      ids: [],
      totalItems: 0,
      totalPrice: 0,
      totalItemPrice: {},
    };

const calculateTotals = (state) => {
  const totals = state.ids.reduce(
    (acc, id) => {
      const item = state.entities[id];

      acc.totalItems += item.qty;
      acc.totalPrice += item.qty * item.price;
      acc.totalItemPrice = { ...acc.totalItemPrice, [item.id]: item.qty * item.price };

      return acc;
    },
    { totalItems: 0, totalPrice: 0, totalItemPrice: {} },
  );

  state.totalItems = totals.totalItems;
  state.totalPrice = totals.totalPrice;
  state.totalItemPrice = totals.totalItemPrice;
};

const cartSlice = createSlice({
  name: '@@cart',
  initialState,
  reducers: {
    getCart: (state, { payload }) => {
      state = payload;
      calculateTotals(state);
    },

    addToCart: (state, { payload }) => {
      const itemId = payload.id;
      console.log('itemId', itemId);
      if (state.entities[itemId]) {
        state.entities[itemId].qty += 1;
      } else {
        state.entities[itemId] = { ...payload, qty: 1 };
        state.ids.push(itemId);
      }
      calculateTotals(state);
    },

    incrementItem: (state, { payload }) => {
      const itemId = payload.id;
      state.entities[itemId].qty += 1;
      calculateTotals(state);
    },

    decrementItem: (state, { payload }) => {
      const itemId = payload.id;
      if (state.entities[itemId].qty - 1 === 0) {
        delete state.entities[itemId];
        state.ids = state.ids.filter((item) => item !== itemId);
      } else {
        state.entities[itemId].qty -= 1;
      }
      calculateTotals(state);
    },

    removeItem: (state, { payload }) => {
      const itemId = payload.id;
      delete state.entities[itemId];
      state.ids = state.ids.filter((item) => item !== itemId);
      calculateTotals(state);
    },
  },
});

export default cartSlice.reducer;
export const { getCart, addToCart, incrementItem, decrementItem, removeItem } = cartSlice.actions;
