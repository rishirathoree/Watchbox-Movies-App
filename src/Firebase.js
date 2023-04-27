// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDg0SrEKXhxtMQp1qygAI_GRWC7Mxq8-yQ",
  authDomain: "watchbox-312a3.firebaseapp.com",
  projectId: "watchbox-312a3",
  storageBucket: "watchbox-312a3.appspot.com",
  messagingSenderId: "633219378723",
  appId: "1:633219378723:web:daf7f725ce5a9b5c194b96",
  measurementId: "G-5T9T9YFBG6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth  = getAuth(app)
export default app