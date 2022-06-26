// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4jxMiWz3qU4XYx4NeqRvh6KDYHTa1O6I",
  authDomain: "hydro-50beb.firebaseapp.com",
  databaseURL: "https://hydro-50beb-default-rtdb.firebaseio.com",
  projectId: "hydro-50beb",
  storageBucket: "hydro-50beb.appspot.com",
  messagingSenderId: "595936725495",
  appId: "1:595936725495:web:5985db754c1158a0c4c6f2",
  measurementId: "G-S2NWZRGYG3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, analytics, db, auth };