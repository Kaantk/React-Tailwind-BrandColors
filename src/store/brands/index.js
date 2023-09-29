import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedBrands: [],
};

export const brands = createSlice({
  name: "brands",
  initialState,
  reducers: {
    _addBrand: (state, action) => {
      state.selectedBrands.push(action.payload);
    },
    _removeBrand: (state) => {
      state.selectedBrands = [];
    },
  },
});

export const { _addBrand, _removeBrand } = brands.actions;
export default brands.reducer;
