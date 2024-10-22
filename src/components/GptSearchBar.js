import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[4%] flex justify-center ">
      <form className="p-6 m-6 w-1/2 bg-black grid grid-flow-col">
        <input
          className="py-2 pl-3 col-span-11  border-red-600 border-2 rounded-tl-lg"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="py-2 px-4  col-span-1 font-medium text-lg bg-red-600 text-white rounded-tr-lg">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
