import { createSlice } from "@reduxjs/toolkit";

//slice

const listingsSlice = createSlice({
  name: "listings",
  initialState: {
    products: [],
    total: 0,
  },
  reducers: {
    SET_PRODUCTS: (state, action) => {
      state.products = action.payload;
    },
  },
});

export default listingsSlice.reducer;

//actions

const { SET_PRODUCTS } = listingsSlice.actions;

export const fetchProducts = () => async (dispatch) => {
  try {
    const response = await fetch("https://api.noroff.dev/api/v1/online-shop");
    const data = await response.json();
    console.log(data);
    dispatch(SET_PRODUCTS(data));
  } catch (e) {
    return console.log(e);
  }
};
