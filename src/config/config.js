// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDS_J9CwCRbJI8-v3yc38zZsaPyrpo3Ybs",
  authDomain: "form-424fa.firebaseapp.com",
  projectId: "form-424fa",
  storageBucket: "form-424fa.appspot.com",
  messagingSenderId: "383377457475",
  appId: "1:383377457475:web:b73c63f5454021f9df6ff6",
  measurementId: "G-E9ZP5F3MEJ",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {
  auth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
};
