import { FaPlay } from "react-icons/fa";
import { MdOutlineInfo } from "react-icons/md";

const VideoTitle = ({ title, description }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{description}</p>
      <div className="buttons flex items-center">
        <button className="px-3 py-1 bg-white text-black  rounded-md text-lg font-bold hover:bg-opacity-75">
          <FaPlay className="inline mx-2" />
          Play
        </button>
        <button className="ml-2 px-4 py-1 min-h-[37.6px] bg-gray-400 bg-opacity-50 text-white rounded-md  font-medium hover:bg-opacity-75">
          <MdOutlineInfo className="inline mr-2  w-6 h-6" />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
