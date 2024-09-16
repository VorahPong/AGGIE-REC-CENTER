import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getDatabase, ref, onValue, set, get, child } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";
import { getAuth, signOut, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { getFirestore, getDoc, doc, setDoc  } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBdMd1YfF6bmNUVsBWnlmxn7kFCKviGHrY",
    authDomain: "playground-db759.firebaseapp.com",
    databaseURL: "https://playground-db759-default-rtdb.firebaseio.com",
    projectId: "playground-db759",
    storageBucket: "playground-db759.appspot.com",
    messagingSenderId: "686238141979",
    appId: "1:686238141979:web:f41c5c10271c38128572be"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db_firestore = getFirestore(app);
const db = getDatabase(app);
const auth = getAuth(app);

export { db, db_firestore, doc, getDoc, setDoc  }