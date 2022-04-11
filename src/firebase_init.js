// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCW_HHF_YgwGh7uBhgWmSRu8BXhsxcd898",
  authDomain: "genius-car-services-6dda3.firebaseapp.com",
  projectId: "genius-car-services-6dda3",
  storageBucket: "genius-car-services-6dda3.appspot.com",
  messagingSenderId: "263366742975",
  appId: "1:263366742975:web:b75c06b8ad230124f3870a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;