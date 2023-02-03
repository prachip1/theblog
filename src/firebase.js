// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnYPSU4trcSFOq5amNfrDLGeoDhgs7TYw",
  authDomain: "theblog-3ba18.firebaseapp.com",
  projectId: "theblog-3ba18",
  storageBucket: "theblog-3ba18.appspot.com",
  messagingSenderId: "567763527533",
  appId: "1:567763527533:web:233911797e8133750cdc64",
  measurementId: "G-7Z96FXLGT9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);