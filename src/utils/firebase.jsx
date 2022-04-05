// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiTOxPqMmr-3IqiQs6e7KZ0uA3guW27Qs",
  authDomain: "amarilis-cake-53373.firebaseapp.com",
  projectId: "amarilis-cake-53373",
  storageBucket: "amarilis-cake-53373.appspot.com",
  messagingSenderId: "71947768509",
  appId: "1:71947768509:web:1dfb58802782a2b267ddd4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)