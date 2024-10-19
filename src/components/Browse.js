import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  //We wanted our Browse comp to be cleaned

  //to make our comp cleaner and following Single Responsibity Principle just render the comp
  //Custom hook : Fetchind data from TMDB website and updating the Store
  useNowPlayingMovies();

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
