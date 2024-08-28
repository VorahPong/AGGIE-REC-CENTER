import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://playground-db759-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings);
const database = getDatabase(app);
const accountInDB = ref(database, "accounts");
//

// Get user inputs for register
const user_id = document.querySelector('#user_id');
const user_password = document.querySelector('#user_password');
const user_password_confirm = document.querySelector('#user_password_confirm');
//

const confirm_btn = document.querySelector('#confirm_btn');
confirm_btn.addEventListener('click', function() {
    if(user_password.value === user_password_confirm.value) {
        alert("Account has been created");
        push(accountInDB, `user: ${user_id.value}, password: ${user_password.value}`);
    }
    else {
        alert("Your password does not match");
    }
});