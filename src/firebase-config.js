import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCvzQDGbU8ndDGJ3mGCeWA0mSsCNRhsbt0",
  authDomain: "woofcare-a9fac.firebaseapp.com",
  projectId: "woofcare-a9fac",
  storageBucket: "woofcare-a9fac.firebasestorage.app",
  messagingSenderId: "506976961145",
  appId: "1:506976961145:web:551d2afd7dc9f0e8240aa8",
  measurementId: "G-FJDV4K81CK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);