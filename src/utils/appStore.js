import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

const appStore = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export default appStore;
