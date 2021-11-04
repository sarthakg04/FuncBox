import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    userid: "",
    username: "",
    isAuthenticated: false,
    token: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.username = action.payload.username;
      state.userid = action.payload.userid;
      // state.token = action.payload.token;
    },
    setAuth: (state, action) => {
      state.isAuthenticated = action.payload.isAuthenticated;
    },
  },
});

export const { setAuth, setUser } = authSlice.actions;

export default authSlice.reducer;
