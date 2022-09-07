import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "chatapp-9401c.firebaseapp.com",
  projectId: "chatapp-9401c",
  storageBucket: "chatapp-9401c.appspot.com",
  messagingSenderId: "283022748126",
  appId: "1:283022748126:web:059ed46dac7b0da52e554f",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
