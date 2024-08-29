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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
 

// Get user inputs for register
const user_id = document.querySelector('#user_id').value;
const user_firstName = document.querySelector('#user_firstName').value;
const user_lastName = document.querySelector('#user_lastName').value;
const user_password_confirm = document.querySelector('#user_password_confirm').value;
//

const confirm_btn = document.querySelector('#confirm_btn');
confirm_btn.addEventListener('click', (event) => {
    event.preventDefault();

    const email = document.querySelector('#user_email').value;
    const password = document.querySelector('#user_password').value;

    //alert("good");
    // if(validate_email(user_email) === false) {
    //     alert('Email is not valid!!');
    //     return;
    // }
    // if(validate_field(user_firstName) === false || validate_field(user_lastName) === false || validate_field(user_id) == false) {
    //     alert('Missing information');
    //     return;
    // }
    // if(password !== user_password_confirm) {
    //     alert('Password does not match!');
    //     return;
    // }
    

    // if everything are good, move on with auth
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
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

//
function validate_email(user_email) {
    if(/^[^@]+@\w+(\.\w+)+\w$/.test(user_email) === true) {
        return true;
    }
    else{
        return false;
    }
}

function validate_password(user_password) {
    // firebase only accepts lengths greater than 6
    if(user_password < 6) {
        return false;
    }
    else {
        return true;
    }
}

function validate_field(field) {
    if(field === null) {
        return false;
    }
    else {
        return true;
    }
}