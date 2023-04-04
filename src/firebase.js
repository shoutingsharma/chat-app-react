// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDQFBiOCbaPyX2-5J8sbUk0XEJPUMHsqQ4",
  authDomain: "chat-app-ffb07.firebaseapp.com",
  projectId: "chat-app-ffb07",
  storageBucket: "chat-app-ffb07.appspot.com",
  messagingSenderId: "282058395336",
  appId: "1:282058395336:web:b33030e75bc1692de5dffd",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);