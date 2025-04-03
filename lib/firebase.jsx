import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyChY_jBflOQ559P11OTah7MfPePq-OX3LY",
  authDomain: "edu-blogg.firebaseapp.com",
  projectId: "edu-blogg",
  storageBucket: "edu-blogg.firebasestorage.app",
  messagingSenderId: "1046466558019",
  appId: "1:1046466558019:web:5c740879bfc6313c63bcf6",
  measurementId: "G-RQ29NJYDL2",
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage(app);

export let analytics;
if (typeof window !== "undefined") {
  import("firebase/analytics").then(({ getAnalytics }) => {
    analytics = getAnalytics(app);
  });
}