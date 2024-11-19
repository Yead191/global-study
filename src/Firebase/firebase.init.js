// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEBG7QPKuUOfXYSEukP67afU4g6z-SC7w",
  authDomain: "global-study-1dbe7.firebaseapp.com",
  projectId: "global-study-1dbe7",
  storageBucket: "global-study-1dbe7.firebasestorage.app",
  messagingSenderId: "1009022736849",
  appId: "1:1009022736849:web:dc1b0ab06a66083a8468f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);