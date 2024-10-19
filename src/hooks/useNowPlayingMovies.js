import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";

//Created a custom hook useNowPlayingMovies() for fetching nowplaying movies data from TMDB and updating/putting it the store
const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    //calling this API callling function in useEffect, bcz we want to call it once when the comp renders
    getNowPlayingMovies();
  }, []);

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=hi-IN&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json?.results);
    dispatch(addNowPlayingMovies(json?.results));
  };
};

export default useNowPlayingMovies;
