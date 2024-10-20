import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  //We wanted our Browse comp to be cleaned

  //to make our comp cleaner and following Single Responsibity Principle just render the comp
  //Custom hooks : Fetchind Movies data from TMDB website and updating the Store
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useTrendingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/*
          - MainContainer
                - VideoBackground
                - VideoTitle
          - SecondaryContainer
                - MovieLists * n
                - cards * n
            
       */}
    </div>
  );
};

export default Browse;
