import './style.css'
import './style/profilepicture.sass'

// Import the functions you need from the SDKs you need
import {
  initializeApp
} from "firebase/app";
import {
  getAnalytics
} from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBI2evP8x0SZH1JQJ6juRmV3wQnIaRyFxQ",
  authDomain: "freddi-network.firebaseapp.com",
  databaseURL: "https://freddi-network-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "freddi-network",
  storageBucket: "freddi-network.appspot.com",
  messagingSenderId: "534966381727",
  appId: "1:534966381727:web:d3f5dc92cd1a8cdae0c6aa",
  measurementId: "G-RJCQR2SZX7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);