// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: "the-elara-news.firebaseapp.com",
  projectId: "the-elara-news",
  storageBucket: "the-elara-news.appspot.com",
  messagingSenderId: "361377242307",
  appId: "1:361377242307:web:74c17241b2b5fbd18e9676"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;