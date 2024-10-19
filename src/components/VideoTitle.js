import { FaPlay } from "react-icons/fa";
import { MdOutlineInfo } from "react-icons/md";

const VideoTitle = ({ title, description }) => {
  return (
    <div className="pt-36 px-12">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{description}</p>
      <div className="buttons flex items-center">
        <button className="px-3 py-1 bg-white border-black border rounded-sm text-lg font-bold">
          <FaPlay className="inline mx-2" />
          Play
        </button>
        <button className="ml-2 px-4 py-1 min-h-[37.6px] bg-gray-400 text-white rounded-sm  font-medium">
          <MdOutlineInfo className="inline mr-2  w-6 h-6" />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
