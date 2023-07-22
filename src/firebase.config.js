// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC87IwXXrmSTdy1WoXnHmTKuaszHHIaaNo",
  authDomain: "project-7d62c.firebaseapp.com",
  projectId: "project-7d62c",
  storageBucket: "project-7d62c.appspot.com",
  messagingSenderId: "693081521481",
  appId: "1:693081521481:web:7c1911bb1c7a946d8dee98",
  measurementId: "G-K5QDFEG1V1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore();