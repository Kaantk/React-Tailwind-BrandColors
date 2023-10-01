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
    _removeBrand: (state, action) => {
      const indexToRemove = state.selectedBrands.findIndex(
        (brand) => brand.slug === action.payload.slug
      );
      if (indexToRemove !== -1) {
        state.selectedBrands.splice(indexToRemove, 1);
      }
    },
    _clearBrand: (state) => {
      state.selectedBrands = [];
    },
  },
});

export const { _addBrand, _removeBrand, _clearBrand } = brands.actions;
export default brands.reducer;
