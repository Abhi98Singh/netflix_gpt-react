import { useState } from "react";
import { NETFLIX_BG_IMG_URL } from "../utils/constants";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img alt="netflix-bg-img" src={NETFLIX_BG_IMG_URL} />
      </div>

      {isSignInForm ? (
        <form className="absolute py-12 px-16  w-[30%] my-32 mx-auto right-8 left-8 text-white bg-black bg-opacity-80 rounded-lg">
          <h1 className="font-bold text-3xl mb-6">Sign In</h1>
          <div className="flex flex-col items-center">
            <input
              type="email"
              placeholder="Email Address"
              className="py-3 px-4 w-full mt-6 bg-gray-200 bg-opacity-25 text-lg  font-semibold "
            />
            <input
              type="password"
              placeholder="Password"
              className="py-3 px-4 w-full mt-6 bg-gray-200 bg-opacity-25 text-lg font-semibold"
            />
            <button className="w-full py-3 mt-6 text-lg font-semibold bg-red-600 rounded-lg hover:bg-red-700 hover:cursor-pointer">
              Sign in
            </button>
            <p className="mt-3 hover:underline hover:text-gray-300 hover:cursor-pointer">
              Forget Password?
            </p>
          </div>
          <div className="flex items-center mt-3 ">
            <input type="checkbox" className="w-8 h-5  hover:cursor-pointer" />{" "}
            <span className="font-semibold ">Remember me</span>
          </div>
          <div className="mt-3">
            <span className="text-gray-300 font-medium ">New to Netflix?</span>
            <span
              onClick={toggleSignInForm}
              className=" font-bold pl-1 hover:underline hover:cursor-pointer"
            >
              Sign up now.
            </span>
          </div>
        </form>
      ) : (
        <form className="absolute py-12 px-16  w-[30%] my-32 mx-auto right-8 left-8 text-white bg-black bg-opacity-80 rounded-lg">
          <h1 className="font-bold text-3xl mb-6">Sign Up</h1>
          <div className="flex flex-col items-center">
            <input
              type="text"
              placeholder="Full Name"
              className="py-3 px-4 w-full mt-6 bg-gray-200 bg-opacity-25 text-lg  font-semibold "
            />
            <input
              type="email"
              placeholder="Email Address"
              className="py-3 px-4 w-full mt-6 bg-gray-200 bg-opacity-25 text-lg  font-semibold "
            />
            <input
              type="password"
              placeholder="Password"
              className="py-3 px-4 w-full mt-6 bg-gray-200 bg-opacity-25 text-lg font-semibold"
            />
            <button className="w-full py-3 mt-6 text-lg font-semibold bg-red-600 rounded-lg hover:bg-red-700 hover:cursor-pointer">
              Sign up
            </button>
          </div>

          <div className="mt-5">
            <span className="text-gray-300 font-medium ">
              Already a Memeber,
            </span>
            <span
              onClick={() => {
                toggleSignInForm();
              }}
              className=" font-bold pl-2 hover:underline hover:cursor-pointer"
            >
              Sign in now.
            </span>
          </div>
        </form>
      )}
    </div>
  );
};

export default Login;
