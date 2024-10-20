import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  //bcz of optional Chaining, if nowPlayingMovies is null we wont get error
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  //early return :- dont go ahead
  if (!movies) return; // if (movies === null) return; //it is one and the same thing

  const mainMovie = movies[13];
  console.log(mainMovie);

  //Destructuring :extracting the deatils from mainMavie using destrcuruing
  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      <VideoTitle title={original_title} description={overview} />
      {/* <VideoBackkground /> */}
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
