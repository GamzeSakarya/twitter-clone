
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDE_Wo0rzM4xB3aCN4Mtr830C7KqW1I-Zw",
  authDomain: "twitter-clone-eceb1.firebaseapp.com",
  projectId: "twitter-clone-eceb1",
  storageBucket: "twitter-clone-eceb1.appspot.com",
  messagingSenderId: "543061411502",
  appId: "1:543061411502:web:bf7b633d64db04470e0f3f",
  measurementId: "G-QL6NTEHZ3T"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();

export { db };
