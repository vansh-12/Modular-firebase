// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore,collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFVnSuvU0dAMj5z0hy-0kk6sZbtanJmGs",
  authDomain: "learn-firebase-1b3f7.firebaseapp.com",
  projectId: "learn-firebase-1b3f7",
  storageBucket: "learn-firebase-1b3f7.appspot.com",
  messagingSenderId: "398029222481",
  appId: "1:398029222481:web:234e732a4c1346b65cbe70",
  measurementId: "G-TF2FWH99B7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
const db = getFirestore(app);
export const database = {
    users: collection(db, "users")
}