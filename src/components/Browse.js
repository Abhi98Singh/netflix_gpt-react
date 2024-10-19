import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";

const Browse = () => {
  //We wanted our Browse comp to be cleaned

  //Custom hook : Fetchind data from TMDB website and updating the Store
  useNowPlayingMovies();

  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
