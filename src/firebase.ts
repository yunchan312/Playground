// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzsuE5lyOxus9bKBZ-L4Ax4uzerrm3x8c",
  authDomain: "playground-e57ca.firebaseapp.com",
  projectId: "playground-e57ca",
  storageBucket: "playground-e57ca.firebasestorage.app",
  messagingSenderId: "999073437213",
  appId: "1:999073437213:web:05188e6f8c887d2500d8f4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getFirestore(app);
