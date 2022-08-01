import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = 
    createSlice({
    name: "wishlist",
    initialState: {
    products1: [],
  },
  reducers: {
    addProduct1: (state, action) => {
      state.products1.push(action.payload);
    },
  },
});

export const { addProduct1 } = wishlistSlice.actions;
export default wishlistSlice.reducer;