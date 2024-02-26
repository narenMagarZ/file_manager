// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXxwJxQK8LM6CODGgGJv_KupPGwX956Cs",
  authDomain: "file-manager-a01ce.firebaseapp.com",
  projectId: "file-manager-a01ce",
  storageBucket: "file-manager-a01ce.appspot.com",
  messagingSenderId: "750248788093",
  appId: "1:750248788093:web:3839aced6254370750f114",
  measurementId: "G-XSVZV2SXX7"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);