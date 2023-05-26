// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: import.meta.env.VITE_apiKey,
  // authDomain: import.meta.env.VITE_authDomain,
  // projectId: import.meta.env.VITE_projectId,
  // storageBucket: import.meta.env.VITE_storageBucket,
  // messagingSenderId: import.meta.env.VITE_messagingSenderId,
  // appId: import.meta.env.VITE_appId
  apiKey: "AIzaSyAFS7R4JoXm8S4iOseMUd1FNL6h3L3klHU",
  authDomain: "food-garage-336a1.firebaseapp.com",
  projectId: "food-garage-336a1",
  storageBucket: "food-garage-336a1.appspot.com",
  messagingSenderId: "733189009513",
  appId: "1:733189009513:web:8586380bbdf13ca067b2f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;