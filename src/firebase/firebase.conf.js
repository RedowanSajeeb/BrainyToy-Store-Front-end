// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXETgwyS2fIIWvPWDvvBLxmD4-d178x1E",
  authDomain: "learnplay-haven.firebaseapp.com",
  projectId: "learnplay-haven",
  storageBucket: "learnplay-haven.appspot.com",
  messagingSenderId: "805905994779",
  appId: "1:805905994779:web:5b26009e2a164c557394be",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;