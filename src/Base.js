import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
import {getFirestore} from "@firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAFXNuxOdXuYthe9UlWsB0F1PbMgkWbENs",
  authDomain: "hybridfacilitieskleen.firebaseapp.com",
  projectId: "hybridfacilitieskleen",
  storageBucket: "hybridfacilitieskleen.appspot.com",
  messagingSenderId: "659447140829",
  appId: "1:659447140829:web:e6ea24e627e338ff00a634",
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);


