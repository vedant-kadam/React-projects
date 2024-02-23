import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: { cartItems: [], totalQty: 0, changed: false },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      state.totalQty++;
      state.changed = true;

      if (!existingItem) {
        let newObj = {
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        };
        state.cartItems.push(newObj);
      } else {
        existingItem.quantity += 1;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload.id;
      const exisitingItem = state.cartItems.find((item) => item.id === id);
      state.totalQty--;
      state.changed = true;

      if (exisitingItem.quantity === 1) {
        //pop out
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
      } else {
        exisitingItem.quantity -= 1;
        exisitingItem.totalPrice -= exisitingItem.price;
      }
    },
    resplaceCart(state, action) {
      state.cartItems = action.payload.cartItems;
      state.totalQty = action.payload.totalQty;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
