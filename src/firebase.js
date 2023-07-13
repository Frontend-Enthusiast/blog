import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyCKr3vzJlSHO8pQ7BSbeP_R7j3U2S81svc",
  authDomain: "blog-website-6a5e5.firebaseapp.com",
  projectId: "blog-website-6a5e5",
  storageBucket: "blog-website-6a5e5.appspot.com",
  messagingSenderId: "803689744504",
  appId: "1:803689744504:web:1ab614c635d144e5dd458d",
  measurementId: "G-F003ZCQQ5J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();