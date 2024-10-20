import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrendingMovies } from "../utils/moviesSlice";

//Created a custom hook useTrendingMovies() for fetching Popular movies data from TMDB and updating/putting it the store
const useTrendingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day",
      API_OPTIONS
    );

    const json = await data.json();
    console.log(json.results);
    dispatch(addTrendingMovies(json.results));
  };
};

export default useTrendingMovies;
