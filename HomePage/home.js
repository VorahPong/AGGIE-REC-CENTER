import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";

const firebaseConfig = {
    // ...
    // The value of `databaseURL` depends on the location of the database
    databaseURL: "https://playground-db759-default-rtdb.firebaseio.com/",
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

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