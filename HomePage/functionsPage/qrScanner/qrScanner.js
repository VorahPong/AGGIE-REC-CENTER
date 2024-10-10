import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { getFirestore, getDoc, doc, } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
import { auth, db, db_firestore, app } from '../../../config.js'

const search_btn = document.querySelector('#search');
search_btn.addEventListener('click', () => {
    const qrCodeMessage = document.getElementById('result').textContent;

    // get data ref
    const userDocRef = doc(db_firestore, 'students', qrCodeMessage);
    // get data
    getDoc(userDocRef)
    .then((doc) => {
            if (doc.exists()) {
                // User document exists, get the data
                const userData = doc.data();
                console.log(userData);
                // Updating borrow ball status
                const borrow_ball = document.querySelector('#borrow_ball');
                borrow_ball.textContent = `Borrowing a Ball: ${userData.borrow_ball}`;
                // Updating Account Info
                const display_name = document.querySelector('#display_name');
                display_name.textContent = `Name: ${userData.first_Name} ${userData.last_Name}`;

                const display_id = document.querySelector('#display_id');
                display_id.textContent = `ID: ${userData.student_id}`;
                
                const display_lastlogin = document.querySelector('#display_lastlogin');
                display_lastlogin.textContent = `Last Login: ${Date(userData.last_login * 1000).split(' ').slice(0, 4).join(' ')}`;

            } else {
                // User document does not exist
                console.error('User document not found');
            }
        })
        .catch((error) => {
        console.error('Error getting user document:', error);
    });
});

