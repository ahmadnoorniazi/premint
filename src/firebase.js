// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWLo4cYfcc9vpBaJ7Y_NCoF7ZDxRopMZg",
  authDomain: "premit-ed86b.firebaseapp.com",
  projectId: "premit-ed86b",
  storageBucket: "premit-ed86b.appspot.com",
  messagingSenderId: "401809440987",
  appId: "1:401809440987:web:2809605a1b7011460accfe",
  measurementId: "G-7DKJH41MQN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const authentication = getAuth(app);
