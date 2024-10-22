import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moviesSlice from "./moviesSlice";
import gptSlice from "./gptSlice";
import configSlice from "./configSlice";

const appStore = configureStore({
  reducer: {
    user: userSlice.reducer,
    movies: moviesSlice.reducer,
    gpt: gptSlice.reducer,
    config: configSlice.reducer,
  },
});

export default appStore;
