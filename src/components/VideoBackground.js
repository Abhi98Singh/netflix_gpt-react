import { useSelector } from "react-redux";
import useMainMovieTrailer from "../hooks/useMainMovieTrailer";

const VideoBackground = ({ movieId }) => {
  //optional chaining for preventing errot
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  console.log(trailerVideo);

  //to make our comp cleaner and following Single Responsibity Principle just render the comp
  //Custom hook : Fetchind Trailer video and updating the Store
  useMainMovieTrailer(movieId);

  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&mute=1&loop=1&playlist=" +
          trailerVideo?.key
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
