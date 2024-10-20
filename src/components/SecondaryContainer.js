import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );
  const trendingMovies = useSelector((store) => store.movies.trendingMovies);
  const popularMovies = useSelector((store) => store.movies.popularMovies);
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);

  return (
    <div className=" bg-black w-screen">
      <div className="-mt-52 pl-12 relative z-20">
        <MovieList title={"New Releases"} movies={nowPlayingMovies} />
        <MovieList title={"Popular"} movies={popularMovies} />
        <MovieList title={"Top Rated"} movies={topRatedMovies} />
        <MovieList title={"Upcoming"} movies={upcomingMovies} />
        <MovieList title={"Trending"} movies={trendingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
