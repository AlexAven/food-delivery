import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  entities: {},
  ids: [],
  currentItem: null,
  status: null,
};

export const getCatalog = createAsyncThunk('@@catalog/get-catalog', async () => {
  const res = await axios.get('http://localhost:3001/entities');
  const data = res.data;

  return data;
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
  extraReducers: (builder) => {
    builder
      .addCase(getCatalog.pending, (state) => {
        state.status = 'Loading...';
      })
      .addCase(getCatalog.rejected, (state) => {
        state.status = "Couldn't fetch any data";
      })
      .addCase(getCatalog.fulfilled, (state, { payload }) => {
        payload.forEach((item) => {
          const itemId = item.id;
          if (!state.entities[itemId]) {
            state.entities[itemId] = item;
            state.ids.push(itemId);
            state.error = null;
          }
        });
      });
  },
});

export default catalogSlice.reducer;
export const { createCatalog } = catalogSlice.actions;
