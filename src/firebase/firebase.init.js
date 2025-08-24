// src/firebase/firebase.init.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
/* 
// Your web app's Firebase configuration
const firebaseConfig = {
  // import.meta.env
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
}; */

//healthcare32q@gmail.com // DeshGuide
const firebaseConfig = {

  apiKey: "AIzaSyB-ldVpHa1554RClJBfUCKC3K7hXMEZ9e8",

  authDomain: "deshguide.firebaseapp.com",

  projectId: "deshguide",

  storageBucket: "deshguide.firebasestorage.app",

  messagingSenderId: "879108306480",

  appId: "1:879108306480:web:7e6b06ddc96ed3a9125ff5"

};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
