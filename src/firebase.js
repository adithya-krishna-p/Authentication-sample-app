// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_B65ajsWIy_S7Wdv5nzHmmDCS1L1XUAg",
  authDomain: "authentication-app-50de6.firebaseapp.com",
  projectId: "authentication-app-50de6",
  storageBucket: "authentication-app-50de6.firebasestorage.app",
  messagingSenderId: "457478899631",
  appId: "1:457478899631:web:80a942d2a3424d4b75515a",
  measurementId: "G-167X0H41K7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export default app;