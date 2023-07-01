// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAC1FfKPLhI90hRO7FxxJf6lHLDC666F1w",
  authDomain: "fe-pbl-5344b.firebaseapp.com",
  projectId: "fe-pbl-5344b",
  storageBucket: "fe-pbl-5344b.appspot.com",
  messagingSenderId: "604065962060",
  appId: "1:604065962060:web:0f2bba0f8b542fe1807ce9",
  measurementId: "G-X87S57J72X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig; 