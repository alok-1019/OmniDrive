// import firebase from 'firebase/app'
import firebase from 'firebase';
// import { initializeApp } from "firebase/app";
// import {initializeApp}  from 'firebase/app';

// const firebaseConfig = {
//     apiKey: "AIzaSyANE39sgac-2bJHy3UQ5UcCLonpJ4OfQ8A",
//     authDomain: "drive-clone-e32b9.firebaseapp.com",
//     projectId: "drive-clone-e32b9",
//     storageBucket: "drive-clone-e32b9.appspot.com",
//     messagingSenderId: "1065309532898",
//     appId: "1:1065309532898:web:58ae8cce733671b27fe4bb"
// };
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALK_HlKhxYGNiUr1MYAR2DgfwhKJ-K4WM",
  authDomain: "omnidrive-be4a3.firebaseapp.com",
  projectId: "omnidrive-be4a3",
  storageBucket: "omnidrive-be4a3.appspot.com",
  messagingSenderId: "973747051053",
  appId: "1:973747051053:web:fcd5812e3043c8b281b6a4"
};


// const app = initializeApp(firebaseConfig);
const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()
const db = firebaseApp.firestore()

export { auth, provider, db, storage }