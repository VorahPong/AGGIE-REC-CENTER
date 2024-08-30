// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdMd1YfF6bmNUVsBWnlmxn7kFCKviGHrY",
  authDomain: "playground-db759.firebaseapp.com",
  databaseURL: "https://playground-db759-default-rtdb.firebaseio.com",
  projectId: "playground-db759",
  storageBucket: "playground-db759.appspot.com",
  messagingSenderId: "686238141979",
  appId: "1:686238141979:web:f41c5c10271c38128572be"
};


const confirm_btn = document.querySelector('#confirm_btn');
confirm_btn.addEventListener('click', (event) => {
    event.preventDefault();

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const db = getFirestore(app);

    // Get user inputs for register
    const email = document.querySelector('#user_email').value;
    const password = document.querySelector('#user_password').value;
    const user_id = document.querySelector('#user_id').value;
    const user_firstName = document.querySelector('#user_firstName').value;
    const user_lastName = document.querySelector('#user_lastName').value;

    if(password < 6) {
        alert('Password must be longer than 6 characters');
        return;
    }
    

    // if everything are good, move on with auth
    createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
        // Signed up 
        const user = userCredential.user;
        const user_data = {
            email: email,
            first_Name: user_firstName,
            last_Name: user_lastName,
            student_id: user_id,
            borrow_ball: false,
            qr_code: null,
            last_login: Date.now()
        };
        const user_auth = auth.currentUser;
        await setDoc(doc(db, "students", user_auth.uid), user_data);
        alert("Account created");
        window.location.href = "../index.html";
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        // ..
    });
});