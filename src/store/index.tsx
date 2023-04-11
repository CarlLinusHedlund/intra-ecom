import { combineReducers, configureStore } from "@reduxjs/toolkit";
import listings from "./modules/listings";


const reducer = combineReducers({
  //i will list my modules
  listings
})


const index = configureStore({
  reducer, 
})

export default index;
