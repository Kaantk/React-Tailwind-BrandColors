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
      // Gönderilen objenin indexini bul
      const indexToRemove = state.selectedBrands.findIndex(
        (brand) => brand.slug === action.payload.slug
      );

      // Eğer index bulunduysa, öğeyi diziden kaldır
      if (indexToRemove !== -1) {
        state.selectedBrands.splice(indexToRemove, 1);
      }
    },
  },
});

export const { _addBrand, _removeBrand } = brands.actions;
export default brands.reducer;
