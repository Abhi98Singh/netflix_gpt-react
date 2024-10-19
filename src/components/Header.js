// import { FaUserCircle } from "react-icons/fa";
import { NETFLIX_LOGO_URL } from "../utils/constants";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);
  console.log(user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    //this API will be called everytime when User Signed up/in/out :- We can do everthing from a single API
    const unsubscibe = onAuthStateChanged(auth, (user) => {
      //it'll check the auth of the user evertime comp re-renders
      if (user) {
        // User is signed in
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    //Unsunscibe when the comp is unmounts
    return () => unsubscibe();
  }, []);

  return (
    <div className="absolute w-full z-10 px-24 py-4 bg-gradient-to-b from-black flex justify-between">
      <img className="w-44 " src={NETFLIX_LOGO_URL} alt="netflix logo" />
      {user && (
        <div className="flex items-center  ">
          {/* <FaUserCircle className="inline w-8 h-8 text-white mr-6" /> */}

          <div className="flex flex-col jutify-center">
            <img
              className="inline w-9 h-9  mr-6 rounded-2xl "
              alt="profile img"
              src={user.photoURL}
            />
            {/* <span className="text-white">{user.displayName}</span> */}
          </div>

          <button
            onClick={handleSignOut}
            className="text-white py-1 px-3 font-medium bg-red-600 rounded-md hover:bg-red-700"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
