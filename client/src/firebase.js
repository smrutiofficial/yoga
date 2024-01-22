// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mernauth-9c5b3.firebaseapp.com",
  projectId: "mernauth-9c5b3",
  storageBucket: "mernauth-9c5b3.appspot.com",
  messagingSenderId: "254407096005",
  appId: "1:254407096005:web:11d01e2ee3c8ef7b77a2ac"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);