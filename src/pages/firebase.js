import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyBhqAPPNeN-O9m5a2C5GczXHTkV3ggYA3k",
  authDomain: "geetenterprises-97d1b.firebaseapp.com",
  projectId: "geetenterprises-97d1b",
  storageBucket: "geetenterprises-97d1b.firebasestorage.app",
  messagingSenderId: "985681384601",
  appId: "1:985681384601:web:97d838b9f99c8905e81408",
  measurementId: "G-9G4XNX2VDV"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, getDocs };
