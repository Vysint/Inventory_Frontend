import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filteredProducts: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilteredProducts: (state, action) => {
      const { products, search } = action.payload;
      const tempProducts = products.filter(
        (product) =>
          product.name.toLowerCase().includes(search.toLowerCase()) ||
          product.category.toLowerCase().includes(search.toLowerCase())
      );
      return {
        ...state,
        filteredProducts: tempProducts,
      };
    },
  },
});

export const { setFilteredProducts } = filterSlice.actions;

export default filterSlice.reducer;
