import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import useReducer from "../reducers/User/userSlice";

export default configureStore({
  reducer: {
    user: useReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});