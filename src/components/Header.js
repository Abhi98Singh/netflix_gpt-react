import React from "react";
import { NETFLIX_LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="absolute z-10 px-24 py-4 bg-gradient-to-b from-black">
      <img className="w-44 " src={NETFLIX_LOGO_URL} alt="netflix logo" />
    </div>
  );
};

export default Header;
