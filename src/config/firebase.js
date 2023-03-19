// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {

  apiKey: "AIzaSyDsnw4L54KgH16_MUWWOuJfX50EGyhD7R0",

  authDomain: "bikepark-2.firebaseapp.com",

  projectId: "bikepark-2",

  storageBucket: "bikepark-2.appspot.com",

  messagingSenderId: "207967450354",

  appId: "1:207967450354:web:2d35e9241765720db28c6b",

  measurementId: "G-NTXDFYFQ8L"

};



// Initialize Firebase

const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const storage = getStorage(app);



