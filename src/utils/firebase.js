// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvaWH9XyhFlyc00XvifHDG10CMNMfj2dk",
  authDomain: "netflix-gpt-a5230.firebaseapp.com",
  projectId: "netflix-gpt-a5230",
  storageBucket: "netflix-gpt-a5230.appspot.com",
  messagingSenderId: "432888366770",
  appId: "1:432888366770:web:d5da7a2d8c277c76f8ebab",
  measurementId: "G-V9L0BWQ7B2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
