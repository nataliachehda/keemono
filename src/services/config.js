import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCnrZvhZpOTX2-jBwO9rC6dvcq4aUvVc6M",
  authDomain: "keemono-fc1c4.firebaseapp.com",
  projectId: "keemono-fc1c4",
  storageBucket: "keemono-fc1c4.appspot.com",
  messagingSenderId: "594113455869",
  appId: "1:594113455869:web:23454790df7bd88e9fc094"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore (app);