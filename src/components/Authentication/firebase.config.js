// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdqYhKN9-RtWLfQJRRgNjG20RaPrRiOa4",
  authDomain: "artisan-alley.firebaseapp.com",
  projectId: "artisan-alley",
  storageBucket: "artisan-alley.appspot.com",
  messagingSenderId: "891638876884",
  appId: "1:891638876884:web:189fae930f5b9ff4fd4941"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);