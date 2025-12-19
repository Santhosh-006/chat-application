// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chatapp-86aed.firebaseapp.com",
  projectId: "chatapp-86aed",
  storageBucket: "chatapp-86aed.firebasestorage.app",
  messagingSenderId: "1030663860734",
  appId: "1:1030663860734:web:643433329db1e29bd210af",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);

export const auth = getAuth();
export const db = getFirestore();
