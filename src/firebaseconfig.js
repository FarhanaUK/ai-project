// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyAWErCoBJg3YH9CPqnv-lk_ddCFRKnjwOA",
  authDomain: "ai-love-partner.firebaseapp.com",
  projectId: "ai-love-partner",
  storageBucket: "ai-love-partner.appspot.com",
  messagingSenderId: "605625370044",
  appId: "1:605625370044:web:cd5226e4d25392b77cd7b9",
  measurementId: "G-42D3G975DR"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);