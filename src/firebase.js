// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDPDTJIprKdiKGxAYFmQs--JgvdQVOkpBk",
  authDomain: "mdc-website-2526.firebaseapp.com",
  projectId: "mdc-website-2526",
  storageBucket: "mdc-website-2526.firebasestorage.app",
  messagingSenderId: "435807919406",
  appId: "1:435807919406:web:244a76bb241db460f66ebf",
  measurementId: "G-GHDFMQ9KEL"
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)