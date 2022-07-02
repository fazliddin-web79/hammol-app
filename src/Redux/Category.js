import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  category: [],
};
export const getCategory = createAsyncThunk("getCategory", async () => {
  return await fetch("http://localhost:3001/api/category").then((res) =>
    res.json()
  );
});

export const categorySlice = createSlice({
  name: "category",
  initialState,
  extraReducers: {
    [getCategory.pending]: (state, action) => {},
    [getCategory.fulfilled]: (state, { payload }) => {
      state.category = payload;
    },
    [getCategory.rejected]: (state, action) => {},
  },
});

export default categorySlice.reducer;
