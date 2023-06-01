import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyAcI6IHd2jaGaTa61zEHi54qS1uowO145I",
  authDomain: "social-media-7836c.firebaseapp.com",
  projectId: "social-media-7836c",
  storageBucket: "social-media-7836c.appspot.com",
  messagingSenderId: "878123081196",
  appId: "1:878123081196:web:a7e5cdff1765e24f01b4c9"
};

const app = initializeApp(firebaseConfig); 
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
