import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import witchModalReducer from "./features/witchModalSlice";
export const store = configureStore({
  reducer: {
    users: userReducer,
    witchModal: witchModalReducer,
  },
});
