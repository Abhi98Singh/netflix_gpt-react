import { MdOutlineCancel } from "react-icons/md";
import { IoWarningOutline } from "react-icons/io5";
import { BsExclamationOctagon } from "react-icons/bs";
import { useRef, useState } from "react";
import { NETFLIX_BG_IMG_URL, PROFILE_PIC_URL } from "../utils/constants";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const [errorMessage, setErrorMessage] = useState(null);

  const [authError, setAuthError] = useState(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  //useNavigate() hook : for navigation to diffrent route
  const navigate = useNavigate();

  const dispatch = useDispatch();

  //useRef() will create a refrences for email and password
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleBtnClick = () => {
    //Validate the Form Data

    const message = checkValidData(
      email.current.value,
      password.current.value
      // name.current.value
    );
    setErrorMessage(message);
    console.log("Email : ", email.current.value);
    console.log("Password : ", password.current.value);
    // console.log("Name : ", name.current.value);

    //if message has something(string) means it is not null then return dont do anything otherwise
    if (message) return;

    //Authrntication using Firebase
    // Sign In / Sign Up Logic
    if (!isSignInForm) {
      //Sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name?.current?.value,
            photoURL: PROFILE_PIC_URL,
          })
            .then(() => {
              //dispatch an action to update the the store : fixing the bug
              const { uid, email, displayName, photoURL } = auth.currentUser; //currentValue/updatedValue of user
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              setAuthError(error.errorCode);
            });

          console.log(user);

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          // const errorMessage = error.message;
          console.log(errorCode);
          setAuthError(errorCode);
          //auth/email-already-in-use

          // ..
        });
    } else {
      //Sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
        })
        .catch((error) => {
          const errorCode = error.code;
          // const errorMessage = error.message;
          console.log(errorCode);
          setAuthError(errorCode);
          // errorCode :- auth/invalid-credential
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute ">
        <img alt="netflix-bg-img" src={NETFLIX_BG_IMG_URL} />
      </div>

      {
        <form
          //to prevent default behaviour of form i.e submit the form-data and refresh the page
          onSubmit={(e) => e.preventDefault()}
          className="absolute py-12 px-16  w-[30%] my-32 mx-auto right-8 left-8 text-white bg-black bg-opacity-80 rounded-lg"
        >
          <h1 className="font-bold text-3xl mb-6">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          <div className="flex flex-col items-center">
            {isSignInForm && authError === "auth/invalid-credential" && (
              <div className=" p-3  font-semibold text-red-600 border-2 border-red-600 flex items-center ">
                <BsExclamationOctagon className="inline  mr-2 h-5 w-5" />{" "}
                <span>Incorrect Email or Password</span>
              </div>
            )}
            {!isSignInForm && (
              <input
                ref={name}
                type="text"
                placeholder="Full Name"
                className={
                  "py-3 px-4 w-full mt-6 bg-gray-200 bg-opacity-25 text-lg  font-semibold " +
                  (errorMessage !== null && " border-2 border-red-700")
                }
              />
            )}

            <input
              ref={email}
              type="email"
              placeholder="Email Address"
              className={
                "py-3 px-4 w-full mt-6 bg-gray-200 bg-opacity-25 text-lg  font-semibold " +
                (errorMessage === "Invalid Email" && " border-2 border-red-600")
              }
            />

            {errorMessage === "Invalid Email" && (
              <div className="text-red-600  pt-1 flex items-center">
                <MdOutlineCancel className="inline mr-1" />
                <span>Please enter a valid email address</span>
              </div>
            )}

            <input
              ref={password}
              type="password"
              placeholder="Password"
              className={
                "py-3 px-4 w-full mt-6 bg-gray-200 bg-opacity-25 text-lg  font-semibold " +
                (errorMessage === "Invalid Password" &&
                  " border-2 border-red-700")
              }
            />
            {errorMessage === "Invalid Password" && (
              <div className="text-red-600  pt-1 flex items-center">
                <MdOutlineCancel className="inline mr-1" />
                <span>Please enter a valid password</span>
              </div>
            )}
            {!isSignInForm && authError === "auth/email-already-in-use" && (
              <div className="text-yellow-500 font-semibold text-lg mt-3 flex items-center">
                <IoWarningOutline className="inline mr-1 h-5 w-5" />{" "}
                <span>Email Address already exists</span>
              </div>
            )}

            <button
              onClick={handleBtnClick}
              className="w-full py-3 mt-6 text-lg font-semibold bg-red-700 rounded-lg hover:bg-red-700 hover:cursor-pointer"
            >
              {" "}
              {isSignInForm ? "Sign in" : "Sign up"}
            </button>
            {isSignInForm && (
              <p className="mt-3 hover:underline hover:text-gray-300 hover:cursor-pointer">
                Forget Password?
              </p>
            )}
          </div>
          {isSignInForm && (
            <div className="flex items-center mt-3 ">
              <input
                type="checkbox"
                className="w-8 h-5   hover:cursor-pointer"
                id="checkRemember"
              />{" "}
              <label className="font-semibold " htmlFor="checkRemember">
                Remember me
              </label>
            </div>
          )}

          <div className="mt-3">
            <span className="text-gray-300 font-medium ">
              {isSignInForm ? "New to Netflix?" : "Already a Memeber,"}
            </span>
            <span
              onClick={toggleSignInForm}
              className=" font-bold pl-1 hover:underline hover:cursor-pointer"
            >
              {" "}
              {isSignInForm ? "Sign up now." : "Sign in now."}
            </span>
          </div>
        </form>
      }
    </div>
  );
};

export default Login;
