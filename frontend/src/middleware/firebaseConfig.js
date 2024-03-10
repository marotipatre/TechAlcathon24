// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKLXKW-AqqM0P5x3Xn-gf7D6df7t0Hso0",
  authDomain: "easyweb3-a0193.firebaseapp.com",
  projectId: "easyweb3-a0193",
  storageBucket: "easyweb3-a0193.appspot.com",
  messagingSenderId: "81623731836",
  appId: "1:81623731836:web:16c8aefb093f5aef8b83f9",
  measurementId: "G-W460ZXFDMJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);