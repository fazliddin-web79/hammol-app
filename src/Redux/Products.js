import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};
export const getProducts = createAsyncThunk("getProducts", async () => {
  return await fetch("http://localhost:3001/api/product").then((res) =>
    res.json()
  );
});

export const categorySlice = createSlice({
  name: "products",
  initialState,
  extraReducers: {
    [getProducts.pending]: (state, action) => {},
    [getProducts.fulfilled]: (state, { payload }) => {
      state.products = payload;
    },
    [getProducts.rejected]: (state, action) => {},
  },
});

export default categorySlice.reducer;
