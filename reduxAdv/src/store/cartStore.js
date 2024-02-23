import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cartSlice";
import { uiReducer } from "./uiSlice";

const cartStore = configureStore({
  reducer: { cart: cartReducer, ui: uiReducer },
});
export default cartStore;
