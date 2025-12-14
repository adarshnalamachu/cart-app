import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice.js";
//create a store and give it reducers
const store = configureStore(
  { reducer: 
    { cart: cartSlice } });
export default store;
