// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAS4IJzJRO4ZuEhGbo935wDJd-QfNx6Rg",
  authDomain: "gpa-calculator-11240.firebaseapp.com",
  projectId: "gpa-calculator-11240",
  storageBucket: "gpa-calculator-11240.appspot.com",
  messagingSenderId: "800766925070",
  appId: "1:800766925070:web:689cb28ec7b2604c129f5f",
  measurementId: "G-J44R3MKZ2R"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
