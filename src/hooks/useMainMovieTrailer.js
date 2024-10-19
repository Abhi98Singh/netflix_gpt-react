/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

//Created a custom hook useMainMovieTrailer() for fetching specific movie Trailer from TMDB and updating/putting it the store
const useMainMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    getMovieVideos();
  }, []);

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results[20]);

    //filtering the videos which has type==="trailer"
    const filteredVideosTrailers = json.results.filter(
      (video) => video.type === "Trailer"
    );
    // console.log(filteredVideosTrailers[0]);
    //trailer==="type" is not present then take the first video
    const mainTrailer = filteredVideosTrailers.length
      ? filteredVideosTrailers[0]
      : json.results[0];
    console.log(mainTrailer);
    dispatch(addTrailerVideo(mainTrailer));
  };
};

export default useMainMovieTrailer;
