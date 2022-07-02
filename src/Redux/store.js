import { configureStore } from "@reduxjs/toolkit";
import category from "./Category";
import products from "./Products";

export const store = configureStore({
  reducer: {
    category,
    products,
  },
});
