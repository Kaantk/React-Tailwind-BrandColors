import { configureStore } from "@reduxjs/toolkit";
import brands from "./brands";

export const store = configureStore({
  reducer: {
    brands: brands,
  },
});
