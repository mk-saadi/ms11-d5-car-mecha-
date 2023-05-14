// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// console.log(import.meta.env.Vite_APIKEY);

const firebaseConfig = {
    apiKey: "AIzaSyAlIfJxORjpezOcHwUx74wUz5gzEduDtAQ",
    authDomain: "car-mecha-956a0.firebaseapp.com",
    projectId: "car-mecha-956a0",
    storageBucket: "car-mecha-956a0.appspot.com",
    messagingSenderId: "875024931218",
    appId: "1:875024931218:web:c573951373c3506264894b",
    // apiKey: import.meta.env.VITE_APIKEY,
    // authDomain: import.meta.env.VITE_AUTHDOMAIN,
    // projectId: import.meta.env.VITE_PROJECTID,
    // storageBucket: import.meta.env.VITE_STORAGEBUCKET,
    // messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
    // appId: import.meta.env.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
