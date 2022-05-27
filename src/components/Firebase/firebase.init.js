
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBc78VHSqEpjgSi_QvK1fVwdbQUjbKnjWw",
  authDomain: "manufacturer-website-5e531.firebaseapp.com",
  projectId: "manufacturer-website-5e531",
  storageBucket: "manufacturer-website-5e531.appspot.com",
  messagingSenderId: "125075234971",
  appId: "1:125075234971:web:cea134c3fa552c77dd663e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
console.log(auth);
export default auth;