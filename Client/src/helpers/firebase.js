// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getEnv } from "./getenv";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: getEnv("VITE_FIREBASE_API"),
  authDomain: "snapwrite-7dc83.firebaseapp.com",
  projectId: "snapwrite-7dc83",
  storageBucket: "snapwrite-7dc83.firebasestorage.app",
  messagingSenderId: "171216113415",
  appId: "1:171216113415:web:49b29b7f5d1791f6e5ffa2",
  measurementId: "G-Q6ZF3BKTT0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth=getAuth(app)
const provider=new GoogleAuthProvider()

export {auth, provider}