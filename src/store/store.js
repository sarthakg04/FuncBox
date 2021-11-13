import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../auth/authslice";
export default configureStore({
  reducer: {
    auth: authReducer,
  },
  devTools: process.env.NODE_ENV === "development",
});
