// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHR6tBxX_yvYF59gkmNQxSOy0Q1_WKX_o",
  authDomain: "psmtdoorcount.firebaseapp.com",
  projectId: "psmtdoorcount",
  storageBucket: "psmtdoorcount.appspot.com",
  messagingSenderId: "250531188384",
  appId: "1:250531188384:web:5dabb69370ecfc27e2c3c5"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export default appFirebase;