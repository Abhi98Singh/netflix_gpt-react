import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      //update the state
      state.nowPlayingMovies = action.payload;
    },
  },
});

export const { addNowPlayingMovies } = moviesSlice.actions;

export default moviesSlice;
