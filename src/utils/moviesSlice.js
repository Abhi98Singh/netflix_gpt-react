import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    trendingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      //update the state
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPopularMovies: (state, action) => {
      //update the state
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      //update the state
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      //update the state
      state.upcomingMovies = action.payload;
    },
    addTrendingMovies: (state, action) => {
      //update the state
      state.trendingMovies = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addTrendingMovies,
} = moviesSlice.actions;

export default moviesSlice;
