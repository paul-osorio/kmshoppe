// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtizBpq_v6KxcK-wZMW2chDuOuhVNtLG8",
  authDomain: "kmshoppe-351a9.firebaseapp.com",
  projectId: "kmshoppe-351a9",
  storageBucket: "kmshoppe-351a9.appspot.com",
  messagingSenderId: "742370854695",
  appId: "1:742370854695:web:543839e39261cb80d94b02",
  measurementId: "G-F6CXYC4EGT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
