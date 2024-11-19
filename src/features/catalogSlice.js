import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  entities: {},
  ids: [],
};

export const getCatalog = createAsyncThunk('@@catalog/get-catalog', async (_, { dispatch }) => {
  const res = await axios.get('http://localhost:3001/entities');
  const data = res.data;
  dispatch(createCatalog(data));
});

const catalogSlice = createSlice({
  name: '@@catalog',
  initialState,
  reducers: {
    createCatalog: (state, { payload }) => {
      payload.forEach((item) => {
        const itemId = item.id;
        if (!state.entities[itemId]) {
          state.entities[itemId] = item;
          state.ids.push(itemId);
        }
      });
    },
  },
});

export default catalogSlice.reducer;
export const { createCatalog } = catalogSlice.actions;
