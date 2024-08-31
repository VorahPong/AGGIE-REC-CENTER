import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { getFirestore, getDoc, doc } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

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
const db_firebase = getFirestore(app);
const db = getDatabase(app);
const auth = getAuth(app);



// get userId from local storage
const userId = localStorage.getItem('userId');

// if the userId if it is authentication
getAuth(app).onAuthStateChanged((user) => {
    if (user) {
        // User is signed in 

    } else {
      // User is signed out
      // Redirect to login page if needed
      alert("You are not sign in");
      window.location.href = '../index.html';
    }
  });

// get data
const userDocRef = doc(db_firebase, 'students', userId);
let userData;

function handleUserData(data) {
    userData = data;
}

getDoc(userDocRef)
.then((doc) => {
        if (doc.exists()) {
            // User document exists, get the data
            handleUserData(doc.data());
            // ... Use the retrieved data ...
            // Updating Welcome
            const welcome = document.querySelector('#welcome');
            welcome.textContent = `Welcome, ${userData.first_Name}!`
            //console.log('User Data:', userData);
        } else {
            // User document does not exist
            console.error('User document not found');
        }
    })
    .catch((error) => {
    console.error('Error getting user document:', error);
});

// Access userData after the data is retrieved
setTimeout(() => {
    console.log('User Data (after retrieval):', userData); 
  }, 1000); // Add a delay to ensure data is retrieved
console.log(userData);
//

// Updating login counter
const loginCounter = ref(db, 'loginCounter');
let value;
onValue(loginCounter, (snapshot) => {
    const data = snapshot.val();
    const loginCounterText = document.querySelector('#loginCounter');
    loginCounterText.textContent = `Amount of user logins today: ${data}`;
  });


// clicking on each function
const functions = document.querySelectorAll('img');

for (let index = 0; index < functions.length; index++) {
    const element = functions[index];
    element.addEventListener('click', function() {
        switch (element.id) {
            case 'schedule' :
                window.location.href = './functionsPage/schedule/schedule.html';
                break;
            case 'scanner' :
                window.location.href = './functionsPage/scanner/scanner.html';
                break;
        }
    });
    
}

// Buttons click
const logout_btn = document.querySelector('#logout_btn');
logout_btn.addEventListener('click', () => { signOut(auth); });