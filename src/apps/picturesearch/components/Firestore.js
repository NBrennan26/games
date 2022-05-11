import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAF5oRpyAbAlwn-DHKt8BO5u6XjfzwVzFQ",
  authDomain: "picturesearch-19e52.firebaseapp.com",
  projectId: "picturesearch-19e52",
  storageBucket: "picturesearch-19e52.appspot.com",
  messagingSenderId: "428998515228",
  appId: "1:428998515228:web:c7389cdbcb3aed2e319dd9",
  measurementId: "G-RTLWWHMKCT",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAF5oRpyAbAlwn-DHKt8BO5u6XjfzwVzFQ",
  authDomain: "picturesearch-19e52.firebaseapp.com",
  projectId: "picturesearch-19e52",
  storageBucket: "picturesearch-19e52.appspot.com",
  messagingSenderId: "428998515228",
  appId: "1:428998515228:web:c7389cdbcb3aed2e319dd9",
  measurementId: "G-RTLWWHMKCT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
*/
