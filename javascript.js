// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";
import { auth, db } from './config.js'


//clear anything login info
localStorage.clear();

// when click login button
const login_btn = document.querySelector('#login_btn');
login_btn.addEventListener('click', function(){
    // Get user inputs for login
    const email = document.querySelector('#user_email').value;
    const password = document.querySelector('#user_password').value;
    //
    // Initialize Firebase
    // const app = initializeApp(firebaseConfig);
    // const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        localStorage.setItem('userId', user.uid);

        //loading icon
        const loading_icon = document.createElement('div');
        loading_icon.classList.add("loader");
        document.body.appendChild(loading_icon);
        //


        alert('Login Successful');
        // Increment the counter of login
        // const db = getDatabase(app);
        const dbRef = ref(db);
        const loginCounter = ref(db, 'loginCounter');
        get(child(dbRef, 'loginCounter')).then((snapshot) => {
            if (snapshot.exists()) {
                set(loginCounter, snapshot.val()+1);
            } else {
              console.log("No data available");
            }
          }).catch((error) => {
            console.error(error);
          });

          // redirect
          setTimeout(()=>{ window.location.href = './HomePage/home.html' }, 1000);

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
