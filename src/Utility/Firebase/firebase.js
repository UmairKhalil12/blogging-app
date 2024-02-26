// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBn1DNKxvNcs6Cv-jOWMGA_ONHGI00y0fE",
  authDomain: "react-blog-e8f38.firebaseapp.com",
  projectId: "react-blog-e8f38",
  storageBucket: "react-blog-e8f38.appspot.com",
  messagingSenderId: "1043779082042",
  appId: "1:1043779082042:web:7279d40355a7abc614e203"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)

export { app, auth, db, storage } 