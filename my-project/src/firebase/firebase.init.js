// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAo5BXMzsSnU5vuGGVk3SLcRMYxrvQcihg",
  authDomain: "simple-firebase2-85364.firebaseapp.com",
  projectId: "simple-firebase2-85364",
  storageBucket: "simple-firebase2-85364.firebasestorage.app",
  messagingSenderId: "907124276609",
  appId: "1:907124276609:web:4d7c691699c124a8043c80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;