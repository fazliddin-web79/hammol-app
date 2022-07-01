import { configureStore } from "@reduxjs/toolkit";
import category from "./Category";

export const store = configureStore({
  reducer: {
    category,
  },
});
