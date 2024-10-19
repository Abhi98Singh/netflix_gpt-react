import React, { useEffect } from "react";
import Header from "./Header";
import { API_OPTIONS } from "../utils/constants";

const Browse = () => {
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
  };
  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
