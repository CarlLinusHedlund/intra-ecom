import { createSlice } from "@reduxjs/toolkit";
import { setLoadingState } from "./loaderSlice";

//slice

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    singleProduct: null,
  },
  reducers: {
    SET_PRODUCTS: (state, action) => {
      state.products = action.payload;
    },
    SET_SINGLE_PRODUCT: (state, action) => {
      state.singleProduct = action.payload;
    },
  },
});

export default productsSlice.reducer;

//actions

const { SET_PRODUCTS } = productsSlice.actions;
const { SET_SINGLE_PRODUCT } = productsSlice.actions;

export const fetchProducts = () => async (dispatch) => {
  dispatch(setLoadingState(true));
  try {
    const response = await fetch("https://api.noroff.dev/api/v1/online-shop");
    const data = await response.json();
    console.log(data);
    dispatch(SET_PRODUCTS(data));
    dispatch(setLoadingState(false));
  } catch (e) {
    return console.log(e);
  }
};

export const fetchSingleProduct = (id) => async (dispatch) => {
  dispatch(setLoadingState(true));
  try {
    const productResponse = await fetch(
      `https://api.noroff.dev/api/v1/online-shop/${id}`
    );
    const productData = await productResponse.json();
    dispatch(SET_SINGLE_PRODUCT(productData));
    dispatch(setLoadingState(false));
  } catch (e) {
    return console.log(e);
  }
};
