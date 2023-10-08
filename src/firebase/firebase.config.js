// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDF1tING_Fmn48B-gV-xZ0YBCpdm5pb_Y4",
  authDomain: "auth-setup-firebase-router.firebaseapp.com",
  projectId: "auth-setup-firebase-router",
  storageBucket: "auth-setup-firebase-router.appspot.com",
  messagingSenderId: "512598014089",
  appId: "1:512598014089:web:6ff073425f1cd56302ee58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;