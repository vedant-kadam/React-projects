import { createSlice } from "@reduxjs/toolkit";

const uiSlicer = createSlice({
  name: "uiSlice",
  initialState: { showCart: true, notification: null },
  reducers: {
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
    showNotifiaction(state, action) {
      state.notification = {
        state: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiReducer = uiSlicer.reducer;
export const uiActions = uiSlicer.actions;
