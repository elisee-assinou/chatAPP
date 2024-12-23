// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgVE225r9IFnIbfnXStAwHMlmypo202K8",
  authDomain: "chatapppascalangular.firebaseapp.com",
  projectId: "chatapppascalangular",
  storageBucket: "chatapppascalangular.firebasestorage.app",
  messagingSenderId: "987547169723",
  appId: "1:987547169723:web:7bfb44096c6c9e47970a9e",
  measurementId: "G-3PVLSMJK8J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
