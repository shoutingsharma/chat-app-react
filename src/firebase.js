// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBH2xCNEgrcqNlFMPyIlzE2axFOgVzd6_0",
  authDomain: "chat-app-b2fb2.firebaseapp.com",
  projectId: "chat-app-b2fb2",
  storageBucket: "chat-app-b2fb2.appspot.com",
  messagingSenderId: "1087752910253",
  appId: "1:1087752910253:web:d0138aacebd15e1b38dd24",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);
