import { createSlice } from "@reduxjs/toolkit";

const initialAuthstate = { isAuthenticated: false };
const authSlice = createSlice({
  name: "auth",
  initialState: { ...initialAuthstate },
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});
export default authSlice;
