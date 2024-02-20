import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

import counterSlice from "./counterSlice";
import authSlice from "./authSlice";

// const counterReducer = (state, action) => {
//   if (action.type === "PLUS") {
//     let currState = { ...state };
//     currState.counter += 1;
//     return currState;
//   } else if (action.type === "MINUS") {
//     let currState = { ...state };
//     currState.counter -= 1;
//     return currState;
//   }
//   return state;
// };

const counterStore = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const CounterActions = counterSlice.actions;
export const authActions = authSlice.actions;

// function counterLogger() {
//   const currCount = counterStore.getState();
//   console.log(currCount);
// }

// counterStore.subscribe(counterLogger);

export default counterStore;
