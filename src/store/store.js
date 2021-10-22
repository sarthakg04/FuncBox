import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../auth/authslice";
export default configureStore({
  reducer: {
    auth: authReducer,
  },
});
