import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    productsInCart: [],
    totalProductsInCart: 0,
  },
  reducers: {
    ADD_PRODUCT_TO_CART: (state, action) => {
      console.log("Action", action);
      state.productsInCart = [...state.productsInCart, action.payload];
      state.totalProductsInCart = state.productsInCart.length;
    },
    REMOVE_PRODUCT: (state, action) => {
      state.productsInCart = state.productsInCart.filter(
        (product) => product.id !== action.payload
      );
      state.totalProductsInCart = state.productsInCart.length;
    },
  },
});

export default cartSlice.reducer;

const { ADD_PRODUCT_TO_CART } = cartSlice.actions;
const { REMOVE_PRODUCT } = cartSlice.actions;

export const addSingleProductToCart = (productData) => (dispatch) => {
  console.log("productData", productData);
  dispatch(ADD_PRODUCT_TO_CART(productData));
};

export const removeProduct = (productId) => (dispatch) => {
  console.log("remove", productId);
  dispatch(REMOVE_PRODUCT(productId));
};
