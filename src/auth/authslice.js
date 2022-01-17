import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    userid: "",
    username: "",
    isAuthenticated: false,
    token: null,
    avatar: "",
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
    setToken : (state , action)=>{
      state.token = action.payload.token
    },
    setProfile: (state, action) => {
      state.avatar = action.payload.avatar;
    }
  },
});

export const { setAuth, setUser, setToken, setProfile } = authSlice.actions;

export default authSlice.reducer;
