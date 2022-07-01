import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = [];
export const getCategory = createAsyncThunk("getCategory", () => {
  return fetch("http://localhost:3001/api/category").then((res) => res.json());
});

export const categorySlice = createSlice({
  name: "category",
  initialState,
  extraReducers: {
    [getCategory.pending]: (state, action) => {},
    [getCategory.fulfilled]: (state, { payload }) => {
      state = payload;
    },
    [getCategory.rejected]: (state, action) => {},
  },
});

export default categorySlice.reducer;
