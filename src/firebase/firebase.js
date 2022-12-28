// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getDatabase } from "firebase/database";


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyBrlBQY72pLmQeKPuIE5H7CR0L-GFl_hls",

  authDomain: "bikepark-80c12.firebaseapp.com",

  projectId: "bikepark-80c12",

  storageBucket: "bikepark-80c12.appspot.com",

  messagingSenderId: "738151578227",

  appId: "1:738151578227:web:743f27ba10efca662f8806",

  measurementId: "G-N6XDZVGMBE",

  databaseURL: "https://bikepark-80c12-default-rtdb.europe-west1.firebasedatabase.app/",


};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);

export const database = getDatabase(app)

export const uploadFile = async (file) => {
  const storageRef = ref(storage, file.name);
  // 'file' comes from the Blob or File API
  uploadBytes(storageRef, file).then((snapshot) => {
    console.log('Uploaded a blob or file!');
  });
}

export const downloadFile = async (file) => {
  getDownloadURL(ref(storage, file)).then((url) => console.log(url))
  .catch((error) => {
    console.log("error")
  });
}




