import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import products from "./modules/products";
import productsSlice from "./modules/products";
import loaderSlice from "./modules/loaderSlice";
import cartSlice from "./modules/cartSlice";

const reducer = combineReducers({
  //i will list my modules
  products: productsSlice,
  loader: loaderSlice,
  cart: cartSlice,
});

const index = configureStore({
  reducer,
});

export default index;
