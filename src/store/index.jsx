import { combineReducers, configureStore } from "@reduxjs/toolkit";
import products from "./modules/products";

const reducer = combineReducers({
  //i will list my modules
  products,
});

const index = configureStore({
  reducer,
});

export default index;
