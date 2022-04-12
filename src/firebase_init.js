// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYBBp1AlEbcqxnXPKCwAk7973h8LCfTqk",
  authDomain: "genius-car-service-auth.firebaseapp.com",
  projectId: "genius-car-service-auth",
  storageBucket: "genius-car-service-auth.appspot.com",
  messagingSenderId: "1049201758500",
  appId: "1:1049201758500:web:d6b1af0d596b8d2a8e63b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;