// connect to database
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://playground-db759-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings);
const database = getDatabase(app);
const accountInDB = ref(database, "accounts");
//


// test account
const admin_id = 'admin';
const admin_password = '999';
//

// Get user inputs for login
const user_id = document.querySelector('#user_id');
const user_password = document.querySelector('#user_password');
//

// when click login button
const login_btn = document.querySelector('#login_btn');
login_btn.addEventListener('click', function(){
    if(user_id.value === admin_id && user_password.value === admin_password){
        alert('login successful');
        window.location.href = './HomePage/home.html';
    }
    else{
        alert('account does not exist');
    }
});
//

// when register button is click
const register_btn = document.querySelector('#register_btn');
register_btn.addEventListener('click', function() {
    window.location.href = './RegisterPage/register.html';
});