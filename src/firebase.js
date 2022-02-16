// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBi17MIRivdYdlPZ9P2AYLNmi-fMuHnFOU",
  authDomain: "cake-app-7541b.firebaseapp.com",
  projectId: "cake-app-7541b",
  storageBucket: "cake-app-7541b.appspot.com",
  messagingSenderId: "675761361186",
  appId: "1:675761361186:web:5e252b294f37f9b776557b",
  measurementId: "G-JQN0QFLFBY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);