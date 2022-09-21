// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDV9txlEFh6Jk7QzCcNml-AhkYpgg5qHRo",
  authDomain: "react-jahnel.firebaseapp.com",
  projectId: "react-jahnel",
  storageBucket: "react-jahnel.appspot.com",
  messagingSenderId: "843731772225",
  appId: "1:843731772225:web:ce1d1022ce666a5bf977c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// db = database