// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

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

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// test account
// const admin_id = 'admin';
// const admin_password = '999';
//



// when click login button
const login_btn = document.querySelector('#login_btn');
login_btn.addEventListener('click', function(){
    // Get user inputs for login
    const email = document.querySelector('#user_email').value;
    const password = document.querySelector('#user_password').value;
    //
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        alert('Login Successful');
        window.location.href = './HomePage/home.html';
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
    });
});
//

// when register button is click
const register_btn = document.querySelector('#register_btn');
register_btn.addEventListener('click', function() {
    window.location.href = './RegisterPage/register.html';
});