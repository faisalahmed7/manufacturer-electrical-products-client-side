// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDLVhXanhiSBmv2DRGAuqyKDEC6yBIPdBw",
    authDomain: "manufacturer-tools-f767c.firebaseapp.com",
    projectId: "manufacturer-tools-f767c",
    storageBucket: "manufacturer-tools-f767c.appspot.com",
    messagingSenderId: "583888869216",
    appId: "1:583888869216:web:2811af893edfd45d947005"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;